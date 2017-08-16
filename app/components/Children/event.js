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
                desc: res.data.events[i].description.text,
                url: res.data.events[i].url,
                imgUrl: res.data.events[i].logo.original.url
            });
            console.log("setState has fired");
        });
    }

	render(){
		return(
			<div className="col-sm-6 col-md-6">
            	<div className="single_news">
                	<div className="img_news">
                		<img src={this.state.imgUrl} alt="Blog Image" />
                	</div>
                    <div className="news">
                       	<div className="topic">
                           	<div className="title_topic">
                                <h4><a href={this.state.url}>{this.state.name}</a></h4>
                                <p className="date pull-left"><i className="fa fa-calendar color"></i> 26 feb 2017</p>
                                <p className="author_name pull-left"><i className="fa fa-user color"></i> By Admin</p>
                            </div>
                            <div className="clearfix"></div>
                            <p className="mrg_top20 text-muted">{this.state.desc}</p>
                        </div>

                        <div className="topic_info mrg_top40 text-center">
                            <div className="col-xs-4 col-sm-4 col-md-4">
                               	<p className="like"><i className="fa fa-heart"></i> 30</p>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4">
                                <p className="comment"><i className="fa fa-comment"></i> 60</p>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4">
                                <p className="viwes"><i className="fa fa-eye"></i> 190</p>
                            </div>
                        </div>
                            <div className="clearfix"></div>
                    </div>
                </div>
            </div>
			);
	}
}



module.exports = Event;