import * as React from 'react';
import axios from 'axios';

import PieceTypeInterface from '../interfaces/PieceTypeInterface';
import PieceTypeIconList from './PieceTypeIconList';
import PieceImageList from './PieceImageList';
import PieceInterface from '../interfaces/PieceInterface';
import ImageInterface from '../interfaces/ImageInterface';

interface PieceTypeStandProps {
  location: string;
}

interface PieceTypeStandState {
  pieceTypes: PieceTypeInterface[];
  pieces: PieceInterface[];
  image?: ImageInterface | null;
}

class PieceTypeStand extends React.Component<PieceTypeStandProps, PieceTypeStandState> {

  constructor(props: PieceTypeStandProps) {
    super(props);

    this.handleOnPieceTypeClicked = this.handleOnPieceTypeClicked.bind(this);

    this.state = {
      pieceTypes: [],
      pieces: [],
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
      if (res.data.pieceTypes.length > 0) {
        this.handleOnPieceTypeClicked(res.data.pieceTypes[0]);
      }

      this.setState({
        pieceTypes: res.data.pieceTypes
      });
    }).catch((err) => {
      console.error(err);
    });
  }

  handleOnPieceTypeClicked(pieceType: PieceTypeInterface) {
    axios({
      method: 'GET',
      url: 'http://api.rbe.com/piece-types/' + pieceType.id + '/pieces',
      params: {
        limit: 5
      }
    }).then((res) => {
      if (res.data.pieces.length > 0) {
        this.handleOnPieceClicked(res.data.pieces[0]);
      } else {
        this.setState({image: null});
      }

      this.setState({
        pieces: res.data.pieces
      });
    }).catch((err) => {
      console.error(err);
    });
  }

  handleOnPieceClicked(piece: PieceInterface) {
    this.setState({
      image: piece.image
    });
  }

  render() {
    let path = 'http://images.rbe.com/notfound.png';
    if (this.state.image) {
      path = 'http://images.rbe.com/' + this.state.image.path;
    }

    let image = <img width="196px" src={path}/>;

    return (
      <>
        <h4>{this.props.location}</h4>
        {image}

        <PieceTypeIconList onPieceTypeClicked={this.handleOnPieceTypeClicked} pieceTypes={this.state.pieceTypes}/>
        <PieceImageList onPieceClicked={this.handleOnPieceClicked} pieces={this.state.pieces}/>
      </>
    );
  }
}

export default PieceTypeStand;
