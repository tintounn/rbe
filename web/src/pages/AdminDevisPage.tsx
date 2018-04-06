import * as React from 'react';
import { Nav, NavItem, NavLink, Table, Jumbotron, Input, Button, Label } from 'reactstrap';

interface AdminDevisPageProps {}
interface AdminDevisPageState {}

class AdminDevisPage extends React.Component<AdminDevisPageProps, AdminDevisPageState> {

  constructor(props: AdminDevisPageProps) {
    super(props);
  }

  render() {
    return (
      <>
        <Nav tabs={true}>
          <NavItem>
            <NavLink >
              Gestion des galleries
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active={true}>
              Gestion des pré-devis
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              Gestion des travaux
            </NavLink>
          </NavItem>
        </Nav>
        <br/><br/>
        <Label style={{marginLeft: '32px'}} check={true}>
            <Input type="checkbox" />
            Masquer les demandes traitées
        </Label>
        <Jumbotron>

        <Table size="sm" hover={true} bordered={true} striped={true} style={{color: 'black'}}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom / Prenom</th>
              <th>Mail / Telephone</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Dupont Thomas</td>
              <td>dthomas@gmail.com<br/>0645123685</td>
              <td>14/03/2018</td>
              <td>
                <Button style={{width: '100%'}} color="warning">Voir</Button>
                <hr/>
                <Input type="select">
                  <option>En attente de traitement</option>
                  <option>Traité</option>
                </Input>
              </td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>Delay Alicia</td>
              <td>aliciadelay@laposte.net<br/>0674859625</td>
              <td>18/03/2018</td>
              <td>
                <Button style={{width: '100%'}} color="warning">Voir</Button>
                <hr/>
                <Input type="select">
                  <option>En attente de traitement</option>
                </Input>
              </td>
            </tr>

            <tr>
              <th scope="row">3</th>
              <td>Pismont Quentin</td>
              <td>pismont.quentin@orange.com<br/>0648601236</td>
              <td>01/03/2018</td>
              <td>
                <Button style={{width: '100%'}} color="warning">Voir</Button>
                <hr/>
                <Input type="select">
                  <option>Traité</option>
                </Input>
              </td>
            </tr>

          </tbody>
        </Table>
        </Jumbotron>

      </>
    );
  }
}

export default AdminDevisPage;
