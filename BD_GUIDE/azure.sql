
-- Asegurar que dblink esté habilitado
CREATE EXTENSION IF NOT EXISTS dblink;

-- Tabla de Pacientes (sin FK a Usuario real, se valida con dblink + trigger)
CREATE TABLE Paciente (
	idUsuario INT,
	idPAdministrativo INT,
	baseDepartamento TEXT NOT NULL,
	idPaciente INT GENERATED ALWAYS AS IDENTITY,
	idHistoriaClinica INT,  -- Se asignará desde trigger
	FAfiliacion DATE NOT NULL DEFAULT CURRENT_DATE,
	Estado VARCHAR(1) NOT NULL DEFAULT 'A'
);

-- Trigger para validar idUsuario con dblink
CREATE OR REPLACE FUNCTION validar_usuario()
RETURNS trigger AS $$
DECLARE
    existe_en_usuarios BOOLEAN;
    ya_es_paciente BOOLEAN;
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

    -- 2. Validar que no exista otro paciente con el mismo idUsuario (en esta misma base)
    SELECT EXISTS (
        SELECT 1 FROM Paciente
        WHERE idUsuario = NEW.idUsuario
        AND (TG_OP = 'INSERT' OR idPaciente != NEW.idPaciente)
    ) INTO ya_es_paciente;

    IF ya_es_paciente THEN
        RAISE EXCEPTION 'Ya existe un paciente registrado con el idUsuario %', NEW.idUsuario;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trg_validar_usuario
BEFORE INSERT OR UPDATE ON Paciente
FOR EACH ROW EXECUTE FUNCTION validar_usuario();

-- Tabla HistoriaClinica con id autoincremental
CREATE TABLE HistoriaClinica (
	idHistoriaClinica INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	idPaciente INT NOT NULL,
	FInicio DATE NOT NULL DEFAULT CURRENT_DATE
);

-- Trigger para crear historia clínica automáticamente
CREATE OR REPLACE FUNCTION crear_historia_clinica()
RETURNS trigger AS $$
DECLARE
    nueva_id INT;
BEGIN
    -- Insertar la historia clínica y recuperar el ID generado
    INSERT INTO HistoriaClinica (idPaciente)
    VALUES (NEW.idPaciente)
    RETURNING idHistoriaClinica INTO nueva_id;

    -- Asignar el ID generado al campo correspondiente del paciente
    NEW.idHistoriaClinica := nueva_id;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_crear_historia_clinica
BEFORE INSERT ON Paciente
FOR EACH ROW EXECUTE FUNCTION crear_historia_clinica();

CREATE OR REPLACE FUNCTION validar_PAdministrativo()
RETURNS trigger AS $$
DECLARE
    existe_en_su_departamento BOOLEAN;
    consulta TEXT;
    conexion TEXT;
BEGIN
    -- Consulta que se ejecutará
    consulta := format(
        'SELECT idPAdministrativo FROM PAdministrativo WHERE idPAdministrativo = %s',
        quote_literal(NEW.idPAdministrativo)
    );

    -- Conexión segura sin comillas innecesarias
    conexion := 'dbname=' || NEW.baseDepartamento || ' user=postgres password=postgres';

    -- Ejecutar dblink
    SELECT EXISTS (
        SELECT 1 FROM dblink(conexion, consulta)
        AS t(idPAdministrativo INT)
    )
    INTO existe_en_su_departamento;

    IF NOT existe_en_su_departamento THEN
        RAISE EXCEPTION 'El idPAdministrativo % no existe en la base de datos %', NEW.idPAdministrativo, NEW.baseDepartamento;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validar_PAdministrativo
BEFORE INSERT OR UPDATE ON Paciente
FOR EACH ROW EXECUTE FUNCTION validar_PAdministrativo();

-- Restricciones finales sobre la tabla Paciente
ALTER TABLE Paciente
	ADD CONSTRAINT pk_Paciente PRIMARY KEY (idUsuario, idPaciente),
	ADD CONSTRAINT fk_HistoriaClinica FOREIGN KEY (idHistoriaClinica) REFERENCES HistoriaClinica (idHistoriaClinica),
	ADD CONSTRAINT chk_estado_paciente CHECK (Estado IN ('A', 'I'));


INSERT INTO Paciente (idUsuario, idPAdministrativo, baseDepartamento)
VALUES (52223645, 2, 'Cardiologia');

