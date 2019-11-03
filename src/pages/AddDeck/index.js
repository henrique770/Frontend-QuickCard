import React from 'react';
import { Form, Button } from 'react-bootstrap';
import SideBar from '../../components/Sidebar';
import { Container } from './styles';
import ServiceApi from '../../services/ApiService/api.service';


export default function AddDeck() {


  async function addItemDeck(data) {
    data.preventDefault();

    let tituloBaralho = data.currentTarget[0].value


    let result = await ServiceApi.addBlocoCartao({
      nomeBloco : tituloBaralho
    })

    if(result){
      window.location.href = './decks'
      return false
    }

    return false
  }

  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div>

        <div className=" containerside">
          <div className="alignT">
            <h1 className="fixedtitle">Adicionar baralho</h1>
          </div>
          <div className="row mt-4 mr-4">
            <div className="format_form">

              <Form onSubmit={addItemDeck}>
                <Form.Group>
                  <div className="text-left labeltext">Nome do baralho</div>
                  <Form.Control type="text" />
                </Form.Group>

                <Button className="Button" variant="primary" type="submit" >
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
