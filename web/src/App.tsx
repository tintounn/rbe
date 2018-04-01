import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Col, Grid } from 'react-flexbox-grid';

import './App.css';

import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import ContactPage from './pages/ContactPage';
import DevisPage from './pages/DevisPage';

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
            <Grid>

              <Route exact={true} path="/" component={HomePage}/>
              <Route exact={true} path="/admin" component={AdminPage}/>
              <Route exact={true} path="/contact" component={ContactPage}/>
              <Route exact={true} path="/devis" component={DevisPage}/>

              <hr/>
              <footer>
                <Col><Link to="/admin">Admin</Link></Col>
              </footer>
            </Grid>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
