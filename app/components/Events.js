import React from 'react';
import { render } from 'react-dom';

import Event from "./Children/event";

class Events extends React.Component{

    constructor(){
        super();
    }

    render(){
        return (
            <div className="main-container container">
                <div className="row">
                    <section id="blog" className="section">

                        <div id="my_news" className="mrg_top80 row-eq-height">
                            <div className="row">
                                <Event/>
                                <Event/>
                                <Event/>
                                <Event/>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
    );
    }
}


// Export the module back to the route
module.exports = Events;
