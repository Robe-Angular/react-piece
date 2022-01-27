import React, { Component } from 'react';
import MiComponente from './MiComponente';


class SeccionPruebas extends Component {

    contador = 0;

    /*
    constructor (props){
        super(props);
        this.state = {
            contador: 0
        };
    }
    */

    state = {
        contador: 0
    };

    sumar = (e) => {
        //this.contador++;
        //this.state.contador = this.state.contador + 1;
        this.setState({
            contador: (this.state.contador + 1)
        });
        console.log(this.state.contador);
    }
    restar = (e) => {
        //this.contador--;
        //this.state.contador = this.state.contador - 1;
        this.setState({
            contador: (this.state.contador - 1)
        });

    }

    HolaMundo(nombre, edad) {
        var presentacion = (
          <div>
            <h2>Hola, soy </h2>{nombre}
            <h3>Tengo {edad} años</h3>
          </div>
        );
        return presentacion;
    }
    render() {
        
        var nombre = "Víctor Robles";
        
        return (
            <section id="content">
                {nombre}
                <h2 className="subheader">Últimos artículos</h2>
                <p>
                    Hola bienvenido al curso de React de Víctor Robles Web
                </p>
                <h2 className="subheader">Funciones y JSX básico</h2>
                {this.HolaMundo('Víctor Robles', 15)}
                
                <h2 className="subheader">Componentes</h2>
                <section className="componentes">
                    <MiComponente />
                </section>
                <h2 className="subheader">Estado</h2>
                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}/>
                    <input type="button" value="Restar" onClick={this.restar}/>
                </p>
            </section>
        );
    }
}

export default SeccionPruebas;