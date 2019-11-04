import React, { Component, useState, useEffect } from 'react';
import SideBar from '../../components/Sidebar';
import BoxDeck from '../../components/BoxDeck';
import { Container } from './styles';
import ServiceApi from '../../services/ApiService/api.service';

export default function Decks() {

  let [myDecks , setMyDecks ]= useState([])
  let [decksIsNull , setDecksIsNull ]= useState(false)


  let getMyDecks = async => {
    return ServiceApi.getBlocoCartao()
  }

  useEffect(() => {
    const getDataDecks = async () => {
      let date = await getMyDecks()

      if(date == null)
      {
        setDecksIsNull(true)
        return;
      }
      setDecksIsNull(false)
      setMyDecks(date)
    }

    getDataDecks()
  }, [])


  if(decksIsNull){
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
            <p>Nenhum baralho registrado</p>
          </div>
        </div>

        </Container>
      </>
    );
  }

  if(myDecks.length < 1) {
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
            <p>Buscando Baralhos ...</p>
          </div>
        </div>

        </Container>
      </>
    );
  }

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
            <div className="row mt130 mr-4 dflex">
              <BoxDeck decks={myDecks} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
