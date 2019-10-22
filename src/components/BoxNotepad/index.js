import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import { Container } from './styles';

export default function BoxNotePad({ decks }) {
  return (
    <>
      {decks.map(item => (
        <Container>
          <div className="item grow1">
            <Jumbotron className="Jumbotron_height">
              <h3>{item.titulo}</h3>
              <div className="alignbottom linkbutton">
                <Link to="/dashboard"><div className="Button">Acessar</div></Link>
              </div>
            </Jumbotron>
          </div>
        </Container>
      ))}
    </>
  );
}
