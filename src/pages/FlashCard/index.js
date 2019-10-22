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
          <div className="row alignT">
            <h1>Nome baralho</h1>
          </div>
          <div className="row mt-4 mr-4 dflex" />
          <div className="container">
            <Jumbotron fluid>
              <div className="container">
                <h1 className="display-4">Fluid jumbotron</h1>
              </div>
            </Jumbotron>
          </div>
        </div>
      </Container>
    </>
  );
}
