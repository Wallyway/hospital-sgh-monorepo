CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
	genero VARCHAR(1) NOT NULL,
	direccion VARCHAR(100) NOT NULL,
    fechaNacimiento DATE NOT NULL
);

ALTER TABLE Usuario
	ADD CONSTRAINT chk_generoUsuario CHECK (genero IN ('M', 'F'));
	
CREATE TABLE TelUsuario (
	idUsuario INT,
	telefono NUMERIC (10)
);

ALTER TABLE TelUsuario
	ADD CONSTRAINT pk_telUsuario PRIMARY KEY (idUsuario, telefono),
	ADD CONSTRAINT fk_idUsuario FOREIGN KEY (idUsuario) references Usuario (idUsuario);
	

INSERT INTO Usuario 
VALUES (52223645, 'Migue', 'pepe@gmail.com', 'M', 'direccion','1996-07-20');
