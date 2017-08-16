// Include React as a dependency
var React = require("react");
// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");

// Create the Search component
var Services = React.createClass({
  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {
    return (
      <div className="main-container">
        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <h1>Services</h1>
            <div className="single_news">
                    <div className="img_news"> <img src={"../img/dog-grooming.jpg"} alt="Blog Image"/> </div>
                    <div className="news">
                        <div className="topic">
                            <div className="title_topic">                                     
                            </div>
                            <div className="clearfix"></div>
                            <p className="mrg_top20 text-muted">Grooming Services</p>
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
    );
  }
});
// Export the module back to the route
module.exports = Services;

