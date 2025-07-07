-- Asegurar que dblink esté habilitado
CREATE EXTENSION IF NOT EXISTS dblink;

CREATE TABLE Farmacia (
	idFarmacia INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	nombre VARCHAR(100) UNIQUE NOT NULL,
	direccion VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE Medicamento (
	idMedicamento INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	nombre VARCHAR(100) UNIQUE NOT NULL,
	descripción VARCHAR(100) NOT NULL
);

CREATE TABLE FarmaciaPosee (
	idFarmacia INT,
	idMedicamento INT,
	cantidad INT NOT NULL DEFAULT 0
);

ALTER TABLE FarmaciaPosee
	ADD CONSTRAINT pk_FarmaciaPosee PRIMARY KEY (idFarmacia, idMedicamento),
	ADD CONSTRAINT FK_idFarmacia FOREIGN KEY (idFarmacia) REFERENCES Farmacia (idFarmacia),
	ADD CONSTRAINT FK_idMedicamento FOREIGN KEY (idMedicamento) REFERENCES Medicamento (idMedicamento);

CREATE TABLE FarmaciaEntrega (
	idPaciente INT,
	idFarmacia INT,
	idMedicamento INT,
	FEntrega DATE NOT NULL DEFAULT CURRENT_DATE,
	Cantidad INT NOT NULL
);

ALTER TABLE FarmaciaEntrega
	ADD CONSTRAINT pk_Entrega PRIMARY KEY (idPaciente, idFarmacia, idMedicamento, FEntrega),
	ADD CONSTRAINT fk_idFarmacia FOREIGN KEY (idFarmacia) REFERENCES Farmacia (idFarmacia),
	ADD CONSTRAINT fk_idMedicamento FOREIGN KEY (idMedicamento) REFERENCES Medicamento (idMedicamento);

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
BEFORE INSERT OR UPDATE ON FarmaciaEntrega
FOR EACH ROW EXECUTE FUNCTION validar_paciente();

CREATE OR REPLACE FUNCTION verificar_y_actualizar_stock()
RETURNS trigger AS $$
DECLARE
    stock_actual INT;
    nombre_medicamento TEXT;
    nombre_farmacia TEXT;
BEGIN
    -- Obtener stock actual
    SELECT cantidad
    INTO stock_actual
    FROM FarmaciaPosee
    WHERE idFarmacia = NEW.idFarmacia AND idMedicamento = NEW.idMedicamento;

    -- Si no existe la relación en FarmaciaPosee
    IF stock_actual IS NULL THEN
        SELECT f.nombre, m.nombre
        INTO nombre_farmacia, nombre_medicamento
        FROM Farmacia f, Medicamento m
        WHERE f.idFarmacia = NEW.idFarmacia AND m.idMedicamento = NEW.idMedicamento;

        RAISE EXCEPTION 'La farmacia "%" no tiene registrado el medicamento "%"', nombre_farmacia, nombre_medicamento;
    END IF;

    -- Obtener nombres de farmacia y medicamento para mensaje
    SELECT f.nombre, m.nombre
    INTO nombre_farmacia, nombre_medicamento
    FROM Farmacia f, Medicamento m
    WHERE f.idFarmacia = NEW.idFarmacia AND m.idMedicamento = NEW.idMedicamento;

    -- Validar stock
    IF stock_actual < NEW.Cantidad THEN
        RAISE EXCEPTION 'Stock insuficiente: la farmacia "%" solo tiene % unidades del medicamento "%"', 
            nombre_farmacia, stock_actual, nombre_medicamento;
    END IF;

    -- Actualizar stock
    UPDATE FarmaciaPosee
    SET cantidad = cantidad - NEW.Cantidad
    WHERE idFarmacia = NEW.idFarmacia AND idMedicamento = NEW.idMedicamento;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER trg_actualizar_stock
BEFORE INSERT ON FarmaciaEntrega
FOR EACH ROW
EXECUTE FUNCTION verificar_y_actualizar_stock();




INSERT INTO Farmacia (nombre, direccion)
VALUES ('Farmacia Central', 'Calle 123');

INSERT INTO Medicamento (nombre, descripción)
VALUES 
('Paracetamol', 'Alivia el dolor y reduce la fiebre'),
('Ibuprofeno', 'Antiinflamatorio no esteroideo');

SELECT * FROM Farmacia;
SELECT * FROM Medicamento;
SELECT * FROM FarmaciaPosee;
SELECT * FROM FarmaciaPosee WHERE idFarmacia = 1 AND idMedicamento = 1;

INSERT INTO FarmaciaPosee (idFarmacia, idMedicamento, cantidad)
VALUES
(1, 1, 50),
(1, 2, 100);

INSERT INTO FarmaciaEntrega (idPaciente, idFarmacia, idMedicamento, Cantidad)
VALUES (5, 1, 1, 5);  -- Esto restará 5 unidades del stock
