import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Search extends Component {

    state = {
        articles: {},
        status: 'failed'
    }

    render() {
        var search = this.props.match.params.search;
        
        return (
            <React.Fragment>
                <Slider
                    title={'Búsqueda ' + search}

                />
                <div className="center">
                    <div id="content" >
                        {/**Listado de Artículos*/}
                        <Articles
                            search={search}
                        ></Articles>
                    </div>
                    <Sidebar/>
                </div>
                
            </React.Fragment>
        )
    }
}
export default Search;