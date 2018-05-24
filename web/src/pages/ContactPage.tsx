import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { Input, Button, Form } from 'reactstrap';
import axios from 'axios';
import Alert from 'reactstrap/lib/Alert';

interface ContactPageProps {}
interface ContactPageState {
  email: string;
  sujet: string;
  body: string;
  result: string;
  success: boolean;
  n1: number;
  n2: number;
}

class ContactPage extends React.Component<ContactPageProps, ContactPageState> {

  constructor(props: ContactPageProps) {
    super(props);

    this.state = {
      success: false,
      email: '',
      sujet: '',
      body: '',
      result: '',
      n1: Math.round(Math.random() * 10),
      n2: Math.round(Math.random() * 10)
    };

    this.onTextAreaValueChange = this.onTextAreaValueChange.bind(this);
    this.onInputValueChange = this.onInputValueChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onTextAreaValueChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const name: string = target.name;
    const value: string = target.value;

    this.setState({
      ...this.state, [name]: value
    });
  }

  onInputValueChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.target;
    const name: string = target.name;
    const value: string = target.value;

    this.setState({
      ...this.state, [name]: value
    });
  }

  onFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (this.state.n1 + this.state.n2 !== parseInt(this.state.result, 0)) {
      alert('Captcha incorrect');
      return;
    }

    let data = new FormData();
    data.append('sujet', this.state.sujet);
    data.append('email', this.state.email);
    data.append('body', this.state.body);

    axios.post('http://api.rbe-ouest.com/contact', data)
      .then((res) => {
        this.setState({
          success: true,
          n1: Math.round(Math.random() * 10),
          n2: Math.round(Math.random() * 10)
        });
      }).catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <>
        <h2>Formulaire de contact</h2>

        <Alert hidden={!this.state.success} color="success">
          Message envoyé !
        </Alert>

        <Form onSubmit={this.onFormSubmit}>
          <label>
            Votre email
          </label>
          <Input onChange={this.onInputValueChange} name="email" type="text" placeholder="Votre email pour recontact"/>

          <br/>

          <label>
            Sujet de la demande
          </label>
          <Input onChange={this.onInputValueChange} name="sujet" type="text" placeholder="Le sujet de votre demande"/>

          <br/>

          <label>
            Message de votre demande
          </label>
          <Input type="textarea" onChange={this.onTextAreaValueChange} name="body" />

          <label>
            {this.state.n1} + {this.state.n2} =
          </label>
          <Input type="text" name="result" onChange={this.onInputValueChange} />

          <br/>

          <Button style={{width: '100%'}} color="warning">Envoyer</Button>
        </Form>
      </>
    );
  }
}

export default ContactPage;
