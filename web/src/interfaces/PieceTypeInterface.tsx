import ImageInterface from './ImageInterface';

export default interface PieceTypeInterface {
  id: number;
  libelle: string;
  location: string;
  image_id: number;
  image: ImageInterface;
}