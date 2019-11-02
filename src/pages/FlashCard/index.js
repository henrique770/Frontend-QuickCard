import React, { useState } from 'react';
import { Button, Fade } from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';
import SideBar from '~/components/Sidebar';

import { Container } from './styles';

const FlashCard = props => {
  const [fadeIn, setFadeIn] = useState(true);

  const toggle = () => setFadeIn(!fadeIn);
  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div>

        <div className=" containerside">
          <div className="alignT">
            <h1 className="fixedtitle">Nome baralho</h1>
          </div>
          <div className="row mt130 mr-4 dflex" />
          <div className="container">
            <Link to="/editcard">
              <Button className="btn-secondary font-weight-bold Button_padding mb-4">
                Editar
              </Button>
            </Link>
            <Jumbotron fluid>
              <div className="container">
                <h1 className="display-4">Oque faz o comando: yppasswd?</h1>
              </div>
            </Jumbotron>
            <div className="alignflexbutton">
              <Button className="Button btn btn-primary Show" onClick={toggle}>
                Mostrar
              </Button>
              <Fade in={fadeIn} tag="h5" className="mt-3">
                <div id="target">
                  <Jumbotron fluid className="mt-4">
                    <div className="container">
                      <h1 className="display-4">
                        Muda a password(senha) do nosso utilizador nas páginas
                        amarelas (yellow pages)
                      </h1>
                    </div>
                  </Jumbotron>
                  <div className="align_performace">
                    <Button className="btn-secondary item_performance">
                      Errei
                    </Button>
                    <Button className="Button item_performance">Bom</Button>
                    <Button className="btn-secondary item_performance">
                      Fácil
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FlashCard;
