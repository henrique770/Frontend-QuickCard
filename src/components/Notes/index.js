import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Container } from './styles';

export default function Notes({ notas }) {
  return (
    <>
      <Container>
        <div className="notes_style">
          {notas.map(item => (
            <Jumbotron>
              <h3>{item.titulo}</h3>
              <p>{item.breve}</p>
            </Jumbotron>
          ))}
        </div>
      </Container>
    </>
  );
}
