import React from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import { Container } from './styles';;

export default function Editor() {
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
  return (
    <Container>
      <div className="row fixedtitle">
        <h1>Hello editor.js</h1>
      </div>
      <div id="editorjs" />
    </Container>
  );
}
