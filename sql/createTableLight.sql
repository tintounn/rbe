CREATE TABLE pieces (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `libelle` VARCHAR(255),
  `ordre` INT(5), 
  `location` ENUM('Interieur', 'Exterieur', 'Plan') NOT NULL,
  `path` VARCHAR(255) NOT NULL,
  `updated_at` DATETIME NULL,
  `created_at` DATETIME NULL,

  CONSTRAINT PK_pieces PRIMARY KEY(`id`)
);
