import * as React from 'react';
import { ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import PieceTypeInterface from '../interfaces/PieceTypeInterface';

interface DevisPageProps {}
interface DevisPageState {
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string;
  societe?: string;
  pieceTypes: PieceTypeInterface[];

  piecesSelected: {qte: number, piece?: PieceTypeInterface}[];

  pieceSelected?: PieceTypeInterface;
  pieceQteSelected: number;
}

class DevisPage extends React.Component<DevisPageProps, DevisPageState> {

  constructor(props: DevisPageProps) {
    super(props);

    this.onInputValueChange = this.onInputValueChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onPieceTypeAdd = this.onPieceTypeAdd.bind(this);

    this.state = {
      pieceTypes: [],
      piecesSelected: [],
      pieceQteSelected: 0,
    };
  }

  componentWillMount() {
    axios({
      method: 'GET',
      url: 'http://api.rbe.com/piece-types',
    }).then((res) => {
      console.log(res.data);
      this.setState({
        pieceTypes: res.data.pieceTypes,
        pieceSelected: res.data.pieceTypes[0]
      });
    }).catch((err) => {
      console.error(err);
    });
  }

  onPieceTypeAdd() {
    let pieces = [...this.state.piecesSelected];
    pieces.push({piece: this.state.pieceSelected, qte: this.state.pieceQteSelected});

    this.setState({
      piecesSelected: pieces
    });

    console.log(pieces);
  }

  onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const target = event.target;
    const value: string = target.value;

    this.setState({
      ...this.state, pieceSelected: this.state.pieceTypes[value]
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
    const selectPieceTypes = this.state.pieceTypes.map((elt: PieceTypeInterface, index: number) => {
      return <option key={elt.id} value={index}>{elt.libelle + '-' + elt.location}</option>;
    });

    return (
      <>
        <h2>Page de demande de pre-devis</h2>
        <p>Cette page vous permez de faire une demande de pre-devis pour evaluer la faisabilité des travaux</p>

        <form onSubmit={this.onFormSubmit}>
          <label>
            Nom
          </label>
          <input onChange={this.onInputValueChange} name="nom" type="text" placeholder="Votre nom de famille"/>

          <br/>

          <label>
            Prenom
          </label>
          <input onChange={this.onInputValueChange} name="prenom" type="text" placeholder="Votre prenom"/>

          <br/>

          <label>
            Email
          </label>
          <input onChange={this.onInputValueChange} name="email" type="email" placeholder="Votre email"/>

          <br/>

          <label>
            Telephone
          </label>
          <input onChange={this.onInputValueChange} name="telephone" type="text" placeholder="Votre n° de telephone"/>

          <br/>

          <label>
            Societé (non obligatoire)
          </label>
          <input onChange={this.onInputValueChange} name="societe" type="text" placeholder="Nom de votre societé"/>

          <br/>

          <label>
            Types de piece souhaités
          </label>
          <select onChange={this.onSelectChange}>
            {selectPieceTypes}
          </select>
          <input onChange={this.onInputValueChange} name="pieceQteSelected" type="number"/>
          <input type="button" onClick={this.onPieceTypeAdd} value="Ajouter"/>

          <br/>

          <input type="submit" value="Envoyer" />
        </form>
      </>
    );
  }
}

export default DevisPage;
