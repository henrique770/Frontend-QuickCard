import React from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import SideBar from '~/components/Sidebar';
import { Container } from './styles';
import TopBar from '../../components/TopBar';

export default function AddNote() {
  const editor = new EditorJS({
    holderId: 'editorjs',

    tools: {
      header: {
        class: Header,
        inlineToolbar: ['link'],
      },
      list: {
        class: List,
        inlineToolbar: ['link', 'bold'],
      },
      embed: {
        class: Embed,
        inlineToolbar: false,
        config: {
          services: {
            youtube: true,
            coub: true,
          },
        },
      },
    },
  });

  const saveBtn = document.querySelector('button');
  saveBtn.addEventListener('click', function() {
    editor
      .save()
      .then(outputData => {
        console.log('Article data:', outputData);
      })
      .catch(error => {
        console.log('Saving failed: ', error);
      });
  });

  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div>
        <TopBar />
        <div className=" containerside">
          <div className="row mt-4 mr-4">
            <div className="col-md-12">
              {/* EDITOR */}
              <h1>Hello editor.js</h1>
              <div id="editorjs" />

              <button className="Button">Salvar</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
