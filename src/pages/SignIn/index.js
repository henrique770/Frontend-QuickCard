import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import ServiceApi from '../../services/ApiService/api.service';

// import { signInRequest } from '~/store/modules/auth/actions';

import logo from '../../assets/logo_quickcard.svg';
import RouteWrapper from '../../routes/Route';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {

  let [redirectCard , setRedirectCard ] = useState(false)

  //  const dispatch = useDispatch();
  // async function handleSubmit({ email, senha }) {
  //    dispatch(signInRequest(email, senha));
  //   console.log(
  //     await Http({
  //       username: email,
  //       password: senha,
  //     })
  //   );
  //   console.log(senha, email);
  // }

  async function handleSubmit(data) {
    console.log(`Login start`)

    ServiceApi.login(data.username, data.password)
              .then( response => {
                if (response.status == "ok") {

                  console.log(response)
                  window.location.reload()
                  return false;
                }
              })
              .catch( err => {
                console.log(err)

                alert('login falha!');
              })
  
    return false;
  }

  return (
    <>
      <div>
        <img src={logo} alt="QuickCard" />

        <Form onSubmit={handleSubmit}>
          <Input name="username" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />
          <button type="submit">Acessar</button>
          <Link to="/cadastro">Criar conta gratuita</Link>
        </Form>
      </div>
    </>
  );
}
