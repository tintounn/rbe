INSERT INTO rbe.images(`id`, `path`) VALUES(1, 'exterieur_window.png');
INSERT INTO rbe.images(`id`, `path`) VALUES(2, 'zelda.png');

INSERT INTO rbe.pieces_types(location, libelle, image_id) VALUES('exterieur', 'Fenetre', 1);
INSERT INTO rbe.pieces_types(location, libelle, image_id) VALUES('exterieur', 'Escalier', 1);
INSERT INTO rbe.pieces_types(location, libelle), image_id VALUES('exterieur', 'Terrasse', 1);

INSERT INTO rbe.pieces_types(location, libelle, image_id) VALUES('interieur', 'Porte', 1);
INSERT INTO rbe.pieces_types(location, libelle, image_id) VALUES('interieur', 'Verriere', 1);
INSERT INTO rbe.pieces_types(location, libelle, image_id) VALUES('interieur', 'Escalier', 1);

INSERT INTO rbe.pieces(libelle, pieces_type_id, images_id)VALUES('Bois de chaine', 1, 2);
INSERT INTO rbe.pieces(libelle, pieces_type_id, images_id)VALUES('Bois de Sapin', 1, 2);
INSERT INTO rbe.pieces(libelle, pieces_type_id, images_id)VALUES('Tomaké', 3, 2);

INSERT INTO rbe.pieces(libelle, pieces_type_id, images_id)VALUES('Porte en chaine massif', 4, 2);
INSERT INTO rbe.pieces(libelle, pieces_type_id, images_id)VALUES('Colimasson', 6, 2);






INSERT INTO rbe.pieces(libelle, location, path, `ordre`)VALUES('Bois de chaine', 'Exterieur', 'exterieur_window.png', 1);
INSERT INTO rbe.pieces(libelle, location, path, `ordre`)VALUES('Bois de chaine', 'Exterieur', 'exterieur_window.png', 2);

INSERT INTO rbe.pieces(libelle, location, path, `ordre`)VALUES('Bois de chaine', 'Interieur', 'exterieur_window.png', 1);
INSERT INTO rbe.pieces(libelle, location, path, `ordre`)VALUES('Bois de chaine', 'Interieur', 'exterieur_window.png', 2);
INSERT INTO rbe.pieces(libelle, location, path, `ordre`)VALUES('Bois de chaine', 'Interieur', 'exterieur_window.png', 3);

INSERT INTO rbe.pieces(libelle, location, path, `ordre`)VALUES('Bois de chaine', 'Plan', 'exterieur_window.png', 1);


