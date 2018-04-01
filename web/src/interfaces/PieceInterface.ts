import ImageInterface from './ImageInterface';

export default interface PieceInterface {
  id: number;
  libelle: string;
  image_id: number;
  image: ImageInterface;
  largeur: number;
  hauteur: number;
  epaisseur: number;
}