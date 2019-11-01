import React, { Component } from 'react';
import { Route, useParams } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import SideBar from '../../components/Sidebar';
import ServiceApi from '../../services/ApiService/api.service';

import { Container } from './styles';

export default function FlashCard() {


  let urlParams = useParams()
  let cartao = {}

  let getFlashCardinBlock = () => {
    console.log(urlParams)

    cartao = ServiceApi.getCartao(urlParams.id)
    console.log(cartao)
  }


  function Render() {

    getFlashCardinBlock()

    return (
      <>
        <Container>
          <div className="">
            <SideBar />
          </div>

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

                <hr/>

                <section class='row'>
                  <section class='col d-flex justify-content-center'>
                    <button class="btn btn-primary">Dificil : 10 min</button>
                  </section>
                  <section class='col d-flex justify-content-center'>
                    <button class="btn btn-primary">Normal : 12 horas</button>
                  </section>
                  <section class='col d-flex justify-content-center'>
                    <button class="btn btn-primary">Dificil : 1 dia</button>
                  </section>
                </section>

              </Jumbotron>

            </div>
          </div>
        </Container>
      </>
    );

  }

  return Render();

}
