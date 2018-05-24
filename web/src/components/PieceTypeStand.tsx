import * as React from 'react';
import axios from 'axios';

import PieceInterface from '../interfaces/PieceInterface';

import ReactImageGallery from 'react-image-gallery';

interface PieceTypeStandProps {
  location: string;
}

interface PieceTypeStandState {
  pieces: PieceInterface[];
}

class PieceTypeStand extends React.Component<PieceTypeStandProps, PieceTypeStandState> {

  constructor(props: PieceTypeStandProps) {
    super(props);

    this.state = {
      pieces: [],
    };
  }

  componentWillMount() {
    axios({
      method: 'GET',
      url: 'http://www.api.rbe-ouest.com/pieces?location=',
      params: {
        location: this.props.location
      }
    }).then((res) => {
      this.setState({
        pieces: res.data.pieces
      });
    }).catch((err) => {
      console.error(err);
    });
  }

  render() {
    const basePath = 'http://www.images.rbe-ouest.com/';

    let pieces = this.state.pieces.sort((a: PieceInterface, b: PieceInterface) => {
      if (a.ordre < b.ordre) {
        return -1;
      } else {
        return 1;
      }
    });

    const images = pieces.map((elt: PieceInterface) => {
      const path = basePath + elt.path;
      return {original: path, thumbnail: path, sizes: '(width: 128px)'};
    });

    return (
      <>
       <ReactImageGallery items={images} showPlayButton={false} />
      </>
    );
  }
}

export default PieceTypeStand;
