import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Col, Grid } from 'react-flexbox-grid';

import './App.css';

import HomePage from './pages/HomePage';
import AdminLoginPage from './pages/AdminLoginPage';
import ContactPage from './pages/ContactPage';
import DevisPage from './pages/DevisPage';
import AdminImagesPage from './pages/AdminImagesPage';
import AdminDevisPage from './pages/AdminDevisPage';
import AdminTravauxPage from './pages/AdminTravauxPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="main">
          <div id="info">
          <div id="img-info">
            <img style={{width: '300px', display: 'inline-block', align: 'left'}} src="http://images.rbe.com/base/rbe-icon-header.png" />
            <img style={{width: '650px', display: 'inline-block', align: 'right', 'margin-left': '64px'}} src="http://images.rbe.com/base/info.png" />
          </div>
          </div>
          <div id="content">
            <div id="container">
              <Grid>
                <Route exact={true} path="/" component={HomePage}/>
                <Route exact={true} path="/admin" component={AdminLoginPage}/>
                <Route exact={true} path="/admin-images" component={AdminImagesPage}/>
                <Route exact={true} path="/admin-devis" component={AdminDevisPage}/>
                <Route exact={true} path="/admin-travaux" component={AdminTravauxPage}/>
                <Route exact={true} path="/contact" component={ContactPage}/>
                <Route exact={true} path="/devis" component={DevisPage}/>

                <hr/>
                <footer>
                  <Col><Link to="/admin">Admin</Link></Col>
                </footer>
              </Grid>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
