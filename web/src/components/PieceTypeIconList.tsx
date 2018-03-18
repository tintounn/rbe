import * as React from 'react';
import PieceTypeInterface from '../interfaces/PieceTypeInterface';

import { Row, Col } from 'react-flexbox-grid';

interface PieceTypeIconListProps {
  pieceTypes: PieceTypeInterface[];
  onPieceTypeClicked(pieceType: PieceTypeInterface): void;
}

interface PieceTypeIconListState {}

class PieceTypeIconList extends React.Component<PieceTypeIconListProps, PieceTypeIconListState> {

  constructor(props: PieceTypeIconListProps) {
    super(props);
  }

  render() {
    const icons = this.props.pieceTypes.map((elt: PieceTypeInterface) => {
      const path = 'http://images.rbe.com/' + elt.image.path;
      const alt = elt.libelle + '-' + elt.location;

      return (
        <Col key={elt.id} xs={3}>
          <img width="64px" onClick={() => this.props.onPieceTypeClicked(elt)} src={path} alt={alt}/>
        </Col>
      );
    });

    return (
      <Row>
        {icons}
      </Row>
    );
  }
}

export default PieceTypeIconList;
