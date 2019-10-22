import React from 'react';
import SideBar from '~/components/Sidebar';
import BoxDeck from '~/components/BoxDeck';
import { Container } from './styles';

export default function Decks() {
  const decks = [
    {
      titulo: 'Bash / Terminal Linux',
    },
    {
      titulo: 'Expressões em inglês / frases / palavras',
    },
    {
      titulo: 'Palavras reservadas Linguagem C',
    },
    {
      titulo: 'Ordenação em Estrutura de dados',
    },
  ];
  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div>

        <div className=" containerside">
          <div className="decks_style">
            <div className="alignT">
              <h1>Baralhos</h1>
            </div>
            <div className="row mt-4 mr-4 dflex">
              <BoxDeck decks={decks} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
