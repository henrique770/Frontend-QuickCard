import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Container } from './styles';

export default function Box({ decks }) {
  return (
    <>
      {decks.map(item => (
        <Container>
          <div className="item grow1">
            <Jumbotron className="Jumbotron_height">
              <h3>{item.titulo}</h3>
              <div className="alignbottom">
                <div className="Button">Estudar</div>
              </div>
            </Jumbotron>
          </div>
        </Container>
      ))}
    </>
  );
}
