import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import SideBar from './../../components/Sidebar';
import { Route, useParams , Redirect} from "react-router-dom";
import { Container } from './styles';
import ServiceApi from '../../services/ApiService/api.service';

export default function EditCard() {

  let urlParams = useParams()
  let [cartao, setCartao] = useState({})
  let [redirectCard , setRedirectCard ] = useState(false)

  let [frenteCartao, setFrenteCartao] = useState({})
  let [versoCartao, setversoCartao] = useState({})


  let getFlashCardinBlock = async () => {
    console.log(urlParams)
    return ServiceApi.getCartaoById(urlParams.idBloco, urlParams.idCard)
  }

  useEffect(() => {
    const getDateCartao = async () => {
      let date = await getFlashCardinBlock()

      setFrenteCartao(date.frenteCartao);
      setversoCartao(date.versoCartao);

      setCartao(date)
    }

    getDateCartao()
  }, [])

  async function handleSubmit(data) {
    data.preventDefault();
    let cartaoBase = await getFlashCardinBlock()

    cartaoBase.frenteCartao = frenteCartao
    cartaoBase.versoCartao = versoCartao

    console.log(cartaoBase)

    ServiceApi.updateCartao(urlParams.idBloco, cartaoBase)
    alert('Cartão atualizado com sucesso!')
    setRedirectCard(true)
  }

  let handleChangeFrenteCartao = (e) => {
    setFrenteCartao(e.target.value)
  }

  let handleChangeVersoCartao = (e) => {
    setversoCartao(e.target.value)
  }

  if(redirectCard){
    return <Redirect to={`/flashcard/${urlParams.idBloco}`} />
  }

  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div>

        <div className="containerside ov_hidden">
          <div className="alignT">
            <h1 className="fixedtitle">Editar cartão</h1>
          </div>

          <div className="row mt-4 mr-4">
            <div className="format_form">

              <Form onSubmit={handleSubmit}>

                <div className="text-left labeltext">Frente</div>

                <Form.Group>
                  <Form.Control as="textarea" rows="3" name="frenteCartao"
                    value={frenteCartao}
                    onChange={handleChangeFrenteCartao} />
                </Form.Group>

                <div className="text-left labeltext">Verso</div>

                <Form.Group>
                  <Form.Control as="textarea" rows="3" name="versoCartao"
                    value={versoCartao}
                    onChange={handleChangeVersoCartao} />
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
