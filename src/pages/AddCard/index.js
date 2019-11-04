import React , { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Route, useParams } from "react-router-dom";
import SideBar from '../../components/Sidebar';
import { Container } from './styles';
import ServiceApi from '../../services/ApiService/api.service';

export default function AddCard() {

  let [frenteCartao , setFrenteCartao] = useState("")
  let [versoCartao , setVersoteCartao] = useState("")

  let _useParams = useParams()

  let addCartao = async (data) => {
    data.preventDefault();

    console.log(_useParams)

    ServiceApi.addCartao( { frenteCartao , versoCartao } , _useParams.id )
      .then(resul => {

        window.location.href = `/flashcard/${_useParams.id}`
        console.log(resul)
      })
      .catch(err => {

        console.err(err)
      })

    return false
  }

  let nameCard = window.location.search.replace("?namecard=" , "").replace("%20" , " ")


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
              <Form onSubmit={addCartao}>
                
                <Form.Group>
                  <div className="text-left labeltext">Baralho</div>
                  <Form.Control type="text" name="nameBaralho" 
                    value={nameCard} disabled />
                </Form.Group>
                
                <div className="text-left labeltext">Frente</div>
                
                <Form.Group>
                  <Form.Control type="text" name="frente" 
                    value={frenteCartao} 
                    onChange={(e) => setFrenteCartao(e.target.value)} />
                </Form.Group>
                
                <div className="text-left labeltext">Verso</div>
                
                <Form.Group>
                  <Form.Control type="text" name="verso" 
                    value={versoCartao}  
                    onChange={(e) => setVersoteCartao(e.target.value)} />
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
