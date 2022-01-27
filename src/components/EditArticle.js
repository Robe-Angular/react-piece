import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import Global from '../Global';
import Sidebar from './Sidebar';
import Slider from './Slider';

//1. Tenemos que recoger el id del artículo a editar de la url
//2. Crear un método para sacar el objeto del backend
//3. Rellenar el formulario con esos datos
//4. Actualizar el objeto haciendo una petición al backend


class EditArticle extends Component {

    url = Global.url;
    articleId = null;
    titleRef = React.createRef();
    contentRef = React.createRef();

    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    constructor(props) {

        super(props);
        this.articleId = this.props.match.params.id;
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido',
                alpha_num_space: 'Este campo debe contener sólo letras sin tilde, números y espacios :('
            }
        });



    }

    componentDidMount = () => {
        this.getArticle(this.articleId);
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }

        });
        this.validator.showMessages();
        this.forceUpdate();
    }

    saveArticle = (e) => {
        e.preventDefault();

        //Rellenar state con formulario
        this.changeState();

        if (this.validator.allValid()) {
            //Hacer una petición http por Post para guardar el artículo
            axios.put(this.url + 'article/' + this.articleId, this.state.article)
                .then(res => {
                    if (res.data.articleUpdated) {
                        this.setState({
                            article: res.data.articleUpdated,
                            status: 'waiting'
                        });
                        swal(
                            'Artículo creado',
                            'El artículo ha sido creado correctamente',
                            'success'
                        );
                        //Subir la imagen
                        if (this.state.selectedFile !== null) {
                            //Sacar el id del artículo guardado
                            var articleId = this.state.article._id;

                            //Form data y guardar fichero
                            const formData = new FormData();

                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            );

                            //Petición Ajax
                            axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        });
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        });
                                    }
                                });
                        } else {
                            this.setState({
                                article: res.data.article,
                                status: 'success'
                            });
                        }

                    } else {
                        this.setState({
                            status: 'failed'
                        });
                    }
                });
        } else {
            this.setState({
                status: 'failed'
            });

            this.validator.showMessages();
            this.forceUpdate();
            swal(
                'Artículo no creado',
                'El artículo no ha sido creado correctamente',
                'error'
            );
        }

    }
    getArticle = (id) => {
        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article
                });
            });
    }
    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });

        console.log(this.state);
    }

    render() {
        if (this.state.status === 'success') {
            return <Redirect to="/blog"></Redirect>
        }
        var article = this.state.article;
        return (
            <div className="center">
                <Slider
                    title={this.state.article.title}
                ></Slider>
                <section id="content">
                    {this.state.article.title &&

                        <form className="mid-form" onSubmit={this.saveArticle}>
                            <div className="form-group">
                                <label htmlFor="title">Título</label>
                                <input type="text" name="title" defaultValue={article.title} ref={this.titleRef} onChange={this.changeState} />
                                {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea name="content" ref={this.contentRef} defaultValue={article.content} onChange={this.changeState} ></textarea>
                                {this.validator.message('content', this.state.article.content, 'required')}
                            </div>

                            <div className="form-group">
                                <label htmlFor="file0">imagen</label>
                                <input type="file" name="file0" onChange={this.fileChange} />
                            </div>

                            <input type="submit" value="Guardar" className="btn btn-success" />
                        </form>
                    }
                    {!this.state.article.title && 
                        <h2>Cargando...</h2>
                    }
                </section>
                <Sidebar></Sidebar>
            </div>
        )
    }
}
export default EditArticle;