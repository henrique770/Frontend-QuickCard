import React, { Component } from 'react';
import SideBar from '../../components/Sidebar';
import BoxDeck from '../../components/BoxDeck';
import { Container } from './styles';
import ServiceApi from '../../services/ApiService/api.service';

export default class Decks extends Component {

  myDecks = []

  getMyDecks = async => {
    this.myDecks = ServiceApi.getBlocoCartao()
  }

  render() {

    this.getMyDecks()

    return (
      <>
        <Container>
          <div className="">
            <SideBar />
          </div>

          <div className=" containerside">
            <div className="decks_style">
              <div className="alignT">
                <h1>Baralhos</h1>
              </div>
              <div className="row mt-4 mr-4 dflex">
                <BoxDeck decks={this.myDecks} />
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}
