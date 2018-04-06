import * as React from 'react';
import { Input, Button, Form, FormGroup, Jumbotron } from 'reactstrap';
import { Col } from 'react-flexbox-grid';

interface AdminLoginPageProps {}
interface AdminLoginPageState {
  password: string;
}

class AdminLoginPage extends React.Component<AdminLoginPageProps, AdminLoginPageState> {
  
  constructor(props: AdminLoginPageProps) {
    super(props);
    
    this.state = {
      password: ''
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
    event.preventDefault();
  }
  
  render() {
    return (
      <Jumbotron style={{color: 'black'}}>
      <Col smOffset={4} sm={4} >
        <Form onSubmit={this.onFormSubmit}>
          <FormGroup>
            <label>
            Code admin
            </label>
            <Input onChange={this.onInputValueChange} name="password" type="text" placeholder="Votre code administrateur"/>
          </FormGroup>
        
          <FormGroup>
            <Button style={{width: '100%'}} color="warning">Connexion</Button>
          </FormGroup>
        </Form>
      </Col>
      </Jumbotron>
    );
  }
}

export default AdminLoginPage;
