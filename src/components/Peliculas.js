import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';


class Peliculas extends Component {
    state = {};

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        var random = Math.floor(Math.random() * 3);
        peliculas[random].title = "Batman Begins";
        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula, indice) => {
        console.log("Favorita Marcada:" + pelicula.title + indice);
        this.setState({
            favorita: pelicula
        })

    }

    componentWillMount() {
        //alert('Se va a montar el componente');
        this.setState({
            peliculas: [
                { title: 'Batman vs Superman', image: 'https://i.blogs.es/503736/batman-v-superman-la-pelicula-2016-imagen-blogdecine/1366_2000.jpg' },
                { title: 'Gran Torino', image: 'https://assets.puzzlefactory.pl/puzzle/265/858/original.jpg' },
                { title: 'Looper', image: 'https://es.web.img3.acsta.net/medias/nmedia/18/92/47/73/20250845.jpg' }
            ],
            nombre: 'Víctor Robles',
            favorita: {}
        });
    }
    componentDidMount() {
        //alert('Componente Montado');
    }
    componentWillUnmount() {
        //alert('Me voy a desmontar');
    }

    render() {
        /*
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        };
        */

        var favorita;

        if (this.state.favorita.title) {
            favorita = (
                <p className="favorita" style={{
                    background: 'green',
                    color: 'white',
                    padding: '10px'
                }}>
                    <strong>La película favorita es: </strong>
                    <span>
                        {this.state.favorita.title}
                    </span>
                </p>
            );
        } else {
            favorita = (
                <p>No hay Película favorita :)</p>
            );
        }

        return (
            <React.Fragment>
                <Slider
                    title='Peliculas'

                />
                <div className="center">
                    <div id="content" className="peliculas">
                        <h2 className="subheader">Soy el componente de Películas</h2>

                        <p>Selección de las películas favoritas de: {this.state.nombre}</p>

                        <p><button onClick={this.cambiarTitulo}>Cambiar título</button></p>

                        {this.state.favorita.title ? (
                            <p className="favorita" style={{
                                background: 'green',
                                color: 'white',
                                padding: '10px'
                            }}>
                                <strong>La película favorita es: </strong>
                                <span>
                                    {this.state.favorita.title}
                                </span>
                            </p>
                        ) : (
                            <p>No hay Película favorita :)</p>
                        )}
                        {favorita}
                        {/*Crear componente Película*/}
                        <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (
                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            indice={i}
                                            marcarFavorita={this.favorita}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Sidebar/>
                </div>
            </React.Fragment>

        );
    }
}

export default Peliculas;