import React from 'react';
import { Link , Route, Redirect} from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import { Container } from './styles';

export default function BoxDeck({ decks }) {

  return (
    <>
      {decks.map(item => (
        <Container>
          <div className="item grow1">
            <Jumbotron className="Jumbotron_height">
              <h3>{item.nomeBloco}</h3>
              <div className="alignbottom linkbutton">
            
                <Link to={`/addcard/${item.id}?namecard=${item.nomeBloco}`} >
                  <div className="Button mt-2">Adiconar cartção</div>
                </Link>
                
                <Link to={`/flashcard/${item.id}`} >
                  <div className="Button mt-2">Acessar</div>
                </Link>
              </div>
            </Jumbotron>
          </div>
        </Container>
      ))}
    </>
  );
}
