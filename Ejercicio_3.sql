CREATE TABLE CLIENTE
(
  dni INT NOT NULL,
  nombre INT NOT NULL,
  direccion INT NOT NULL,
  telefono INT NOT NULL,
  codigo_unico INT NOT NULL,
  PRIMARY KEY (codigo_unico)
);

CREATE TABLE RESERVA
(
  fecha_inicio INT NOT NULL,
  final_reserva INT NOT NULL,
  numero_id INT NOT NULL,
  precio_total INT NOT NULL,
  cantidad_vehiculos INT NOT NULL,
  codigo_unico INT NOT NULL,
  PRIMARY KEY (numero_id),
  FOREIGN KEY (codigo_unico) REFERENCES CLIENTE(codigo_unico)
);

CREATE TABLE VEHICULO
(
  matricula INT NOT NULL,
  modelo INT NOT NULL,
  color INT NOT NULL,
  marca INT NOT NULL,
  precio_hora INT NOT NULL,
  PRIMARY KEY (matricula)
);

CREATE TABLE de
(
  litros_gasolina INT NOT NULL,
  numero_id INT NOT NULL,
  matricula INT NOT NULL,
  PRIMARY KEY (numero_id, matricula),
  FOREIGN KEY (numero_id) REFERENCES RESERVA(numero_id),
  FOREIGN KEY (matricula) REFERENCES VEHICULO(matricula)
);