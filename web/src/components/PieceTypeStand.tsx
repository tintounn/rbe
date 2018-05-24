import * as React from 'react';
import axios from 'axios';
import { Modal, ModalBody } from 'reactstrap';
import PieceInterface from '../interfaces/PieceInterface';
import ReactImageGallery from 'react-image-gallery';
import { Row, Col } from 'react-flexbox-grid';

interface PieceTypeStandProps {
  location: string;
}

interface PieceTypeStandState {
  pieces: PieceInterface[];
  open: boolean;
  src?: string;
}

class PieceTypeStand extends React.Component<PieceTypeStandProps, PieceTypeStandState> {

  constructor(props: PieceTypeStandProps) {
    super(props);

    this.onCloseModal = this.onCloseModal.bind(this);
    this.onImageClick = this.onImageClick.bind(this);

    this.state = {
      pieces: [],
      open: false
    };
  }

  componentWillMount() {
    axios({
      method: 'GET',
      url: 'http://api.rbe-ouest.com/pieces?location=',
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

  onCloseModal() {
    this.setState({
      open: !this.state.open
    });
  }

  onImageClick(event: any, index: number) {
    this.setState({
      open: true,
      src: 'http://images.rbe-ouest.com/' + this.state.pieces[index].path
    });
    console.log(this.state.pieces[index].path);
  }

  render() {
    const basePath = 'http://images.rbe-ouest.com/';

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

    const renderLights = () => {
      if (this.props.location === 'interieur') {
        return (
          <img style={{marginTop: '5px', marginBottom: '5px'}} src="http://images.rbe-ouest.com/base/light-interieur.png"/>
        );
      } else if (this.props.location === 'exterieur') {
        return (
          <img style={{marginTop: '5px', marginBottom: '5px'}} src="http://images.rbe-ouest.com/base/light-exterieur.png"/>
        );
      } else {
        return (
          <img style={{marginTop: '5px', marginBottom: '5px'}} src="http://images.rbe-ouest.com/base/sur-mesure.png"/>
        );
      }
    };

    const renderIcons = () => {
      if (this.props.location === 'interieur') {
        return (
          <Row>
            <Col xs={3}><img style={{marginTop: '5px', marginBottom: '5px'}} src="http://images.rbe-ouest.com/base/sol.png"/><br/><span style={{fontSize: '11px'}}>Pose de parquet</span></Col>
            <Col xs={3}><img style={{marginTop: '5px', marginBottom: '5px'}} src="http://images.rbe-ouest.com/base/ma-interieur.png"/><br/><span style={{fontSize: '11px'}}>Meubles d'agencement sur mesure</span></Col>
            <Col xs={3}><img style={{marginTop: '5px', marginBottom: '5px'}} src="http://images.rbe-ouest.com/base/escalier.png"/><br/><span style={{fontSize: '11px'}}>Pose d'escalier</span></Col>
            <Col xs={3}><img style={{marginTop: '5px', marginBottom: '5px'}} src="http://images.rbe-ouest.com/base/plaquisterie.png"/><br/><span style={{fontSize: '11px'}}>Plaquisterie/Isolation</span></Col>
            <Col xs={3}><img style={{marginTop: '5px', marginBottom: '5px'}} src="http://images.rbe-ouest.com/base/cuisine.png"/><br/><span style={{fontSize: '11px'}}>Pose de cuisine</span></Col>
            <Col xs={3}><img style={{marginTop: '5px', marginBottom: '5px'}} src="http://images.rbe-ouest.com/base/dressing.png"/><br/><span style={{fontSize: '11px'}}>Dressings</span></Col>
            <Col xs={3}><img style={{marginTop: '5px', marginBottom: '5px'}} src="http://images.rbe-ouest.com/base/bibliotheque.png"/><br/><span style={{fontSize: '11px'}}>Bibliotheques</span></Col>
            <Col xs={3}><img style={{marginTop: '5px', marginBottom: '5px'}} src="http://images.rbe-ouest.com/base/verriere.png"/><br/><span style={{fontSize: '11px'}}>Verrières</span></Col>
          </Row>
        );
      } else if (this.props.location === 'exterieur') {
        return (
          <Row>
            <Col xs={3}><img style={{marginTop: '5px', marginBottom: '5px'}} src="http://images.rbe-ouest.com/base/fenetre-exterieur.png" /><br/><span style={{fontSize: '11px'}}>Pose de fenetre (Alu, PVC, Bois)</span></Col>
            <Col xs={3}><img style={{marginTop: '5px', marginBottom: '5px'}} src="http://images.rbe-ouest.com/base/garage.png" /><br/><span style={{fontSize: '11px'}}>Pose de garage</span></Col>
            <Col xs={3}><img style={{marginTop: '5px', marginBottom: '5px'}} src="http://images.rbe-ouest.com/base/bardage.png" /><br/><span style={{fontSize: '11px'}}>Bardage</span></Col>
            <Col xs={3}><img style={{marginTop: '5px', marginBottom: '5px'}} src="http://images.rbe-ouest.com/base/sol.png" /><br/><span style={{fontSize: '11px'}}>Terasse bois</span></Col>
          </Row>
        );
      }
    };

    const renderLeft = (onClick: React.MouseEventHandler<HTMLElement>, isDisabled: boolean) => {
      return (
        <img src="http://images.rbe-ouest.com/base/left-arrow.png" style={{marginRight: '60px'}} onClick={onClick} width="32px" height="32px" />
      );
    };

    const renderRight = (onClick: React.MouseEventHandler<HTMLElement>, isDisabled: boolean) => {
      return (
        <img src="http://images.rbe-ouest.com/base/right-arrow.png" onClick={onClick} width="32px" height="32px" />
      );
    };

    return (
      <>
        {renderLights()}
        <hr style={{borderTop: 'dotted 1px grey'}} />
        <ReactImageGallery onThumbnailClick={this.onImageClick} renderRightNav={renderRight} renderLeftNav={renderLeft} showFullscreenButton={false} items={images} showPlayButton={false} renderItem={() => {return ''; }} />
        <hr style={{borderTop: 'dotted 1px grey'}}/>
        {renderIcons()}
        <Modal size="lg" isOpen={this.state.open} toggle={this.onCloseModal} >
          <ModalBody>
            <img src={this.state.src} width="100%" height="100%" />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default PieceTypeStand;
