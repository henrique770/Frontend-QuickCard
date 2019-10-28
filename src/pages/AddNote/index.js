import React from 'react';
import SideBar from '../../components/Sidebar';
import Editor from '../../components/Editor';
import { Container } from './styles';

export default function AddNote() {

  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div> 
        <div className="topbar">
          <div className="containerside">
            TÍTULO
          </div>
        </div>
        <div className=" containerside">
          
          <div className="row mt-4 mr-4">
          
            <div className="col-md-12">
              <Editor />
            </div>
          </div>
          
        </div>
      </Container>
    </>
  );
}
