import React, {Component} from 'react';

class MiComponente extends Component{
    render(){
        let receta ={
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamón cocido'],
            calorias: 400
        };
        return(
            <React.Fragment>
                <section id="content">
                
                <h1>{receta.nombre}</h1>
                <h2>{'Calorías: ' + receta.calorias}</h2>
                
                    
                
                
                <ol>
                {
                        receta.ingredientes.map((ingrediente, i) => {
                            return (
                                <li key={i}>{ingrediente}</li>
                            );
                        })
                }
                </ol>
                <hr/>
                {this.props.saludo &&
                    <div id="saludo-prob">
                    <h1>Desde una prob</h1>
                    <h3>{this.props.saludo}</h3>
                    </div>
                }         
                    
                </section>
                
                           
            </React.Fragment>
            
        );
    }
}
export default MiComponente;