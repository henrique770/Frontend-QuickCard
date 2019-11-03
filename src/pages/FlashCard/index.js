import React, { Component, useState, useEffect } from 'react';
import { Route, useParams } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import SideBar from '../../components/Sidebar';
import ServiceApi from '../../services/ApiService/api.service';

import { Container } from './styles';

export default function FlashCard() {

  let urlParams = useParams()
  let [cartao, setCartao] = useState({})


  let getFlashCardinBlock = async () => {
    return ServiceApi.getCartao(urlParams.id);
  }

   useEffect( () => {
      const getDateCartao = async () => {
        let date = await getFlashCardinBlock()
        setCartao(date)
      }

      getDateCartao()
   } , [])

  let body = () => {

    return (
      <>
        <Container>
          <SideBar />
          <div className=" containerside">
            <div className="alignT">
              <h1>{cartao.nomeBloco}</h1>
            </div>
            <div className="row mt-4 mr-4 dflex" />
            <div className="container">
              <Jumbotron fluid>
                <div className="container">
                  <h1 className="display-4">{cartao.frenteCartao}</h1>
                </div>
              </Jumbotron>
              <div className="alignflexbutton">
                <div className="Button Show">Mostrar</div>
              </div>

              <Jumbotron id="target" fluid className="mt-4">
                <div className="container">
                  <h1 className="display-4">
                    {cartao.versoCartao}
                  </h1>
                </div>

                <hr />

                <section className='row'>
                  <section className='col d-flex justify-content-center'>
                    <button className="btn btn-primary" onClick={() => { ServiceApi.atualizarCartaoDificil(urlParams.id, cartao) }}>
                      Difícil : 10 min
                    </button>
                  </section>
                  <section className='col d-flex justify-content-center'>
                    <button className="btn btn-primary" onClick={() => { ServiceApi.atualizarCartaoMedio(urlParams.id, cartao, cartao.hMedio) }} >
                      Médio : {cartao.hMedio} horas
                      </button>
                  </section>
                  <section className='col d-flex justify-content-center'>
                    <button className="btn btn-primary" onClick={() => { ServiceApi.atualizarCartaoFacil(urlParams.id, cartao, cartao.hFacil) }}>
                      fácil : {cartao.hFacil} hora
                    </button>
                  </section>
                </section>

              </Jumbotron>

            </div>
          </div>
        </Container>
      </>
    );
  }

  return body();
}

