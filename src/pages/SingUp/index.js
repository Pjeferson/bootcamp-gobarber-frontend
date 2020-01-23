import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

import logo from '~/assets/logo.svg';

export default function SingUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form action="">
        <input placeholder="Nome" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />
        <button type="submit">Criar conta</button>
        <Link to="/">Login</Link>
      </form>
    </>
  );
}
