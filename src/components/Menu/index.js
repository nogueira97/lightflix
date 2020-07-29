import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../Button';
//import ButtonLink from './ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className='logo' src={logo} alt="Logo do Site"/>
            </a>
            
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>


        </nav>
    );
}

export default Menu;