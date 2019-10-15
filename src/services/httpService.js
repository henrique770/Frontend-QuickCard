const headers = {
  headers: {
    Authorization: 'Bear _TOKEN_',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method: '',
  body: {},
};

const headersGET = {
  headers: {
    Authorization: 'Bear _TOKEN_',
    Accept: 'application/json',
  },
  method: 'GET',
};

const getAuthorization = headerAuthorization => {
  const token = localStorage.getItem('token');

  return headerAuthorization
    .replace('undefined', token)
    .replace('null', token)
    .replace('_TOKEN_', token);
};

const erroInterno = err => {
  if (err.ok) return err;

  return err;
};

const erroNotAuthorization = err => {
  console.log('Não autorizado!');
  return err;
};

const tratarErroRequest = err => {
  try {
    console.warn(err);
    const erros = [];
    erros['500'] = erroInterno;
    erros['401'] = erroNotAuthorization;

    erros[err.status](err);
  } catch (r) {
    console.log(r);
  }
};

const post = async function(url, body = {}) {
  headers.method = 'POST';
  headers.headers.Authorization = getAuthorization(
    headers.headers.Authorization
  );
  headers.body = JSON.stringify(body);

  return fetch(url, headers)
    .then(result => result.json())
    .catch(err => tratarErroRequest(err));
};

const get = async function(url) {
  headersGET.headers.Authorization = getAuthorization(
    headers.headers.Authorization
  );

  const heder = {
    headers: {
      Authorization: getAuthorization('Bear null'),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  console.log(heder);

  return fetch(url, heder)
    .then(result => result.json())
    .catch(err => tratarErroRequest(err));
};

window.htppService = { post, get };

module.exports = { post, get };
