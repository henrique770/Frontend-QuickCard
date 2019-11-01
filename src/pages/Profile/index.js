import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SideBar from '~/components/Sidebar';
import { Container } from './styles';

export default function Profile() {
  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div>

        <div className=" containerside">
          <div className="alignT">
            <h1>Perfil</h1>
          </div>
          <div className="row mt-4 mr-4">
            <div className="format_form">
              <Form>
                <Form.Group>
                  <Form.Control type="text" placeholder="Nome completo" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group>
                  <Form.Control type="password" placeholder="Sua senha atual" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="password" placeholder="Nova senha" />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="Confirmação de senha"
                  />
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
