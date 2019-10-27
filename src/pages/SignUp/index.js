import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import EstudanteService from '~/services/estudante.service';

import logo from '~/assets/logo_quickcard.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  async function handleSubmit(data) {
    const user = await EstudanteService.estudanteCreated({
      nome: data.name,
      email: data.email,
      senha: data.password,
    });

    if (user.valid) {
      window.location.reload();
      return;
    }

    alert('Erro não foi possivel salvar o usuario');
  }
  return (
    <>
      <img src={logo} alt="QuickCard" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
