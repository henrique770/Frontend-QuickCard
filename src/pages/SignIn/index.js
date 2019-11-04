import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import EstudanteService from '../../services/estudante.service';
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

    const result = await ServiceApi.login(data.username, data.password);
    console.log(result)

    if (result.status == "ok") {

      setRedirectCard(true);
      return false;
    }

    alert('login falha!');
    return false;
  }


  if(redirectCard) {
    return <Redirect to="/dashboard" />
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
