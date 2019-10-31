<<<<<<< HEAD
import * as httpService from '..//httpService';
=======
import * as httpService from '../httpService';
>>>>>>> 73a83a211df102fefda7c16158988860ec386483

class ServiceApi {
  pathBlocoCartao = 'blocoCartaoMemoria';

  pathAuthenticate = 'authenticate';

  _host = 'http://186.213.213.162:8080';

<<<<<<< HEAD
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

    getUserCorrent = () => JSON.parse(localStorage.getItem('user'))
    updateUserCorrent = (user) => localStorage.setItem('user', JSON.stringify(user))


    /**
     * @param user usuario email
     * @param senha senha do usuario
     * @example login( 'user' , 'senha')
     */
    login = async (user, senha) => {
        const userToken = await httpService.onPost(
            `${this._host}/${this.pathAuthenticate}`,
            { username: user, password: senha }
        );

        if (userToken) {
            localStorage.setItem('token', userToken.jwttoken);
            localStorage.setItem('user', JSON.stringify(userToken));
            localStorage.setItem('userName', userToken.nome);

            return true;
        }

        return false;
    };

    /**
      * @param estudanteModel
      * @example estudanteModel : {
      *   "email" : "string",
      *   "nome" : "string",
      *   "senha": "string"
      * }
      */
    estudanteCreated = async (estudanteModel) => {
        return httpService.onPost(`${this._url}`, estudanteModel);
    }
=======
  _path = '/estudante';
>>>>>>> 73a83a211df102fefda7c16158988860ec386483

  _url = `${this._host}${this._path}`;

  constructor() {}

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

  getUserCorrent = () => JSON.parse(localStorage.getItem('user'));

  updateUserCorrent = user =>
    localStorage.setItem('user', JSON.stringify(user));

  /**
   * @param user usuario email
   * @param senha senha do usuario
   * @example login( 'user' , 'senha')
   */
  login = async (user, senha) => {
    const userToken = await httpService.onPost(
      `${this._host}/${this.pathAuthenticate}`,
      { username: user, password: senha }
    );

    if (userToken) {
      localStorage.setItem('token', userToken.jwttoken);
      localStorage.setItem('user', JSON.stringify(userToken));
      // localStorage.setItem('userName', userBase.nome); no-undef userBase

      return true;
    }

    return false;
  };

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
    const idEstudante = this.getUserCorrent()._id;

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
    const idEstudante = this.getUserCorrent()._id;
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
    const idEstudante = this.getUserCorrent()._id;

    return httpService.onPost(
      `${this._host}/${this.pathBlocoCartao}/${idEstudante}`,
      blocoCartaoModel
    );
  };

  // #endregion

  getEstudante = async idEstudante => {};
}

<<<<<<< HEAD
export default ServiceApi
=======
export default ServiceApi;
>>>>>>> 73a83a211df102fefda7c16158988860ec386483
