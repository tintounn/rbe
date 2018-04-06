import * as React from 'react';
import { Nav, NavItem, NavLink, CardDeck, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Jumbotron, Input, Form, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Row, Col } from 'react-flexbox-grid';
import * as timeline from 'react-vertical-timeline-component';
import * as FontAwesome from 'react-icons/lib/fa';

interface AdminTravauxPageProps {}
interface AdminTravauxPageState {}

class AdminTravauxPage extends React.Component<AdminTravauxPageProps, AdminTravauxPageState> {

  constructor(props: AdminTravauxPageProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Nav tabs={true}>
          <NavItem>
            <NavLink >
              Gestion des galleries
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              Gestion des pré-devis
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={true}>
              Gestion des travaux
            </NavLink>
          </NavItem>
        </Nav>
        <br/><br/>

        <CardDeck style={{color: 'black'}}>
          <Card>
          <CardImg top={true} width="100%" src="http://groupement-artisans.e-monsite.com/medias/images/travaux-de-second-oeuvre-la-menuiserie.jpg?fx=r_740_600" alt="Card image cap" />
          <CardBody>
            <CardTitle>Vire</CardTitle>
            <CardSubtitle>Debut: 02/03/2018</CardSubtitle>
            <CardText><p>Pose de 2 fenetre a l'exterieur + une verriere pour la cuisine</p></CardText>
            <Button color="warning" style={{width: '100%'}}>Voir</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top={true} width="100%" src="https://s3.amazonaws.com/lyl-resto-heroku/lyl/kitchen/kitchen-3.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Caen</CardTitle>
            <CardSubtitle>Debut: 04/03/2018</CardSubtitle>
            <CardText>Pose d'une cuisine + une terasse tout</CardText>
            <Button color="warning" style={{width: '100%'}}>Voir</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top={true} width="100%" src="http://www.helpome-06.fr/userfiles/5265/t_Helpome%20z-baie-colart-01-28435.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Cherbourg</CardTitle>
            <CardSubtitle>Debut: 05/03/2018</CardSubtitle>
            <CardText>Pose d'une véranda</CardText>
            <Button color="warning" style={{width: '100%'}}>Voir</Button>
          </CardBody>
        </Card>
      </CardDeck>
      <hr/>
        <Jumbotron style={{color: 'black'}}>
          <h3>Ajout d'un nouveau travaux</h3>
          <Form>
            <Row>
              <Col xs={3}>
                <Input placeholder="La ville du travaux" style={{width: '100%'}} type="text"/>
              </Col>

              <Col xs={3}>
                <Input placeholder="Description des travaux" style={{width: '100%'}} type="textarea"/>
              </Col>

              <Col xs={3}>
                <Input placeholder="Description des travaux" style={{width: '100%'}} type="file"/>
              </Col>

              <Col xs={3}>
                <Button style={{width: '100%'}} color="warning">Ajouter</Button>
              </Col>
            </Row>
          </Form>
        </Jumbotron>

        <Modal style={{color: 'black'}} isOpen={false} size="lg" >
          <ModalHeader>Pose d'une véranda sur Cherbourg</ModalHeader>
          <ModalBody style={{backgroundColor: '#EEEEEE'}}>
            <h5><b>Description</b></h5>
            <p>Pose de 2 fenetre a l'exterieur + une verriere pour la cuisine</p>
            <hr/>
            <h5><b>Timeline</b></h5>

            <timeline.VerticalTimeline>
              <timeline.VerticalTimelineElement className="vertical-timeline-element--work" icon={<FontAwesome.FaPlayCircleO/>}>
                <h3 className="vertical-timeline-element-title">Debut des travaux</h3>
                <h4 className="vertical-timeline-element-subtitle">05/03/2018</h4>
                <p>
                  Debut de la conception des plans en relation avec la demande du client.
                  Proposition des differentes véranda possible au client.
                </p>
              </timeline.VerticalTimelineElement>
              <timeline.VerticalTimelineElement className="vertical-timeline-element--work" icon={<FontAwesome.FaCalendarCheckO/>}>
                <h3 className="vertical-timeline-element-title">Pose veranda</h3>
                <h4 className="vertical-timeline-element-subtitle">09/03/2018</h4>
                <p>
                  Poste de la véranda choisi par le client.
                </p>
              </timeline.VerticalTimelineElement>
              <timeline.VerticalTimelineElement className="vertical-timeline-element--work"  icon={<FontAwesome.FaStopCircleO/>}>
                <h3 className="vertical-timeline-element-title">Fin des travaux</h3>
                <h4 className="vertical-timeline-element-subtitle">12/03/2018</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
              </timeline.VerticalTimelineElement>
            </timeline.VerticalTimeline>

            <hr/>
            <h5><b>Ajout d'une étape</b></h5>
            <Row>
              <Col xs={3}>
                <Input placeholder="Libelle" />
              </Col>
              <Col xs={3}>
                <Input type="textarea" placeholder="Description de l'étape" />
              </Col>
              <Col xs={3}>
                <Input type="date" />
              </Col>
              <Col xs={3}>
                <Button color="warning" style={{width: '100%'}}>Ajouter</Button>
              </Col>
            </Row>

          </ModalBody>
          <ModalFooter>
            <Button color="secondary">Fermer</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default AdminTravauxPage;
