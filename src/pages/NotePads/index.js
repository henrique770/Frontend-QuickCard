import React from 'react';
import SideBar from '~/components/Sidebar';
import Box from '~/components/Box';
import { Container } from './styles';

export default function NotePads() {
  const decks = [
    {
      titulo: 'Linguagem de programação mobile',
    },
    {
      titulo: 'Função javascript ocultar e mostrar elementos na tela',
    },
  ];
  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div>
        <div className=" containerside">
        <div className="row alignT"><h1>Blocos de anotações</h1></div>
          <div className="row mt-4 mr-4 dflex">
            <Box decks={decks} />
          </div>
        </div>
      </Container>
    </>
  );
}
