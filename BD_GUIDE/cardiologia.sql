-- Asegurar que dblink esté habilitado
CREATE EXTENSION IF NOT EXISTS dblink;

CREATE TABLE Equipamiento (
	idDepartamento INT,
	idEquipamiento SERIAL PRIMARY KEY,
	nombre VARCHAR(100) NOT NULL,
	estado VARCHAR(1) NOT NULL DEFAULT 'D',
	FContratacion DATE NOT NULL DEFAULT CURRENT_DATE
);

ALTER TABLE Equipamiento
	ADD CONSTRAINT chk_estado_equipo CHECK (estado IN ('D', 'P'));

-- Trigger para validar iddepartamento con dblink
CREATE OR REPLACE FUNCTION validar_departamento()
RETURNS trigger AS $$
DECLARE
    existe_en_departamentos BOOLEAN;
BEGIN
    -- Validar que idDepartamento exista en la base remota "Departamentos"
    SELECT EXISTS (
        SELECT 1 FROM dblink(
            'dbname=Departamentos user=postgres password=postgres',
            'SELECT idDepartamento FROM Departamento WHERE idDepartamento = ' || quote_literal(NEW.idDepartamento)
        ) AS t(idDepartamento INT)
    )
    INTO existe_en_departamentos;

    IF NOT existe_en_departamentos THEN
        RAISE EXCEPTION 'El idDepartamento % no existe en la base de datos "Departamentos"', NEW.idDepartamento;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validar_departamento
BEFORE INSERT OR UPDATE ON Equipamiento
FOR EACH ROW EXECUTE FUNCTION validar_departamento();

INSERT INTO Equipamiento (idDepartamento, nombre)
VALUES (1, 'Electrocardiógrafo');


CREATE TABLE Empleado (
	idUsuario INT,
	idDepartamento INT,
	idEmpleado SERIAL UNIQUE,
	FContratacion DATE NOT NULL DEFAULT CURRENT_DATE,
	estado VARCHAR(1) NOT NULL DEFAULT 'V'
);

ALTER TABLE Empleado
	ADD CONSTRAINT pk_Empleado PRIMARY KEY (idDepartamento, idEmpleado),
	ADD CONSTRAINT chk_estado_empleado CHECK (estado IN ('V', 'D', 'V'));
	
CREATE TRIGGER trg_validar_departamento
BEFORE INSERT OR UPDATE ON Empleado
FOR EACH ROW EXECUTE FUNCTION validar_departamento();

-- Trigger para validar idUsuario con dblink
CREATE OR REPLACE FUNCTION validar_usuario()
RETURNS trigger AS $$
DECLARE
    existe_en_usuarios BOOLEAN;
    ya_es_empleado BOOLEAN;
BEGIN
    -- 1. Validar que idUsuario exista en la tabla Usuario (base remota)
    SELECT EXISTS (
        SELECT 1 FROM dblink(
            'dbname=Usuarios user=postgres password=postgres',
            'SELECT idUsuario FROM Usuario WHERE idUsuario = ' || NEW.idUsuario
        ) AS t(idUsuario INT)
    ) INTO existe_en_usuarios;

    IF NOT existe_en_usuarios THEN
        RAISE EXCEPTION 'El idUsuario % no existe en la base de datos Usuarios', NEW.idUsuario;
    END IF;

    -- 2. Validar que no exista otro empleado con el mismo idUsuario (en esta misma base)
    SELECT EXISTS (
        SELECT 1 FROM Empleado
        WHERE idUsuario = NEW.idUsuario
        AND (TG_OP = 'INSERT' OR idEmpleado != NEW.idEmpleado)
    ) INTO ya_es_empleado;

    IF ya_es_empleado THEN
        RAISE EXCEPTION 'Ya existe un emplado registrado con el idUsuario %', NEW.idUsuario;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validar_usuario
BEFORE INSERT OR UPDATE ON Empleado
FOR EACH ROW EXECUTE FUNCTION validar_usuario();

INSERT INTO Empleado (idUsuario, idDepartamento)
VALUES (52223645,1);

INSERT INTO Empleado (idUsuario, idDepartamento)
VALUES (1010239734,1);

CREATE TABLE PAdministrativo (
	idEmpleado INT,
	idPAdministrativo SERIAL UNIQUE,
	sueldo INT NOT NULL
);

ALTER TABLE PAdministrativo
	ADD CONSTRAINT pk_PAdministrativo PRIMARY KEY (idEmpleado, idPAdministrativo),
	ADD CONSTRAINT fk_PAdministrativo FOREIGN KEY (idEmpleado) REFERENCES Empleado (idEmpleado);

CREATE OR REPLACE FUNCTION validar_administrativo_unico()
RETURNS trigger AS $$
DECLARE
    existe_medico BOOLEAN;
BEGIN
    SELECT EXISTS (
        SELECT 1 FROM Medico WHERE idEmpleado = NEW.idEmpleado
    ) INTO existe_medico;

    IF existe_medico THEN
        RAISE EXCEPTION 'El empleado % ya está registrado como Médico', NEW.idEmpleado;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validar_administrativo
BEFORE INSERT OR UPDATE ON PAdministrativo
FOR EACH ROW EXECUTE FUNCTION validar_administrativo_unico();

INSERT INTO PAdministrativo (idEmpleado, sueldo)
VALUES (1, 2000000);

CREATE TABLE Medico (
	idEmpleado INT,
	idMedico SERIAL UNIQUE,
	sueldo INT NOT NULL
);

ALTER TABLE Medico
	ADD CONSTRAINT pk_Medico PRIMARY KEY (idEmpleado, idMedico),
	ADD CONSTRAINT fk_Empleado FOREIGN KEY (idEmpleado) REFERENCES Empleado (idEmpleado);

CREATE OR REPLACE FUNCTION validar_medico_unico()
RETURNS trigger AS $$
DECLARE
    existe_admin BOOLEAN;
BEGIN
    SELECT EXISTS (
        SELECT 1 FROM PAdministrativo WHERE idEmpleado = NEW.idEmpleado
    ) INTO existe_admin;

    IF existe_admin THEN
        RAISE EXCEPTION 'El empleado % ya está registrado como Personal Administrativo', NEW.idEmpleado;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validar_medico
BEFORE INSERT OR UPDATE ON Medico
FOR EACH ROW EXECUTE FUNCTION validar_medico_unico();

INSERT INTO Medico (idEmpleado, sueldo)
VALUES (2, 5000000);

CREATE TABLE Cita (
	idPaciente INT,
	idMedico INT,
	idCita SERIAL UNIQUE,
	fechaYHora TIMESTAMP NOT NULL,
	estado VARCHAR(1) NOT NULL DEFAULT 'R',
	resumen VARCHAR(1500) NOT NULL
);

ALTER TABLE Cita 
	ADD CONSTRAINT pk_Cita PRIMARY KEY (idPaciente, idMedico, fechaYHora),
	ADD CONSTRAINT fk_idMedico FOREIGN KEY (idMedico) REFERENCES Medico (idMedico),
	ADD CONSTRAINT chk_estado_cita CHECK (estado IN ('R', 'A', 'P', 'C'));

-- Trigger para validar idPaciente con dblink
CREATE OR REPLACE FUNCTION validar_paciente()
RETURNS trigger AS $$
DECLARE
    existe_en_azure BOOLEAN;
BEGIN
    -- Validar existencia de idPaciente en la base remota Azure
    SELECT EXISTS (
        SELECT 1 FROM dblink(
            'host=localhost dbname=Azure user=postgres password=postgres',
            'SELECT idPaciente FROM paciente WHERE idPaciente = ' || NEW.idPaciente
        ) AS t(idPaciente INT)
    ) INTO existe_en_azure;

    IF NOT existe_en_azure THEN
        RAISE EXCEPTION 'El idPaciente % no existe en la base de datos Azure', NEW.idPaciente;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validar_paciente
BEFORE INSERT OR UPDATE ON Cita
FOR EACH ROW EXECUTE FUNCTION validar_paciente();

INSERT INTO Cita (idPaciente, idMedico, fechaYHora, resumen)
VALUES (5, 1, '2025-06-30 17:35:00', 'Tiene gripa');

------Tablas de rompimiento
CREATE TABLE Medico_Equipo (
	idMedico INT,
	idEquipamiento INT,
	FPrestamo DATE NOT NULL,
	FDevolucion DATE NOT NULL
);

ALTER TABLE Medico_Equipo
	ADD CONSTRAINT pk_Medico_Equipo PRIMARY KEY (idMedico, idEquipamiento),
	ADD CONSTRAINT fk_idMedico FOREIGN KEY (idMedico) REFERENCES Medico (idMedico),
	ADD CONSTRAINT fk_idEquipamiento FOREIGN KEY (idEquipamiento) REFERENCES Equipamiento (idEquipamiento),	
	ADD CONSTRAINT chk_fechas_prestamo CHECK (FDevolucion > FPrestamo);

CREATE TABLE PAdmin_Modifica_Paciente (
	idPAdministrativo INT,
	idPaciente INT,
	FModificacion DATE NOT NULL DEFAULT CURRENT_DATE,
	descripcion VARCHAR(100) NOT NULL
);

ALTER TABLE PAdmin_Modifica_Paciente
	ADD CONSTRAINT pk_PAdmin_Modifica_Paciente PRIMARY KEY (idPAdministrativo, idPaciente),
	ADD CONSTRAINT fk_idPAdministrativo FOREIGN KEY (idPAdministrativo) REFERENCES PAdministrativo (idPAdministrativo);

CREATE TRIGGER trg_validar_paciente2
BEFORE INSERT OR UPDATE ON PAdmin_Modifica_Paciente
FOR EACH ROW EXECUTE FUNCTION validar_paciente();

CREATE TABLE Actualizaciones_HistoriaClinica (
	idMedico INT,
	idCita INT,
	idHistoriaClinica INT,
	FActualizacion DATE NOT NULL DEFAULT CURRENT_DATE
);

ALTER TABLE Actualizaciones_HistoriaClinica
	ADD CONSTRAINT pk_Actualizaciones_HistoriaClinica PRIMARY KEY (idMedico, idCita, idHistoriaClinica),
	ADD CONSTRAINT fk_idMedico FOREIGN KEY (idMedico) REFERENCES Medico (idMedico),
	ADD CONSTRAINT FK_idCita FOREIGN KEY (idCita) REFERENCES Cita (idCita);

-- Trigger para validar idHistoriaClinica con dblink
CREATE OR REPLACE FUNCTION validar_historiaClinica()
RETURNS trigger AS $$
DECLARE
    existe_en_azure BOOLEAN;
BEGIN
    -- Validar que idHistoriaClinica exista en la base remota "Azure"
    SELECT EXISTS (
        SELECT 1 FROM dblink(
            'dbname=Azure user=postgres password=postgres',
            'SELECT idhistoriaclinica FROM HistoriaClinica WHERE idhistoriaclinica = ' || quote_literal(NEW.idHistoriaClinica)
        ) AS t(idHistoriaClinica INT)
    )
    INTO existe_en_azure;

    IF NOT existe_en_azure THEN
        RAISE EXCEPTION 'El idHistoriaClinica % no existe en la base de datos "Azure"', NEW.idHistoriaClinica;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validar_HistoriaClinica
BEFORE INSERT OR UPDATE ON Actualizaciones_HistoriaClinica
FOR EACH ROW EXECUTE FUNCTION validar_historiaClinica();

INSERT INTO Actualizaciones_HistoriaClinica (idMedico, idCita, idHistoriaClinica)
VALUES (1, 3, 7);

CREATE TABLE Medico_Preescribe_Medicamento (
	idMedico INT,
	idCita INT,
	idMedicamento INT,
	idPaciente INT,
	posologia VARCHAR(500) NOT NULL,
	particular VARCHAR(1) NOT NULL DEFAULT 'N'
);

ALTER TABLE Medico_Preescribe_Medicamento
	ADD CONSTRAINT pk_Medico_Preescribe_Medicamento PRIMARY KEY (idMedico, idCita, idMedicamento, idPaciente),
	ADD CONSTRAINT fk_idMedico FOREIGN KEY (idMedico) REFERENCES Medico (idMedico),
	ADD CONSTRAINT fk_idCita FOREIGN KEY (idCita) REFERENCES Cita (idCita),
	ADD CONSTRAINT chk_particular CHECK (particular IN ('S', 'N'));

-- Trigger para validar idMedicamento con dblink
CREATE OR REPLACE FUNCTION validar_medicamento()
RETURNS trigger AS $$
DECLARE
    existe_en_aws BOOLEAN;
BEGIN
    -- Validar que idMedicamento exista en la base remota "AWS"
    SELECT EXISTS (
        SELECT 1 FROM dblink(
            'dbname=AWS user=postgres password=postgres',
            'SELECT idMedicamento FROM Medicamento WHERE idMedicamento = ' || quote_literal(NEW.idMedicamento)
        ) AS t(idMedicamento INT)
    )
    INTO existe_en_aws;

    IF NOT existe_en_aws THEN
        RAISE EXCEPTION 'El idMedicamento % no existe en la base de datos "AWS"', NEW.idMedicamento;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validar_Medicamento
BEFORE INSERT OR UPDATE ON Medico_Preescribe_Medicamento
FOR EACH ROW EXECUTE FUNCTION validar_medicamento();

CREATE TRIGGER trg_validar_paciente3
BEFORE INSERT OR UPDATE ON Medico_Preescribe_Medicamento
FOR EACH ROW EXECUTE FUNCTION validar_paciente();

INSERT INTO Medico_Preescribe_Medicamento
VALUES (1, 3, 1, 5, 'Tableta de 500mg cada 8 horas');

CREATE TABLE Registro_Consulta_Medicamento (
	idMedico INT,
	idMedicamento INT,
	FConsulta DATE NOT NULL DEFAULT CURRENT_DATE
);

ALTER TABLE Registro_Consulta_Medicamento
	ADD CONSTRAINT pk_Registro_Consulta_Medicamento PRIMARY KEY (idMedico, idMedicamento),
	ADD CONSTRAINT fk_idMedico FOREIGN KEY (idMedico) REFERENCES Medico (idMedico);

CREATE TRIGGER trg_validar_Medicamento2
BEFORE INSERT OR UPDATE ON Registro_Consulta_Medicamento
FOR EACH ROW EXECUTE FUNCTION validar_medicamento();

INSERT INTO Registro_Consulta_Medicamento (idMedico, idMedicamento)
VALUES (1,2);

CREATE TABLE PAdmin_Gestiona_Cita (
	idPAdministrativo INT,
	idCita INT,
	accion VARCHAR(1) NOT NULL DEFAULT 'A',
	FAccion DATE NOT NULL DEFAULT CURRENT_DATE
);

ALTER TABLE PAdmin_Gestiona_Cita
	ADD CONSTRAINT pk_PAdmin_Gestiona_Cita PRIMARY KEY (idPAdministrativo, idCita),
	ADD CONSTRAINT fk_idPAdministrativo FOREIGN KEY (idPAdministrativo) REFERENCES PAdministrativo (idPAdministrativo),
	ADD CONSTRAINT fk_idCita FOREIGN KEY (idCita) REFERENCES Cita (idCita),
	ADD CONSTRAINT chk_accion CHECK (accion IN ('A', 'C'));

CREATE TABLE Diagnostico (
	idDiagnostico SERIAL PRIMARY KEY,
	nombre VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE Medico_dictamina_diagnostico (
	idDiagnostico INT,
	idMedico INT,
	idCita INT
);

ALTER TABLE Medico_dictamina_diagnostico
	ADD CONSTRAINT pk_Medico_dictamina_diagnostico PRIMARY KEY (idDiagnostico, idMedico, idCita),
	ADD CONSTRAINT fk_idDiagnostico FOREIGN KEY (idDiagnostico) REFERENCES Diagnostico (idDiagnostico),
	ADD CONSTRAINT fk_idMedico FOREIGN KEY (idMedico) REFERENCES Medico (idMedico),
	ADD CONSTRAINT fk_idCita FOREIGN KEY (idCita) REFERENCES Cita (idCita);

    --ejemplo insercio diagnostico y medico_dictamina_diagnostico
--     INSERT INTO Diagnostico (nombre) VALUES
-- ('Infarto agudo de miocardio'),
-- ('Insuficiencia cardíaca congestiva'),
-- ('Arritmia cardíaca'),
-- ('Cardiopatía isquémica'),
-- ('Miocardiopatía dilatada'),
-- ('Valvulopatía mitral'),
-- ('Hipertensión arterial sistémica'),
-- ('Pericarditis aguda'),
-- ('Endocarditis infecciosa'),
-- ('Cardiopatía congénita');

-- INSERT INTO Medico_dictamina_diagnostico (idDiagnostico, idMedico, idCita) VALUES
-- (1, 3, 13),
-- (2, 4, 15),
-- (3, 3, 13),
-- (4, 6, 14),
-- (5, 4, 15),
-- (6, 6, 17),
-- (7, 6, 17),
-- (8, 4, 18),
-- (9, 3, 19),
-- (10, 3, 20);