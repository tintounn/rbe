import * as React from 'react';
import axios from 'axios';

import PieceTypeInterface from '../interfaces/PieceTypeInterface';
import PieceTypeIconList from './PieceTypeIconList';

interface PieceTypeStandProps {
  location: string;
}

interface PieceTypeStandState {
  pieceTypes: PieceTypeInterface[];
}

class PieceTypeStand extends React.Component<PieceTypeStandProps, PieceTypeStandState> {

  constructor(props: PieceTypeStandProps) {
    super(props);

    this.handleOnPieceTypeClicked = this.handleOnPieceTypeClicked.bind(this);

    this.state = {
      pieceTypes: []
    };
  }

  componentWillMount() {
    axios({
      method: 'GET',
      url: 'http://api.rbe.com/piece-types',
      params: {
        location: this.props.location
      }
    }).then((res) => {
      this.setState({
        pieceTypes: res.data.pieceTypes
      });
    }).catch((err) => {
      console.error(err);
    });
  }

  handleOnPieceTypeClicked(pieceType: PieceTypeInterface) {
    console.log(pieceType);
  }

  render() {
    return (
      <>
        <h4>{this.props.location}</h4>
        <PieceTypeIconList onPieceTypeClicked={this.handleOnPieceTypeClicked} pieceTypes={this.state.pieceTypes}/>
      </>
    );
  }
}

export default PieceTypeStand;
