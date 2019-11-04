const tratarErroRequest = err => {
  console.warn(err);
  return err;
};

const tratarResponse = response => {
  if (response.status == 204) {
    console.warn(`Response 204 from url ${response.url}`);
    return null;
  }

  if (response.status == 401) {
    console.warn(`Response 401 from url ${response.url}`);
    return null;
  }

  return response.json();
};

const getAuthorization = headerAuthorization => {
  const token = localStorage.getItem('token');

  return headerAuthorization.replace('null', token).replace('_TOKEN_', token);
};

const onPost = async function(url, body = {}) {
  return fetch(url, {
    headers: {
      Authorization: getAuthorization('Bearer _TOKEN_'),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then(result => tratarResponse(result))
    .catch(err => tratarErroRequest(err));
};

const onPostNotAuthorization = async function(url, body = {}) {
  return fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then(result => tratarResponse(result))
    .catch(err => tratarErroRequest(err));
};

const onGet = async function(url) {
  return fetch(url, {
    headers: {
      Authorization: getAuthorization('Bearer _TOKEN_'),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
    .then(result => tratarResponse(result))
    .catch(err => tratarErroRequest(err));
};

const onPut = async function(url, body = {}) {
  return fetch(url, {
    headers: {
      Authorization: getAuthorization('Bearer _TOKEN_'),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(body),
  })
    .then(result => tratarResponse(result))
    .catch(err => tratarErroRequest(err));
};

const onDelete = async function(url, body = {}) {
  return fetch(url, {
    headers: {
      Authorization: getAuthorization('Bearer _TOKEN_'),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
    body: JSON.stringify(body),
  })
    .then(result => tratarResponse(result))
    .catch(err => tratarErroRequest(err));
};

window.httpService = { onPost, onGet, onPut, onDelete };

module.exports = { onPost, onGet, onPut, onDelete , onPostNotAuthorization };
