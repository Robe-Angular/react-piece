import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Slider extends Component {
    render() {
        return (
            <React.Fragment>
                {   this.props.btn ? (
                    <div id="slider" className="slider-big">
                        <h1>{this.props.title}</h1>

                        <Link to="/blog" className="btn-white"> {this.props.btn} </Link>


                    </div>
                ):(
                    <div id="slider" className="slider-small">
                        <h1>{this.props.title}</h1>

                    </div>
                )
                }
            </React.Fragment>
        );
    }
}

export default Slider;