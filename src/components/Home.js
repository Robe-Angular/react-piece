import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Home extends Component {
    render() {
        var buttonString = "Ir al Blog"
        return (
            <React.Fragment>
                <Slider
                    title='Bienvenido al Curso de Angular on Víctor Robles de victorroblesweb.es'
                    btn={buttonString}
                />
                <div className="center">
                    <div id="content" >
                        <h2 className="subheader">Ultimos artículos</h2>
                        <Articles
                            home='true'
                        ></Articles>
                    </div>
                    <Sidebar />
                </div>{/*End Div Center*/}
            </React.Fragment>
        )
    }
}
export default Home;