import * as React from 'react';

import { Row, Col } from 'react-flexbox-grid';
import PieceInterface from '../interfaces/PieceInterface';

interface PieceImageListProps {
  pieces: PieceInterface[];
  onPieceClicked(piece: PieceInterface): void;
}

interface PieceImageListState {}

class PieceImageList extends React.Component<PieceImageListProps, PieceImageListState> {

  constructor(props: PieceImageListProps) {
    super(props);
  }

  render() {
    const images = this.props.pieces.map((elt: PieceInterface) => {
      const path = 'http://images.rbe.com/' + elt.image.path;
      const alt = elt.libelle;

      return (
        <Col key={elt.id} xs={3}>
          <img width="64px" onClick={() => this.props.onPieceClicked(elt)} src={path} alt={alt}/>
        </Col>
      );
    });

    return (
      <Row>
        {images}
      </Row>
    );
  }
}

export default PieceImageList;
