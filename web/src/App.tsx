import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Row, Col, Grid } from 'react-flexbox-grid';

import './App.css';

import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Grid fluid={true}>
          <header>
            <h1>RBE</h1>

            <Row>
              <Col xs={4}><Link to="/">Accueil</Link></Col>
              <Col xs={4}><Link to="/devis">Demande de pre-devis</Link></Col>
              <Col xs={4}><Link to="/contact">Contact</Link></Col>
            </Row>
          </header>

          <Route exact={true} path="/" component={HomePage}/>
          <Route exact={true} path="/admin" component={AdminPage}/>
          <Route exact={true} path="/contact" component={ContactPage}/>

          <hr/>
          <footer>
            <Col><Link to="/admin">Admin</Link></Col>
          </footer>
        </Grid>
      </Router>
    );
  }
}

export default App;
