import React from 'react';
import SideBar from '~/components/Sidebar';
import { Container } from './styles';
import { Jumbotron } from 'react-bootstrap';

export default function Decks() {

  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div>
        <div className=" containerside">
          
          <div className="row mt-4 mr-4 dflex">
          
            <div className="item grow1">
              <Jumbotron>
                <h3>Bash e terminal Linux</h3>
                
                <div className="Button">Estudar</div>
                
              </Jumbotron>
            </div>
            <div className="item grow1">
              <Jumbotron>
                <h3>Bash e terminal Linux</h3>
                
                <div className="Button">Estudar</div>
                
              </Jumbotron>
            </div>
            <div className="item grow1">
              <Jumbotron>
                <h3>Bash e terminal Linux</h3>
                
                <div className="Button">Estudar</div>
                
              </Jumbotron>
            </div>
            <div className="item grow1">
              <Jumbotron>
                <h3>Bash e terminal Linux</h3>
                
                <div className="Button">Estudar</div>
                
              </Jumbotron>
            </div>
            <div className="item grow1">
              <Jumbotron>
                <h3>Bash e terminal Linux</h3>
                
                <div className="Button">Estudar</div>
                
              </Jumbotron>
            </div>
            <div className="item grow1">
              <Jumbotron>
                <h3>Bash e terminal Linux</h3>
                
                <div className="Button">Estudar</div>
                
              </Jumbotron>
            </div>
            <div className="item grow1">
              <Jumbotron>
                <h3>Bash e terminal Linux</h3>
                
                <div className="Button">Estudar</div>
                
              </Jumbotron>
            </div>
          </div>
          
        </div>
      </Container>
    </>
  );
}
