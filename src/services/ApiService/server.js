import * as httpService from '../httpService';

class ServiceApi {

  pathCartao = 'cartaoMemoria';
  pathBlocoCartao = 'blocoCartaoMemoria';
  pathAuthenticate = 'authenticate';

  _host = 'http://127.0.0.1:8080';
  _url = `${this._host}${this._path}`;

  constructor() { }

  /**
   * Verificar se usuario esta valido
   */
  isAuthenticate = () => {
    const user = localStorage.getItem('user');

    if (user != null) {
      return true;
    }

    return false;
  };

  /**
 * @param user usuario email
 * @param senha senha do usuario
 * @example login( 'user' , 'senha')
 */
  login = async (user, senha) => {
    const userToken = await httpService.onPostNotAuthorization(
      `${this._host}/${this.pathAuthenticate}`,
      { username: user, password: senha }
    );

    if (userToken.status == "ok") {
      localStorage.setItem('token', userToken.jwttoken);
      localStorage.setItem('user', JSON.stringify(userToken));
      localStorage.setItem('userName', userToken.nome);

      return userToken;
    }

    return false;
  };

  getUserCorrent = () => JSON.parse(localStorage.getItem('user'));

  updateUserCorrent = user => localStorage.setItem('user', JSON.stringify(user));

  /**
   * @param estudanteModel
   * @example estudanteModel : {
   *   "email" : "string",
   *   "nome" : "string",
   *   "senha": "string"
   * }
   */
  estudanteCreated = async estudanteModel => {
    return httpService.onPost(`${this._url}`, estudanteModel);
  };

  // #region BLOCO CARTAO | BARALHO

  /**
   * Recuperar todos os blocos cartao
   */
  getBlocoCartao = async => {
    console.log('GET blocoCartao')
    const idEstudante = this.getUserCorrent().id;

    return httpService.onGet(
      `${this._host}/${this.pathBlocoCartao}/${idEstudante}`
    );
  };

  /**
   * @param idBlocoCartao id do bloco-cartao
   * @returns Bloco-cartap referente ao id passado na requisição entity
   * @example getBlocoCartaoById( 'de447979-f394-466e-bb43-8c1dc1f13650' , '8f506718-39f2-4a7a-8ac6-569149e79c51')
   */
  getBlocoCartaoById = async idBlocoCartao => {
    const idEstudante = this.getUserCorrent().id;
    return httpService.onGet(
      `${this._host}/${this.pathBlocoCartao}/${idEstudante}/${idBlocoCartao}`
    );
  };

  /**
   * @param blocoCartaoModel objeto model para criacao de um bloco-cartao
   * @example blocoCartaoModel : {
   * 	    "nomeBloco" : "string"
   * }
   */
  addBlocoCartao = async blocoCartaoModel => {
    const idEstudante = this.getUserCorrent().id;

    return httpService.onPost(
      `${this._host}/${this.pathBlocoCartao}/${idEstudante}`,
      blocoCartaoModel
    );
  };



  // #endregion

  //#region CARTAO

  addCartao = async (cartaoModel, idBloco) => {
    let user = this.getUserCorrent()
    cartaoModel.idEstudante = user.id

    let date = new Date()

    cartaoModel.dataVisualizacao = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`
    cartaoModel.timeVisualizacao = `${date.getHours()}:${date.getMinutes()}`
    cartaoModel.acertoFacil = 1
    cartaoModel.acertoMedio = 1

    console.log(cartaoModel)

    return httpService.onPost(`${this._host}/${this.pathCartao}/${idBloco}`, cartaoModel)
  }

  getCartaoById = async (idBlocoCartao, idCartao) => {
    let user = this.getUserCorrent()

    return await httpService.onGet(`${this._host}/${this.pathCartao}/${user.id}/${idCartao}`)
  }

  getCartao = async idBlocoCartao => {

    let user = this.getUserCorrent()
    let bloco = await httpService.onGet(`${this._host}/${this.pathBlocoCartao}/${user.id}/${idBlocoCartao}`)
    console.log(bloco)
    if (bloco.cartaoMemoria == null) {
      alert('Nenhum cartao localizado')
      return;
    }
    let listaOrdernada = this.ordernarCartaoBaralho(bloco.cartaoMemoria)

    let i = listaOrdernada.length > 2 ? 2 : listaOrdernada.length

    let iRandom = Math.floor(Math.random() * i)
    let cartao = listaOrdernada[iRandom]

    cartao.nomeBloco = bloco.nomeBloco

    return this.calcularHorasCartao(cartao)
  }

  pesoFacil = 5
  pesoMedio = 2
  pesoDificil = -1

  calcularHorasCartao(cartao) {

    let a = cartao.acertoFacil
    let b = cartao.acertoMedio
    let c = cartao.acertoDificil

    let media = (a * this.pesoFacil) + (b * this.pesoMedio + c * this.pesoDificil)

    cartao.hFacil = (media * this.pesoFacil)
    cartao.hMedio = (media * this.pesoMedio)

    return cartao
  }


  atualizarCartaoDificil = async (idBloco, cartao) => {
    let date = new Date()
    date.setMinutes(10)

    cartao.dataVisualizacao = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`
    cartao.timeVisualizacao = `${date.getHours()}:${date.getMinutes()}`

    this.updateCartao(idBloco, cartao)
  }

  atualizarCartaoMedio = async (idBloco, cartao, horaProximaVisualizacao) => {

    cartao.acertoMedio += 1;

    this.atualizarCartaoMedioCommom(idBloco, cartao, horaProximaVisualizacao)
  }

  atualizarCartaoFacil = async (idBloco, cartao, horaProximaVisualizacao) => {

    cartao.acertoFacil += 1;

    this.atualizarCartaoMedioCommom(idBloco, cartao, horaProximaVisualizacao)
  }

  atualizarCartaoMedioCommom = async (idBloco, cartao, horaProximaVisualizacao) => {

    let date = new Date(`${cartao.dataVisualizacao} ${cartao.timeVisualizacao}`)

    date.setHours(horaProximaVisualizacao)

    cartao.dataVisualizacao = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`
    cartao.timeVisualizacao = `${date.getHours()}:${date.getMinutes()}`

    this.updateCartao(idBloco, cartao)
  }

  updateCartao = async (idbloco, cartao) => {

    let user = this.getUserCorrent()

    cartao.idEstudante = user.id

    // atualizar cartao
    let bloco = await httpService.onPost(`${this._host}/${this.pathCartao}-update/${cartao.id}`, cartao)
  }

  ordernarCartaoBaralho(listBlocoCartao) {
    return listBlocoCartao.sort((a, b) => {
      let aDate = new Date(`${a.dataVisualizacao} ${a.timeVisualizacao}`).getTime()
      let bDate = new Date(`${b.dataVisualizacao} ${b.timeVisualizacao}`).getTime()

      return aDate > bDate ? 1 : -1
    })
  }

  //endregion

  getEstudante = async idEstudante => { };
}

export default ServiceApi
