import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { post } from '~/services/httpService';

// import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo_quickcard.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

async function Http(data) {
  return post('http://177.41.135.107:8080/authenticate', data);
}

export default function SignIn() {
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
    const response = await Http(data);
    console.log(response);

    if (response.jwttoken != null) {
      localStorage.setItem('tokenObject', response);
      localStorage.setItem('token', response.jwttoken);
    }

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
