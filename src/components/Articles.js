import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';
import Global from '../Global';
import ImageDefault from '../assets/images/default.jpg';
class Articles extends Component {

    url = Global.url;

    state = {
        articles: [],
        status: null
    }
    componentDidMount() {
        var home = this.props.home;
        var search = this.props.search;
        if(home === 'true'){
            this.getLastArticles();
        }else if(search && search !== null && search !== undefined){
            this.getArticlesBySearch(search);
        }
        else{
            this.getArticles();
        }
        
    }
    getArticlesBySearch = (search) => {
        axios.get(this.url + 'search/' + search)
            .then(res => {
                this.setState({
                    articles: [res.data.articles],
                    status: 'success'
                });
            })
            .catch(err => {
                this.setState({
                    articles: [],
                    status: 'success'
                });
            });
    }

    getLastArticles = () => {
        axios.get(this.url + 'articles/1')
            .then(res => {
                this.setState({
                    articles: [res.data.articles],
                    status: 'success'
                });

            });
    }

    getArticles = () => {
        axios.get(this.url + 'articles')
            .then(res => {
                this.setState({
                    articles: [res.data.articles],
                    status: 'success'
                });

            });
    }
    render() {
        if (this.state.articles.length >= 1) {
            var listArticles = this.state.articles[0].map((article, index) => {
                return (
                    <article key={article._id} className="article-item">
                        <div className="image-wrap">
                            {article.image !== null ? (
                                <img src={this.url + 'get-image/' + article.image} alt="article.title" />
                            ) : (
                                <img src={ImageDefault} alt="article.title" />
                            )

                            }
                            
                        </div>
                        <h2>{article.title}</h2>
                        <span className="date">
                            <Moment fromNow>
                            {article.date}
                            </Moment>
                            
                    </span>
                        <Link to={'/blog/articulo/' + article._id}>Leer M??s</Link>
                        <div className="clearfix"></div>
                    </article>
                )
            })
            return (
                <div id="articles">
                    {listArticles}
                </div>
            );
        } else if (this.state.articles.length === 0 && this.state.status === 'success') {
            return (
                <div id="articles">
                    <h2 className="subheader">No hay art??culos para mostrar</h2>
                    <p>Todav??a no hay contenido en esta secci??n</p>
                </div>
            );
        } else {
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando...</h2>
                    <p>Espere mientras carga el contenido</p>
                </div>
            )
        }

    }
}
export default Articles;