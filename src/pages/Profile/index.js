import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SideBar from '~/components/Sidebar';
import { Container } from './styles';
import ServiceApi from '../../services/ApiService/api.service';

export default function Profile() {
  const urlParams = useParams();
  const [nomeCompleto, setNomeCompleto] = useState({});
  const [email, setEmail] = useState({});
  const [senhaAtual, setSenhaAtual] = useState({});
  const [novaSenha, setNovaSenha] = useState({});
  const [confirmarSenha, setConfirmarSenha] = useState({});

  const UpdateDataProfile = async () => {
    console.log(urlParams);
    return ServiceApi.getCartaoById();
  };

  useEffect(() => {
    const updateProfile = async () => {
      const change = await UpdateDataProfile();

      setNomeCompleto(change.nomeCompleto);
      setEmail(change.email);
      setSenhaAtual(change.senhaAtual);
      setNovaSenha(change.NovaSenha);
      setConfirmarSenha(change.confirmarSenha);
    };

    updateProfile();
  }, []);

  async function handleSubmit(data) {
    data.preventDefault();
    const changeBase = await UpdateDataProfile();

    changeBase.nomeCompleto = nomeCompleto;
    changeBase.email = email;
    changeBase.senhaAtual = senhaAtual;
    changeBase.novaSenha = novaSenha;
    changeBase.confirmarSenha = confirmarSenha;

    console.log(changeBase);

    ServiceApi.updateCartao(urlParams.idBloco, changeBase);
    alert('Perfil atualizado com sucesso!');
  }

  const handleChangeNomeCompleto = e => {
    setNomeCompleto(e.target.value);
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangeSenhaAtual = e => {
    setSenhaAtual(e.target.value);
  };
  const handleChangeNovaSenha = e => {
    if (senhaAtual !== novaSenha) {
      alert('A senha não é correspondente');
    } else {
      setNovaSenha(e.target.value);
    }
  };

  const handleChangeConfirmarSenha = e => {
    setConfirmarSenha(e.target.value);
  };

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
              <Form onSubmit={handleSubmit}>
                <div className="text-left labeltext">Nome Completo</div>
                <Form.Group>
                  <Form.Control
                    type="text"
                    value={nomeCompleto}
                    onChange={handleChangeNomeCompleto}
                  />
                </Form.Group>
                <div className="text-left labeltext">Email</div>
                <Form.Group>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={handleChangeEmail}
                  />
                </Form.Group>
                <div className="text-left labeltext">Senha atual</div>
                <Form.Group>
                  <Form.Control
                    type="password"
                    value={senhaAtual}
                    onChange={handleChangeSenhaAtual}
                  />
                </Form.Group>
                <div className="text-left labeltext">Nova senha</div>
                <Form.Group>
                  <Form.Control
                    type="password"
                    value={novaSenha}
                    onChange={handleChangeNovaSenha}
                  />
                </Form.Group>
                <Form.Group>
                  <div className="text-left labeltext">Confirmar senha</div>
                  <Form.Control
                    type="password"
                    value={confirmarSenha}
                    onChange={handleChangeConfirmarSenha}
                  />
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
