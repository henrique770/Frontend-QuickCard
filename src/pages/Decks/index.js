import React from 'react';
import SideBar from '~/components/Sidebar';
import Box from '~/components/Box';
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
          <div className="row alignT">
            <h1>Baralhos</h1>
          </div>
          <div className="row mt-4 mr-4 dflex">
            <Box decks={decks} />
          </div>
        </div>
      </Container>
    </>
  );
}
