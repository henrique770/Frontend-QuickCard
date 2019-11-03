import React from 'react';
import SideBar from '~/components/Sidebar';
import Notes from '~/components/Notes';
import Editor from '~/components/Editor';
import TopBar from '~/components/TopBar';
import { Container } from './styles';

export default function Dashboard() {
  const notas = [
    {
      titulo: 'Hello World',
      breve:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    },
    {
      titulo: 'prova java oo',
      breve:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    },
    {
      titulo: 'Pendências',
      breve:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    },
    {
      titulo: 'Leitura',
      breve:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    },
    {
      titulo: 'Dados site',
      breve:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    },
    {
      titulo: 'Javascript select item',
      breve:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    },
    {
      titulo: 'Bootcamp',
      breve:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    },
    {
      titulo: 'Redux, Redux Saga, Axios',
      breve:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto sed est atque sequi delectus at fugit numquam voluptate temporibus praesentium iure, repellendus laborum porro amet quas voluptatibus? Atque, facilis quo!',
    },
  ];

  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div>
        <TopBar />
        <div className=" containerside">
          <div className="row mt-4 mr-4">
            <div className="col-md-3">
              <Notes notas={notas} />
            </div>
            <div className="col-md-9">
              <Editor />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
