import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';

interface ContactPageProps {}
interface ContactPageState {
  email: string;
  sujet: string;
  body: string;
}

class ContactPage extends React.Component<ContactPageProps, ContactPageState> {

  constructor(props: ContactPageProps) {
    super(props);

    this.onTextAreaValueChange = this.onTextAreaValueChange.bind(this);
    this.onInputValueChange = this.onInputValueChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onTextAreaValueChange(event: ChangeEvent<HTMLTextAreaElement>) {
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
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <h2>Page de contact</h2>
        <p>Cette page pour permer de contacter RBE au sujet d'un point qui vous interesse</p>

        <form onSubmit={this.onFormSubmit}>
          <label>
            Votre email
          </label>
          <input onChange={this.onInputValueChange} name="email" type="text" placeholder="Votre email pour recontact"/>

          <br/>

          <label>
            Sujet de la demande
          </label>
          <input onChange={this.onInputValueChange} name="sujet" type="text" placeholder="Le sujet de votre demande"/>

          <br/>

          <label>
            Message de votre demande
          </label>
          <textarea onChange={this.onTextAreaValueChange} name="body" />

          <br/>

          <input type="submit" value="Envoyer" />
        </form>
      </>
    );
  }
}

export default ContactPage;
