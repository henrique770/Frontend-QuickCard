import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SideBar from '../../components/Sidebar';
import { Container } from './styles';

export default function AddCard() {
  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div>

        <div className="containerside ov_hidden">
          <div className="alignT">
            <h1 className="fixedtitle">Adicionar cartão</h1>
          </div>
          <div className="row mt-4 mr-4">
            <div className="format_form">
              <Form>
                <Form.Group>
                  <div className="text-left labeltext">Baralho</div>
                  <Form.Control type="text" />
                </Form.Group>
                <div className="text-left labeltext">Frente</div>
                <Form.Group>
                  <Form.Control type="text" />
                </Form.Group>
                <div className="text-left labeltext">Verso</div>
                <Form.Group>
                  <Form.Control type="text" />
                </Form.Group>

                <Button className="Button" variant="primary" type="submit">
                  Salvar
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
