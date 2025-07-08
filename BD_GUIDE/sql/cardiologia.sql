CREATE EXTENSION IF NOT EXISTS dblink;

-- Equipamiento: estado debe ser 'D' o 'P'
ALTER TABLE "Equipamiento"
  ADD CONSTRAINT chk_estado_equipo CHECK (estado IN ('D', 'P'));

-- Empleado: estado debe ser 'V' o 'D'
ALTER TABLE "Empleado"
  ADD CONSTRAINT chk_estado_empleado CHECK (estado IN ('V', 'D'));

-- Cita: estado debe ser 'R', 'A', 'P' o 'C'
ALTER TABLE "Cita"
  ADD CONSTRAINT chk_estado_cita CHECK (estado IN ('R', 'A', 'P', 'C'));

-- Medico_Preescribe_Medicamento: particular debe ser 'S' o 'N'
ALTER TABLE "Medico_Preescribe_Medicamento"
  ADD CONSTRAINT chk_particular CHECK (particular IN ('S', 'N'));

-- PAdmin_Gestiona_Cita: accion debe ser 'A' o 'C'
ALTER TABLE "PAdmin_Gestiona_Cita"
  ADD CONSTRAINT chk_accion CHECK (accion IN ('A', 'C'));

  CREATE OR REPLACE FUNCTION validar_departamento()
RETURNS trigger AS $$
DECLARE
    existe_en_departamentos BOOLEAN;
BEGIN
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

CREATE TRIGGER trg_validar_departamento_equipamiento
BEFORE INSERT OR UPDATE ON "Equipamiento"
FOR EACH ROW EXECUTE FUNCTION validar_departamento();

CREATE TRIGGER trg_validar_departamento_empleado
BEFORE INSERT OR UPDATE ON "Empleado"
FOR EACH ROW EXECUTE FUNCTION validar_departamento();

CREATE OR REPLACE FUNCTION validar_usuario()
RETURNS trigger AS $$
DECLARE
    existe_en_usuarios BOOLEAN;
    ya_es_empleado BOOLEAN;
BEGIN
    -- Validar que idUsuario exista en la base remota \"Usuarios\"
    SELECT EXISTS (
        SELECT 1 FROM dblink(
            'dbname=Usuarios user=postgres password=postgres',
            'SELECT idUsuario FROM Usuario WHERE idUsuario = ' || NEW.idUsuario
        ) AS t(idUsuario INT)
    ) INTO existe_en_usuarios;

    IF NOT existe_en_usuarios THEN
        RAISE EXCEPTION 'El idUsuario % no existe en la base de datos Usuarios', NEW.idUsuario;
    END IF;

    -- Validar que no exista otro empleado con el mismo idUsuario
    SELECT EXISTS (
        SELECT 1 FROM "Empleado"
        WHERE idUsuario = NEW.idUsuario
        AND (TG_OP = 'INSERT' OR idEmpleado != NEW.idEmpleado)
    ) INTO ya_es_empleado;

    IF ya_es_empleado THEN
        RAISE EXCEPTION 'Ya existe un empleado registrado con el idUsuario %', NEW.idUsuario;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validar_usuario
BEFORE INSERT OR UPDATE ON "Empleado"
FOR EACH ROW EXECUTE FUNCTION validar_usuario();

-- Para PAdministrativo
CREATE OR REPLACE FUNCTION validar_administrativo_unico()
RETURNS trigger AS $$
DECLARE
    existe_medico BOOLEAN;
BEGIN
    SELECT EXISTS (
        SELECT 1 FROM "Medico" WHERE idEmpleado = NEW.idEmpleado
    ) INTO existe_medico;

    IF existe_medico THEN
        RAISE EXCEPTION 'El empleado % ya está registrado como Médico', NEW.idEmpleado;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validar_administrativo
BEFORE INSERT OR UPDATE ON "PAdministrativo"
FOR EACH ROW EXECUTE FUNCTION validar_administrativo_unico();

-- Para Medico
CREATE OR REPLACE FUNCTION validar_medico_unico()
RETURNS trigger AS $$
DECLARE
    existe_admin BOOLEAN;
BEGIN
    SELECT EXISTS (
        SELECT 1 FROM "PAdministrativo" WHERE idEmpleado = NEW.idEmpleado
    ) INTO existe_admin;

    IF existe_admin THEN
        RAISE EXCEPTION 'El empleado % ya está registrado como Personal Administrativo', NEW.idEmpleado;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_validar_medico
BEFORE INSERT OR UPDATE ON "Medico"
FOR EACH ROW EXECUTE FUNCTION validar_medico_unico();