import React from 'react';
import SideBar from '../../components/Sidebar';
import BoxNotePad from '../../components/BoxNotepad';
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
          <div className="notepads_style">
            <div className=" alignT">
              <h1>Blocos de anotações</h1>
            </div>
            <div className="row mt-4 mr-4 dflex">
              <BoxNotePad decks={decks} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
