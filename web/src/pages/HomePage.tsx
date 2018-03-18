import * as React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import PieceTypeStand from '../components/PieceTypeStand';

interface HomePageProps {}
interface HomePageState {}

class HomePage extends React.Component<HomePageProps, HomePageState> {

  constructor(props: HomePageProps) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col sm={12} md={6} lg={4}>
          <PieceTypeStand location={'exterieur'}/>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <PieceTypeStand location={'interieur'}/>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <PieceTypeStand location={'plan'}/>
        </Col>
      </Row>
    );
  }
}

export default HomePage;
