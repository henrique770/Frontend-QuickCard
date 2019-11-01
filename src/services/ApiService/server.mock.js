const uuidv1 = require('uuid/v1');
const dbMock = require('./MockDAO');

class ServiceApi {

  constructor() {
    console.log('Init service mock')
    if (this.getDAO() == null) {

      localStorage.setItem('dbMock', JSON.stringify(dbMock.default))
    }
  }

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
   * Recuperar dbDAO
   */
  getDAO = () => {
    let dao = localStorage.getItem('dbMock');

    return JSON.parse(dao);
  }

  getUserCorrent = () => JSON.parse(localStorage.getItem('user'))
  updateUserCorrent = (user) => localStorage.setItem('user', JSON.stringify(user))

  //#region


  /**
   * Atualizar um item do db
   * @param item Estudante entity
   */
  updateDAO = (estudante) => {

    let db = this.getDAO()

    if (db == null) {
      db = []
      db.push(estudante)
    }
    else {
      let itemBase = db.find(e => e._id = estudante._id)
      let indexITem = db.indexOf(itemBase)

      db.slice(indexITem, 1)
      db.push(estudante)
    }


    localStorage.setItem('dbMock', JSON.stringify(db))
  }

  /**
   * Login na base
   */
  login = async (user, senha) => {

    let base = this.getDAO()

    if (base != null) {

      console.log(base)

      let users = [...base]

      let userBase = users.find(e => e.email == user && e.senha == senha)

      if (userBase) {

        localStorage.setItem('token', userBase.jwttoken);
        localStorage.setItem('user', JSON.stringify(userBase));
        localStorage.setItem('userName', userBase.nome);

        return true
      }
      return false
    }
    alert('Nenhum elemento na base')
    return false
  }

  /**
   * @example estudanteModel : {
    *   "email" : "string",
    *   "nome" : "string",
    *   "senha": "string"
    * }
    */
  estudanteCreated = async (estudanteModel) => {
    estudanteModel._id = uuidv1()
    estudanteModel.valid = true
    this.updateDAO(estudanteModel)
    return estudanteModel
  }

  //#region BLOCO CARTAO | BARALHO

  getBlocoCartao = async => {

    let userCorrent = this.getUserCorrent()

    return userCorrent.blocoCartao;

  }


  getBlocoCartaoById = () => {

  }


  addBlocoCartao = async (baralho) => {
    console.log('adicionado bloco cartao')

    baralho._id = uuidv1()
    baralho.valid = true

    let userCorrent = this.getUserCorrent()

    if (userCorrent.blocoCartao == null)
      userCorrent.blocoCartao = []

    userCorrent.blocoCartao.push(baralho);
    this.updateUserCorrent(userCorrent)
    this.updateDAO(userCorrent)

    return true
  }

  //#endregion

  getEstudante = async idEstudante => {

  }

  //#endregion

  //#region


  getCartao(idBlocoCartao) {

    let user = this.getUserCorrent()
    let bloco = user.blocoCartao.find(e => e._id == idBlocoCartao)

    let listaOrdernada = this.ordernarCartaoBaralho(bloco.listBlocoCartao)

    let i =listaOrdernada.length > 7 ? 7 : listaOrdernada.length

    let iRandom = Math.floor(Math.random() * i)
    let cartao = listaOrdernada[iRandom]

    cartao.nomeBloco = bloco.nomeBloco
    return cartao
  }

  ordernarCartaoBaralho(listBlocoCartao) {
    return listBlocoCartao.sort(( a , b ) => {
        let aDate = new Date(`${a.dataVisualizacao} ${a.timeVisualizacao}`).getTime()
        let bDate = new Date(`${b.dataVisualizacao} ${b.timeVisualizacao}`).getTime()

        return aDate > bDate ? 1 : -1
     })
  }

  //#endregion

}

export default ServiceApi
