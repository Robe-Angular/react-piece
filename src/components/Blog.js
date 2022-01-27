import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Blog extends Component {

    state = {
        articles: {},
        status: 'failed'
    }

    render() {
        
        return (
            <React.Fragment>
                <Slider
                    title='Blog'

                />
                <div className="center">
                    <div id="content" >
                        {/**Listado de Artículos*/}
                        <Articles></Articles>
                    </div>
                    <Sidebar 
                        blog="true"
                    />
                </div>
                
            </React.Fragment>
        )
    }
}
export default Blog;