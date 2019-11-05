import React, { useState, useEffect } from 'react';
import { Button, Fade } from 'reactstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';
import SideBar from './../../components/Sidebar';
import { Route, useParams } from "react-router-dom";
import ServiceApi from '../../services/ApiService/api.service';

import { Container } from './styles';

const FlashCard = props => {

  let urlParams = useParams()
  let [cartao, setCartao] = useState(null)


  const [fadeIn, setFadeIn] = useState(true);
  const toggle = () => setFadeIn(!fadeIn);

  let getFlashCardinBlock = async () => {
    return ServiceApi.getCartao(urlParams.id)
  }

  useEffect(() => {
    const getDateCartao = async () => {
      let date = await getFlashCardinBlock()
      console.log('card')
      console.log(date)
      setCartao(date)
    }

    getDateCartao()
  }, [])

  let btnAcertoDificil = (cartao) => {
    ServiceApi.atualizarCartaoDificil(urlParams.id, cartao)
      .then( e => {
          let btn = document.getElementById('btn-proximo')
          btn.click()
      })
      .catch(er => console.warn(er))
  }

  let btnAcertoMedio = (cartao) => {
    ServiceApi.atualizarCartaoMedio(urlParams.id, cartao, cartao.hMedio)
      .then( e => {
          let btn = document.getElementById('btn-proximo')
          btn.click()
      })
      .catch(er => console.warn(er))
  }

  let btnAcertoFacil = (cartao) => {
    ServiceApi.atualizarCartaoFacil(urlParams.id, cartao, cartao.hFacil)
      .then( e => {
          let btn = document.getElementById('btn-proximo')
          btn.click()
      })
      .catch(er => console.warn(er))
  }


  if(cartao == null){
    return (<>
      <Container>
        <div className="">
          <SideBar />
        </div>

        <div className=" containerside">
          <div className="alignT">
            <h1 className="fixedtitle">Buscando cartao...</h1>
          </div>
          
        </div>
      </Container>
    </>
  );
  }

  return (
    <>
      <Container>
        <div className="">
          <SideBar />
        </div>

        <div className=" containerside">
          <div className="alignT">
            <h1 className="fixedtitle">{cartao.nomeBloco}</h1>
          </div>
          <div className="row mt130 mr-4 dflex" />
          <div className="container">
            <Link to={`/editcard/${urlParams.id}/${cartao.id}`}>
              <Button className="btn-secondary font-weight-bold Button_padding mb-4">
                Editar
              </Button>
            </Link>
            <Jumbotron fluid>
              <div className="container">
                <h1 className="display-4">
                  {cartao.frenteCartao}
                </h1>
              </div>
            </Jumbotron>
            <div className="alignflexbutton">

              <section className="row">
                <section className="col">
                  <Button className="Button btn btn-primary Show"
                    onClick={() => {
                      let element = document.getElementById('target')
                      element.setAttribute('class' , '')
                    }}>
                    Mostrar
                  </Button>
                </section>

                <section className="col">
                  <Button className="Button btn btn-primary"
                    id='btn-proximo'
                    onClick={() => {
                      const getDateCartao = async () => {
                        let date = await getFlashCardinBlock()
                        let element = document.getElementById('target')
                        element.setAttribute('class' , 'Hide')
                        setCartao(date)
                      }

                      getDateCartao()
                    }}>
                    Próximo
                   </Button>
                </section>
              </section>

              <Fade in={fadeIn} tag="h5" className="mt-3 w-100">

                <div id="target" className="Hide">

                  <Jumbotron fluid className="mt-4">
                    <div className="container">
                      <h1 className="display-4">
                        {cartao.versoCartao}
                      </h1>
                    </div>
                  </Jumbotron>

                  <div className="align_performace">

                    <Button className="btn-secondary item_performance"
                      onClick={() => { btnAcertoDificil(cartao) }}>
                      Errei: 10 min.
                    </Button>

                    <Button className="Button item_performance"
                      onClick={() => { btnAcertoMedio(cartao) }}>
                      Bom : {cartao.hMedio} horas
                    </Button>

                    <Button className="btn-secondary item_performance"
                      onClick={() => { btnAcertoFacil(cartao) }}>
                      Fácil : {cartao.hFacil} hora
                    </Button>

                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FlashCard;
