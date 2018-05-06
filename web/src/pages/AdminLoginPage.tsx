import * as React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

import { Input, Button, Form, FormGroup, Jumbotron, Alert } from 'reactstrap';
import { Col } from 'react-flexbox-grid';

interface AdminLoginPageProps {}
interface AdminLoginPageState {
  password: string;
  error: boolean;
  connected: boolean;
}

class AdminLoginPage extends React.Component<AdminLoginPageProps, AdminLoginPageState> {
  
  constructor(props: AdminLoginPageProps) {
    super(props);
    
    this.onInputValueChange = this.onInputValueChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      password: '',
      error: false,
      connected: false,
    };
  }
  
  onInputValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const name: string = target.name;
    const value: string = target.value;
    
    this.setState({
      ...this.state, [name]: value
    });
  }
  
  onFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    axios.post('http://api.rbe.com/login', {
      code: this.state.password
    }).then((res) => {
      this.setState({connected: true});
    }).catch((err) => {
      this.setState({error: true});
    });

    event.preventDefault();
  }
  
  render() {
    let redirect = <></>;
    if (this.state.connected) {
      redirect = <Redirect to="/admin-images"/>;
    }
    
    return (
      <Jumbotron style={{color: 'black'}}>
      {redirect}
      <Col smOffset={4} sm={4} >
      <Alert hidden={!this.state.error} color="danger">
        Code administrateur invalide.
      </Alert>
        <Form>
          <FormGroup>
            <label>
            Code admin
            </label>
            <Input onChange={this.onInputValueChange} name="password" type="password" placeholder="Votre code administrateur"/>
          </FormGroup>
        
          <FormGroup>
            <Button onClick={this.onFormSubmit} style={{width: '100%'}} color="warning">Connexion</Button>
          </FormGroup>
        </Form>
      </Col>
      </Jumbotron>
    );
  }
}

export default AdminLoginPage;
