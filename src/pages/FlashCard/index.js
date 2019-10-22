import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import SideBar from '~/components/Sidebar';

import { Container } from './styles';

export default function FlashCard() {
  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div>

        <div className=" containerside">
          <div className="alignT">
            <h1>Nome baralho</h1>
          </div>
          <div className="row mt-4 mr-4 dflex" />
          <div className="container">
            <Jumbotron fluid>
              <div className="container">
                <h1 className="display-4">Oque faz o comando: yppasswd?</h1>
              </div>
            </Jumbotron>
            <div className="alignflexbutton">
              <div className="Button Show">Mostrar</div>
            </div>
            <Jumbotron id="target" fluid className="mt-4">
              <div className="container">
                <h1 className="display-4">
                  Muda a password(senha) do nosso utilizador nas páginas
                  amarelas (yellow pages)
                </h1>
              </div>
            </Jumbotron>
          </div>
        </div>
      </Container>
    </>
  );
}
