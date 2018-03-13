CREATE TABLE images (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `path` VARCHAR(255) NOT NULL,

  CONSTRAINT PK_images PRIMARY KEY (`id`)
);

CREATE TABLE pieces_types (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `libelle` VARCHAR(255),

  CONSTRAINT PK_pieces_types PRIMARY KEY (`id`)
);

CREATE TABLE works (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `libelle` VARCHAR(255) NOT NULL,
  `date` DATE NOT NULL,

  CONSTRAINT PK_works PRIMARY KEY (`id`)
);


CREATE TABLE devis (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(50) NOT NULL,
  `prenom` VARCHAR(50) NOT NULL,

  CONSTRAINT PK_devis PRIMARY KEY(`id`)
);

CREATE TABLE pieces (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `libelle` VARCHAR(255),
  `location` ENUM('Interieur', 'Exterieur') NOT NULL,
  `pieces_type_id` INT(11) NOT NULL,
  `images_id` INT(11) NOT NULL,

  CONSTRAINT PK_pieces PRIMARY KEY(`id`),
  CONSTRAINT FK_pieces_types FOREIGN KEY (`pieces_type_id`) REFERENCES pieces_types(`id`),
  CONSTRAINT FK_pieces_images FOREIGN KEY (`images_id`) REFERENCES images(`id`)
);

CREATE TABLE works_days (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `works_id` INT(11) NOT NULL,
  `images_id` INT(11) NOT NULL,

  CONSTRAINT PK_works_days PRIMARY KEY (`id`),
  CONSTRAINT FK_works_days FOREIGN KEY (`works_id`) REFERENCES works(`id`),
  CONSTRAINT FK_works_days_images FOREIGN KEY (`images_id`) REFERENCES images(`id`)
);


CREATE TABLE devis_pieces (
  `devis_id` INT(11) NOT NULL,
  `pieces_id` INT(11) NOT NULL,

  CONSTRAINT PK_devis_pieces PRIMARY KEY (`devis_id`, `pieces_id`),
  CONSTRAINT FK_devis FOREIGN KEY (`devis_id`) REFERENCES devis(`id`),
  CONSTRAINT FK_pieces FOREIGN KEY (`pieces_id`) REFERENCES pieces(`id`)
);