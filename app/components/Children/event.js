import React from 'react';
import { render } from 'react-dom';

import axios from "../../utils/axios";

class Event extends React.Component{

    constructor(){
        super();
        this.state = ({
            name: '',
            desc: '',
            url: '',
            imgUrl: ''
        });
    }

    componentDidMount(){
        console.log("componentDidMount fired inside event component");
        this.getArticle();
    }

    getArticle(){
        axios.getArticles().then((res) =>{
            var i = Math.floor(Math.random()*50);
            console.log(res.data.events[i]);
            this.setState({
                name: res.data.events[i].name.text,
                desc: res.data.events[i].description.text.substring(0, 300)+' . . .',
                url: res.data.events[i].url,
                imgUrl: res.data.events[i].logo.original.url
            });
            console.log("setState has fired");
        });
    }


	render(){
		return(
            <div>
                <div className="row mt-5 wow fadeIn" data-wow-delay="0.2s">
                    <div className="col-lg-7">
                        <div className="view overlay hm-white-light z-depth-1-half">
                            <img src={this.state.imgUrl} className="img-fluid" alt=""/>
                            <div className="mask"></div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <a href={this.state.url}><h2 className="post-title font-bold">{this.state.name}</h2></a>
                        <p className="my-4">{this.state.desc}</p>
                        <div className="read-more">
                            <a href={this.state.url} className="btn btn-primary">Learn more</a>
                        </div>
                    </div>
                </div>
                <hr class="extra-margin my-5"/>
            </div>
		);
	}
}



module.exports = Event;