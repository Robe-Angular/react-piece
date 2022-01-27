import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Global from '../Global';
import Slider from './Slider';
import Sidebar from './Sidebar';
import ImageDefault from '../assets/images/default.jpg';
import Moment from 'react-moment';
import 'moment/locale/es';

class Article extends Component {
    url = Global.url;
    state = {
        article: {},
        status: null
    };
    componentDidMount() {
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;
        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: 'success'
                });
            })
            .catch(err => {
                this.setState({
                    article: {},
                    status: 'success'
                });
            });
    }
    deleteArticle = (id) => {

        swal({
            title: "Estás seguro de borrar el artículo?",
            text: "Una vez borrado, no podrá recuperarse",
            icon: "warning",
            buttons: ['Cancelar',true],
            dangerMode: true,
        })
            .then((res) => {
                if (res) {
                    axios.delete(this.url + 'article/' + id)
                        .then(res => {
                            this.setState({
                                article: res.data.article,
                                status: 'deleted'
                            });
                            swal(
                                'Artículo borrado',
                                'El artículo ha sido borrado correctamente',
                                'success'
                            );
                        });
                } else {
                    swal("El artículo está a salvo");
                }
            });
        /*
        axios.delete(this.url + 'article/' + id)
        .then(res => {
            this.setState({
                article: res.data.article,
                status: 'deleted'
            });
            swal(
                'Artículo borrado',
                'El artículo ha sido borrasp correctamente',
                'success'
            );
        });
        */
    }

    render() {
        if (this.state.status === 'deleted') {
            return <Redirect to="/blog"></Redirect>
        }
        var article = this.state.article
        var title = article.title ? article.title : 'No hay artículo para mostrar';
        return (
            <React.Fragment>
                <Slider
                    title={title}

                />
                <div className="center">
                    <div id="content" >
                        <section id="content">
                            {article.title &&
                                <div id="article">
                                    <article className="article-item article-item-detail">

                                        <div className="image-wrap">

                                            {article.image !== null ? (
                                                <img src={this.url + 'get-image/' + article.image} alt="article.title" />
                                            ) : (
                                                <img src={ImageDefault} alt="article.title" />
                                            )

                                            }
                                        </div>

                                        <span className="date">
                                            <Moment fromNow>{article.date}</Moment>
                                        </span>
                                        <p>
                                            {article.content}
                                        </p>
                                        <button onClick={
                                            () => {
                                                this.deleteArticle(article._id)
                                            }
                                        } className="btn btn-danger">Eliminar</button>
                                        <Link to={"/blog/editar/" + article._id} className="btn btn-warning">Editar</Link>
                                        <div className="clearfix"></div>
                                    </article>
                                </div>
                            }
                            {!article.title && this.state.status === 'success' &&
                                <div id="article">
                                    <h2 className="subheader">El artículo no existe</h2>
                                    <p>Inténtalo de nuevo más tarde</p>
                                </div>
                            }
                            {this.state.status == null &&
                                <div id="article">
                                    <h2 className="subheader">Espere unos segundos</h2>
                                    <p>Cargando...</p>
                                </div>

                            }



                        </section>
                    </div>
                    <Sidebar />
                </div>

            </React.Fragment>
        )
    }
}

export default Article;