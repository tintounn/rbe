import * as React from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardImg, CardTitle, FormGroup, Input } from 'reactstrap';
import { Col, Row } from 'react-flexbox-grid';
import PieceInterface from '../interfaces/PieceInterface';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import Form from 'reactstrap/lib/Form';

interface AdminImagesPageProps {}
interface AdminImagesPageState {
  location: string;
  description: string;
  pieces: PieceInterface[];
  file: any;
}

class AdminImagesPage extends React.Component<AdminImagesPageProps, AdminImagesPageState> {

  constructor(props: AdminImagesPageProps) {
    super(props);

    this.handleOnLocationClick = this.handleOnLocationClick.bind(this);
    this.handleOnChangeDescription = this.handleOnChangeDescription.bind(this);
    this.handleOnSendClick = this.handleOnSendClick.bind(this);
    this.onOrderChange = this.onOrderChange.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.onDelete = this.onDelete.bind(this);

    this.state = {
      pieces: [],
      description: '',
      location: 'exterieur',
      file: null
    };
  }

  componentWillMount() {
    this.refreshList();
  }

  refreshList() {
    axios({
      method: 'GET',
      url: 'http://api.rbe-ouest.com/pieces',
      params: {
        location: this.state.location,
      }
    }).then((res) => {
      this.setState({
        pieces: res.data.pieces
      });
    }).catch((err) => {
      console.error(err);
    });
  }

  handleOnLocationClick(location: string) {
    this.setState(
    {
      location: location
    },
    this.refreshList);
  }

  onOrderChange(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    const target = event.target;
    const value: string = target.value;

    axios.put('http://api.rbe-ouest.com/pieces/' + this.state.pieces[index].id, {
      ordre: value,
    }).then((res) => {
      this.refreshList();
    }).catch((err) => {
      console.error(err);
    });
  }

  onDelete(index: number) {
    axios.delete('http://api.rbe-ouest.com/pieces/' + this.state.pieces[index].id)
      .then((res) => {
        this.refreshList();
    }).catch((err) => {
        console.error(err);
    });
  }

  handleOnSendClick() {
    let data = new FormData();
    data.append('libelle', this.state.description);
    data.append('file', this.state.file);
    data.append('location', this.state.location);

    axios.post('http://api.rbe-ouest.com/pieces', data)
      .then((res) => {
        this.refreshList();
      }).catch((err) => {
        console.error(err);
    });
  }

  handleOnChangeDescription(event: React.ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;
    this.setState({
      description: value
    });
  }

  handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    let files = event.target.files;
    if (files && files[0]) {
      this.setState({
        file: files[0]
      });
    }
  }

  render() {
    if (!this.state.pieces) {
      return <p>Chargement...</p>;
    }

    const pieces = this.state.pieces.sort((a: PieceInterface, b: PieceInterface) => {
      if (a.ordre < b.ordre) {
        return -1;
      } else {
        return 1;
      }
    });

    let piecesRenders = pieces.map((elt: PieceInterface, index: number) => {
      return (
        <Col xs={12} md={4} lg={3} key={elt.id}>
          <Card>
            <CardImg top={true} width="100%"  style={{height: '240px'}} src={'http://images.rbe-ouest.com/' + elt.path} alt={elt.libelle} />
            <CardBody>
              <CardTitle>{elt.libelle}</CardTitle>
              <FormGroup>
                  <Input type="number" value={elt.ordre} name="number" onChange={(event: React.ChangeEvent<HTMLInputElement>) => this.onOrderChange(event, index)} />
                </FormGroup>
              <Button onClick={() => this.onDelete(index)} style={{width: '100%'}} color="danger">X</Button>
            </CardBody>
          </Card>
        </Col>
      );
    });

    return (
      <div style={{width: '100%'}}>
        <Row>
          <Col md={4} xs={12}>
            <Button style={{width: '100%'}} disabled={(this.state.location === 'exterieur')} onClick={() => this.handleOnLocationClick('exterieur')} color="warning">Exterieur</Button>
          </Col>

          <Col md={4} xs={12}>
            <Button style={{width: '100%'}} disabled={(this.state.location === 'interieur')} onClick={() => this.handleOnLocationClick('interieur')} color="warning">Interieur</Button>
          </Col>

          <Col md={4} xs={12}>
            <Button style={{width: '100%'}} disabled={(this.state.location === 'plan')} onClick={() => this.handleOnLocationClick('plan')} color="warning">Plan</Button>
          </Col>
        </Row>
        <br/>
        <Row>
          {piecesRenders}
        </Row>
        <br/><br/><br/>
        <Jumbotron style={{color: 'black'}}>
          <h3>Upload d'une image</h3>
          <br/>
          <Form>
            <Row>
              <Col xs={4}>
                <Input onChange={this.handleFileChange} id="file" style={{width: '100%'}} type="file"/>
              </Col>

              <Col xs={4}>
                <Input type="textarea" onChange={this.handleOnChangeDescription} style={{width: '100%'}} placeholder="Description de l'image" />
              </Col>

              <Col xs={4}>
                <Button style={{width: '100%'}} onClick={this.handleOnSendClick} color="warning">Ajouter</Button>
              </Col>
            </Row>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default AdminImagesPage;
