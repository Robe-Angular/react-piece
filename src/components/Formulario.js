import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {
    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef();

    state = {
        user: {}
    }

    recibirFormulario = (e) => {
        console.log(e);
        if(e.type !== 'change'){
            e.preventDefault();
        }
            
        

        var genero = 'hombre';
        if(this.generoHombreRef.current.checked){
            genero = this.generoHombreRef.current.value;
        }else if(this.generoMujerRef.current.checked){
            genero = this.generoMujerRef.current.value;
        }else{
            genero = this.generoOtroRef.current.value;
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        }
        this.setState({
            user: user
        });       
    }

    render() {
        if(this.state.user){
            var user = this.state.user;
        }
        return (
            <React.Fragment>
                <Slider
                    title='Formulario'

                />
                <div className="center">
                    <div id="content" >
                        <h1 className="subheader">Formulario</h1>
                        {/**Mostrar Datos del formulario */}
                        {(this.state.user.nombre || this.state.user.apellidos || this.state.user.genero) ?(
                            <div>
                                <p>Nombre: <strong>{user.nombre}</strong></p>
                                <p>Apellidos: <strong>{user.apellidos}</strong></p>
                                <p>Bio: <strong>{user.bio}</strong></p>
                                <p>Género: <strong>{user.genero}</strong></p>
                            </div>
                        ):(
                            <div></div>
                        )
                        }
                        {/**Crearformulario */}
                        <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidosRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="bio">Biografía</label>
                                <textarea type="text" name="bio" ref={this.bioRef}></textarea>
                            </div>
                            <div className="form-group radiobuttons">
                                <label htmlFor="genero">Género</label>

                                <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef}/> Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef}/> Mujer
                                <input type="radio" name="genero" value="otro" ref={this.generoOtroRef}/> otro


                            </div>
                            <div className="clearfix"></div>
                            <input type="submit" value="enviar" className="btn btn-success" />



                        </form>
                    </div>
                    <Sidebar />
                </div>

            </React.Fragment>
        )
    }
}
export default Formulario;