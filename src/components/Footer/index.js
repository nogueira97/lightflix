import React from 'react';
import { FooterBase } from './styles';
import logo from '../../assets/img/logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className='logo' src={logo} alt="Logo Site" />
      </a>
      <p>
        Orgulhosamente criado pela
        {' '}
        <a href="https://www.alura.com.br/">
          X Startup's.
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
