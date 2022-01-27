import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
/*
import SeccionPruebas from './components/SeccionPruebas';
import Sidebar from './components/Sidebar';
import Slider from './components/Slider';
*/
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Footer from './components/Footer';

import Search from './components/Search';
import Article from './components/Article';

import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Home from './components/Home';
import Error from './components/Error';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';

class Router extends Component {
    render() {
        /*
        var nombre = "Víctor Robles";
        var buttonString = "Ir al blog";
        */
        return (

            <BrowserRouter>
                <Header />
                
                    {/*Configurar rutas y páginas*/}
                    <Switch>
                        <Route exact path="/home" component={Home}></Route>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/blog" component={Blog}></Route>
                        <Route exact path="/blog/articulo/:id" component={Article}></Route>
                        <Route exact path="/blog/crear" component={CreateArticle}></Route>
                        <Route exact path="/blog/editar/:id" component={EditArticle}></Route>
                        <Route exact path="/blog/busqueda/:search" component={Search}></Route>
                        <Route exact path="/redirect/:search" render={
                            (props) => {
                                var search = props.match.params.search;
                                return (
                                    <Redirect to={'/blog/busqueda/' + search}></Redirect>
                                )
                            }
                        }></Route>
                        <Route exact path="/formulario" component={Formulario}></Route>
                        <Route exact path="/peliculas" component={Peliculas}></Route>
                        <Route exact path="/segunda-ruta" component={MiComponente}></Route>
z
                        <Route exact path="/Seccion-Pruebas" component={SeccionPruebas}></Route>

                        <Route exact path="/pagina-1" render={() => (
                            <section id="content">
                                <h1>Hola desde la página 1</h1>
                                <MiComponente saludo="Hola amigo"></MiComponente>
                            </section>

                        )} />
                        <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {
                            var nombre = props.match.params.nombre;
                            var apellidos = props.match.params.apellidos;

                            return (
                                <section id="content">
                                    <h2 className="subheader">Página de pruebas</h2>
                                    { nombre && apellidos ? (
                                        <h3>{nombre + ' ' + apellidos}</h3>
                                    ) : (
                                        <h3>{nombre}</h3>
                                    )
                                    }
                                </section>

                            )
                        }} />

                        <Route component={Error} />
                    </Switch>
                    {/*<Peliculas/>*/}
                
                
                <Footer />
            </BrowserRouter>
        );
    }
}
export default Router;