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

        <div className=" containerside">
          <div className="alignT">
            <h1>Adicionar cartão</h1>
          </div>
          <div className="row mt-4 mr-4">
            <div className="format_form">
              <Form>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Digite o nome do Baralho"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control type="text" placeholder="Frente" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="text" placeholder="Verso" />
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
