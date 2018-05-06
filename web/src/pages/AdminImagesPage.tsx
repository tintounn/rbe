import * as React from 'react';
import axios from 'axios';
import { Button, Card, CardBody, CardImg, CardTitle, FormGroup, Input } from 'reactstrap';
import { Col, Row } from 'react-flexbox-grid';
import PieceInterface from '../interfaces/PieceInterface';

interface AdminImagesPageProps {}
interface AdminImagesPageState {
  location: string;
  pieces: PieceInterface[];
}

class AdminImagesPage extends React.Component<AdminImagesPageProps, AdminImagesPageState> {

  constructor(props: AdminImagesPageProps) {
    super(props);
    
    this.handleOnLocationClick = this.handleOnLocationClick.bind(this);
    this.onOrderChange = this.onOrderChange.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.onDelete = this.onDelete.bind(this);

    this.state = {
      pieces: [],
      location: 'exterieur'
    };
  }

  componentWillMount() {
    this.refreshList();
  }

  refreshList() {
    axios({
      method: 'GET',
      url: 'http://api.rbe.com/pieces',
      params: {
        location: this.state.location
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

    axios.put('http://api.rbe.com/pieces/' + this.state.pieces[index].id, {
      ordre: value
    }).then((res) => {
      this.refreshList();
    }).catch((err) => {
      console.error(err);
    });
  }

  onDelete(index: number) {
    axios.delete('http://api.rbe.com/pieces/' + this.state.pieces[index].id)
      .then((res) => {
        this.refreshList();
    }).catch((err) => {
        console.error(err);
    });
  }

  render() {
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
            <CardImg top={true} width="100%"  style={{maxHeight: '480px'}} src={'http://images.rbe.com/' + elt.path} alt={elt.libelle} />
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
            <Button style={{width: '100%'}} onClick={() => this.handleOnLocationClick('exterieur')} color="warning">Exterieur</Button>
          </Col>
          
          <Col md={4} xs={12}>
            <Button style={{width: '100%'}} onClick={() => this.handleOnLocationClick('interieur')} color="warning">Interieur</Button>
          </Col>

          <Col md={4} xs={12}>
            <Button style={{width: '100%'}} onClick={() => this.handleOnLocationClick('plan')} color="warning">Plan</Button>
          </Col>
        </Row>
        <br/>
        <Row>
          {piecesRenders}
        </Row>
      </div>
    );
  }
}

export default AdminImagesPage;
