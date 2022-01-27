import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="center">
                
                    <div id="logo">
                        {/*Logo*/}

                <img src={logo} className="app-logo" alt="logotipo" />
                        <span id="brand">
                            <NavLink to="/"> <strong>Curso</strong>React </NavLink>
                            

                </span>
                    </div>

                    {/*Menú*/}
            <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/home" activeClassName="active">Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/formulario">Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to="/peliculas">Peliculas</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pruebas/victor">Pagina2</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="clearfix"></div>
                </div>

            </header>
        );
    }
}
export default Header;