import * as React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { ListGroupItem, ListGroup, Button, Form, Input, Jumbotron, Nav, NavItem, NavLink } from 'reactstrap';

interface AdminImagesPageProps {}
interface AdminImagesPageState {}

class AdminImagesPage extends React.Component<AdminImagesPageProps, AdminImagesPageState> {

  constructor(props: AdminImagesPageProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Nav tabs={true}>
          <NavItem>
            <NavLink active={true}>
              Gestion des galleries
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              Gestion des pré-devis
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              Gestion des travaux
            </NavLink>
          </NavItem>
        </Nav>
        <br/><br/>
        <Row>
          <Col xs={12} md={4}>
            <h4>Exterieur</h4>
            <ListGroup className="admin-images">
              <ListGroupItem>
                <Row>
                  <Col xs={4}>
                    <div><img style={{width: '100%'}} src="http://www.acacia-bois.fr/wp-content/uploads/2016/03/1-Escalier-bois-Finistere.jpg"/></div>
                  </Col>
                  <Col xs={6}>
                    <p>Escalier-Exterieur</p><p>Ordre: 1</p>
                  </Col>
                  <Col xs={2}>
                    <Button color="danger">X</Button>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col xs={4}>
                    <div><img style={{width: '100%'}} src="https://www.mesdemos.fr/wp-content/uploads/2018/02/porte-fenetre-PVC-imitation-bois-avec-volet-aluminium-TRYBA.jpg"/></div>
                  </Col>
                  <Col xs={6}>
                    <p>Fenetre-Exterieur</p><p>Ordre: 2</p>
                  </Col>
                  <Col xs={2}>
                    <Button color="danger">X</Button>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col xs={4}>
                    <div><img style={{width: '100%'}} src="https://i.pinimg.com/736x/92/1b/7f/921b7f7e9a0f3b90a7352f93941b47cd--isolation.jpg"/></div>
                  </Col>
                  <Col xs={6}>
                    <p>Fenetre-Exterieur</p><p>Ordre: 3</p>
                  </Col>
                  <Col xs={2}>
                    <Button color="danger">X</Button>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col xs={4}>
                    <div><img style={{width: '100%'}} src="http://www.home-exterieur.fr/wp-content/uploads/2015/02/Terrasse-en-bois-exotique-ip%C3%A9-Home-exterieur-59-Nord-1600x1200.jpg"/></div>
                  </Col>
                  <Col xs={6}>
                    <p>Terrasse-Exterieur</p><p>Ordre: 4</p>
                  </Col>
                  <Col xs={2}>
                    <Button color="danger">X</Button>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col xs={4}>
                    <div><img style={{width: '100%'}} src="http://www.alsagranit.com/wp-content/uploads/2013/12/escalier-003.jpg"/></div>
                  </Col>
                  <Col xs={6}>
                    <p>Esaclier-Exterieur</p><p>Ordre: 5</p>
                  </Col>
                  <Col xs={2}>
                    <Button color="danger">X</Button>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col xs={12} md={4}>
            <h4>Interieur</h4>
            <ListGroup className="admin-images">
              <ListGroupItem>
                  <Row>
                    <Col xs={4}>
                      <div><img style={{width: '100%'}} src="https://verrierefactory.fr/img/cms/Home/Verriere-interieure-sur-cloison.jpg"/></div>
                    </Col>
                    <Col xs={6}>
                      <p>Verriere</p><p>Ordre: 1</p>
                    </Col>
                    <Col xs={2}>
                      <Button color="danger">X</Button>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col xs={4}>
                      <div><img style={{width: '100%'}} src="http://www.ap-metallerie.fr/wp-content/uploads/2017/05/verriere-m%C3%A9tallerie-ap-m%C3%A9tallerie-1.jpg"/></div>
                    </Col>
                    <Col xs={6}>
                      <p>Verriere</p><p>Ordre: 2</p>
                    </Col>
                    <Col xs={2}>
                      <Button color="danger">X</Button>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col xs={4}>
                      <div><img style={{width: '100%'}} src="http://www.menuizea.com/images/porte-interieur-09.jpg"/></div>
                    </Col>
                    <Col xs={6}>
                      <p>Porte-intérieur</p><p>Ordre: 3</p>
                    </Col>
                    <Col xs={2}>
                      <Button color="danger">X</Button>
                    </Col>
                  </Row>
                </ListGroupItem>
            </ListGroup>
          </Col>

          <Col xs={12} md={4}>
            <h4>Plan</h4>
            <ListGroup className="admin-images">
              <ListGroupItem>
                <Row>
                  <Col xs={4}>
                    <div><img style={{width: '100%'}} src="http://www.avm-menuiseries.fr/media/ebook/jpg/bois/7A.jpg"/></div>
                  </Col>
                  <Col xs={6}>
                    <p>Ordre: 2</p>
                  </Col>
                  <Col xs={2}>
                    <Button color="danger">X</Button>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col xs={4}>
                    <div><img style={{width: '100%'}} src="http://idata.over-blog.com/5/56/12/23/Plan/ChaiseCuisine.png"/></div>
                  </Col>
                  <Col xs={6}>
                    <p>Ordre: 2</p>
                  </Col>
                  <Col xs={2}>
                    <Button color="danger">X</Button>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <hr/>
        <Jumbotron style={{color: 'black'}}>
          <h3>Upload d'une image</h3>
          <Form>
            <Row>
              <Col xs={4}>
                <Input style={{width: '100%'}} type="file"/>
              </Col>

              <Col xs={4}>
                <Input style={{width: '100%'}} type="select">
                  <option>Fenetre-exterieur</option>
                  <option>Fenetre-exterieur</option>
                  <option>Fenetre-exterieur</option>
                  <option>Fenetre-exterieur</option>
                  <option>Fenetre-exterieur</option>
                  <option>Fenetre-exterieur</option>
                </Input>
              </Col>

              <Col xs={4}>
                <Button style={{width: '100%'}} color="warning">Ajouter</Button>
              </Col>
            </Row>
          </Form>
        </Jumbotron>
      </>
    );
  }
}

export default AdminImagesPage;
