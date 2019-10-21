import React from 'react';
import SideBar from '~/components/Sidebar';
import Box from '~/components/Box';
import { Container } from './styles';

export default function NotePads() {
  const decks = [
    {
      titulo: 'Bash / Terminal Linux',
    },
    {
      titulo: 'Expressões em inglês / frases / palavras',
    },
  ];
  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div>
        <div className=" containerside">
          <div className="row mt-4 mr-4 dflex">
            <Box decks={decks} />
          </div>
        </div>
      </Container>
    </>
  );
}
