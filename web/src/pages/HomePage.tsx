import * as React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import PieceTypeStand from '../components/PieceTypeStand';
import ContactPage from './ContactPage';

interface HomePageProps {}
interface HomePageState {}

class HomePage extends React.Component<HomePageProps, HomePageState> {

  constructor(props: HomePageProps) {
    super(props);
  }

  render() {
    return (
      <>
      <Row>
        <p id="info-home">
          <span className="orange-text">Decouvrez ci-dessous </span> toute nos prestations en menuiserie <span className="orange-text">intérieure et extérieure</span>
        </p>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <div className="piece-stand"><PieceTypeStand location={'exterieur'}/></div>
        </Col>
        <Col sm={12} md={6}>
          <div className="piece-stand"><PieceTypeStand location={'interieur'}/></div>
        </Col>
        <img src="http://images.rbe.com/base/info-mesure.png" />
        <Col sm={12} md={6}>
          <div className="piece-stand"><PieceTypeStand location={'plan'}/></div>
        </Col>
        <Col sm={12} md={6}>
          <ContactPage />
        </Col>
      </Row>
      </>
    );
  }
}

export default HomePage;
