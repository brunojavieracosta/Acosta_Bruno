CREATE TABLE ALUMNO
(
  cod_matricula INT NOT NULL,
  nombre INT NOT NULL,
  dni INT NOT NULL,
  fecha_nac INT NOT NULL,
  email INT NOT NULL,
  PRIMARY KEY (cod_matricula)
);

CREATE TABLE CURSO
(
  cod_curso INT NOT NULL,
  nombre INT NOT NULL,
  PRIMARY KEY (cod_curso)
);

CREATE TABLE PROFESOR
(
  profesor_id INT NOT NULL,
  nombre INT NOT NULL,
  especialidad INT NOT NULL,
  email INT NOT NULL,
  PRIMARY KEY (profesor_id)
);

CREATE TABLE inscripcion
(
  cod_curso INT NOT NULL,
  cod_matricula INT NOT NULL,
  PRIMARY KEY (cod_curso, cod_matricula),
  FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso),
  FOREIGN KEY (cod_matricula) REFERENCES ALUMNO(cod_matricula)
);

CREATE TABLE realizado
(
  cod_curso INT NOT NULL,
  profesor_id INT NOT NULL,
  PRIMARY KEY (cod_curso, profesor_id),
  FOREIGN KEY (cod_curso) REFERENCES CURSO(cod_curso),
  FOREIGN KEY (profesor_id) REFERENCES PROFESOR(profesor_id)
);