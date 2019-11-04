import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SideBar from './../../components/Sidebar';
import { Container } from './styles';

export default function Profile() {
  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div>

        <div className="containerside ov_hidden">
          <div className="alignT">
            <h1 className="fixedtitle">Perfil</h1>
          </div>
          <div className="row mt-4 mr-4">
            <div className="format_form">
              <Form>
                <div className="text-left labeltext">Nome Completo</div>
                <Form.Group>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
                <div className="text-left labeltext">Email</div>
                <Form.Group>
                  <Form.Control type="email" placeholder="" />
                </Form.Group>
                <div className="text-left labeltext">Senha atual</div>
                <Form.Group>
                  <Form.Control type="password" placeholder="" />
                </Form.Group>
                <div className="text-left labeltext">Nova senha</div>
                <Form.Group>
                  <Form.Control type="password" placeholder="" />
                </Form.Group>
                <Form.Group>
                  <div className="text-left labeltext">Confirmar senha</div>
                  <Form.Control type="password" placeholder="" />
                </Form.Group>

                <Button
                  className="ButtonUpdate"
                  variant="primary"
                  type="submit"
                >
                  Atualizar perfil
                </Button>
                <Button
                  className="ButtonDelete"
                  variant="primary"
                  type="submit"
                >
                  Deletar conta
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
