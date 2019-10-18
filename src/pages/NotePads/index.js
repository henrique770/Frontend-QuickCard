import React from 'react';
import SideBar from '~/components/Sidebar';
import { Container } from './styles';

export default function NotesPads() {

  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div>
        <div className=" containerside">
          
          <div className="row mt-4 mr-4">
          
            <div className="col-md-12">
              <h1>Blocos de nota</h1>
            </div>
          </div>
          
        </div>
      </Container>
    </>
  );
}
