// Include React as a dependency
var React = require("react");
// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");

// Create the Search component
var WaggDates = React.createClass({
  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {
    return (
      <div className="main-container">
        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <h1>WaggDates</h1>
        <div className="col-sm-6 col-md-6">
	        <div className="single_news">
	            <div className="img_news"> <img src={"../img/jeremy-kovac-149295.jpg"} alt="Blog Image"/> </div>
	            <div className="news">
	                <div className="topic">
	                    <div className="title_topic">                                               
	                        <p className="date pull-left"><i className="fa fa-calendar color"></i> 22 August 2017</p>                                              
	                    </div>
	                    <div className="clearfix"></div>
	                    <p className="mrg_top20 text-muted">Pug Date!</p>
	                </div>
	                <div className="topic_info mrg_top40 text-center">
	                    <div className="col-xs-4 col-sm-4 col-md-4">
	                        <p className="like"><i className="fa fa-heart"></i> 170</p>
	                    </div>
	                    <div className="col-xs-4 col-sm-4 col-md-4">
	                        <p className="comment"><i className="fa fa-comment"></i> 120</p>
	                    </div>
	                    <div className="col-xs-4 col-sm-4 col-md-4">
	                        <p className="viwes"><i className="fa fa-eye"></i> 300</p>
	                    </div>
	                </div>
	                <div className="clearfix"></div>
	            </div>
	        </div>
            </div>
            <div className="col-sm-6 col-md-6">
                <div className="single_news">
                    <div className="img_news"> <img src={"../img/mattias-diesel-281546.jpg"} alt="Blog Image"/> </div>
                    <div className="news">
                        <div className="topic">
                            <div className="title_topic">
                                <p className="date pull-left"><i className="fa fa-calendar color"></i> 22 Sept 2017</p>
                            </div>
                            <div className="clearfix"></div>
                            <p className="mrg_top20 text-muted">Beer Paw</p>
                        </div>
                        <div className="topic_info mrg_top40 text-center">
                            <div className="col-xs-4 col-sm-4 col-md-4">
                                <p className="like"><i className="fa fa-heart"></i> 170</p>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4">
                                <p className="comment"><i className="fa fa-comment"></i> 120</p>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4">
                                <p className="viwes"><i className="fa fa-eye"></i> 300</p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-6">
                <div className="single_news">
                    <div className="img_news"> <img src={"../img/nathalia-bariani-100947.jpg"} alt="Blog Image"/> </div>
                    <div className="news">
                        <div className="topic">
                            <div className="title_topic">
                                <p className="date pull-left"><i className="fa fa-calendar color"></i> 27 Sept 2017</p>
                            </div>
                            <div className="clearfix"></div>
                            <p className="mrg_top20 text-muted">Senior Waggs</p>
                        </div>
                        <div className="topic_info mrg_top40 text-center">
                            <div className="col-xs-4 col-sm-4 col-md-4">
                                <p className="like"><i className="fa fa-heart"></i> 170</p>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4">
                                <p className="comment"><i className="fa fa-comment"></i> 120</p>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4">
                                <p className="viwes"><i className="fa fa-eye"></i> 300</p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-6">
                <div className="single_news">
                    <div className="img_news"> <img src={"../img/andrew-branch-135489.jpg"} alt="Blog Image"/> </div>
                    <div className="news">
                        <div className="topic">
                            <div className="title_topic">
                                <p className="date pull-left"><i className="fa fa-calendar color"></i> 2 Oct 2017</p>
                            </div>
                            <div className="clearfix"></div>
                            <p className="mrg_top20 text-muted">WaggHearts</p>
                        </div>
                        <div className="topic_info mrg_top40 text-center">
                            <div className="col-xs-4 col-sm-4 col-md-4">
                                <p className="like"><i className="fa fa-heart"></i> 170</p>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4">
                                <p className="comment"><i className="fa fa-comment"></i> 120</p>
                            </div>
                            <div className="col-xs-4 col-sm-4 col-md-4">
                                <p className="viwes"><i className="fa fa-eye"></i> 300</p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
        
    );
  }
});
// Export the module back to the route
module.exports = WaggDates;