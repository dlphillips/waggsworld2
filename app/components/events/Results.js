// Include React as a dependency
var React = require("react");


// Results Component Declaration
var Results = React.createClass({

  // Here we will save states for the contents we save
  getInitialState: function() {
    return {
      name: "",
      url: "",
      display_phone: ""
    };
  },

  renderArticles: function() {
    console.log(this.props.results.data.data.events);
    return this.props.results.data.data.events.map(function(mapData, index) {
      return (
        <div key={index}>
            <div>
              <div className="row mt-5 wow fadeIn" data-wow-delay="0.2s">
                  <div className="col-lg-5">
                      <div className="view overlay hm-white-light z-depth-1-half">
                          <img src={mapData.logo.original.url} className="img-fluid" alt=""/>
                          <div className="mask"></div>
                      </div>
                  </div>

                  <div className="col-lg-7">
                      <a href={mapData.url}><h2 className="post-title font-bold">{mapData.name.text}</h2></a>
                      <p className="my-4">{mapData.description.text}</p>
                      <div className="read-more">
                          <a href={mapData.url} className="btn btn-primary">Learn more</a>
                      </div>
                  </div>
              </div>
              <hr className="extra-margin my-5"/>
            </div>
        </div>
      );
    }.bind(this));
},


  renderContainer: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title text-center">
                  <strong>
                    <i className="fa fa-paw"></i>
                    Results
                  </strong>
                </h3>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderArticles()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );


  },

  render: function() {
    var res = this.props.results;
    // console.log(res);
    // console.log(this.props.results);
    // If we have no articles, render this HTML
    if (!this.props.results.data) {
      return (
        <li className="list-group-item">
          <h3>
            <span>
              <em>Select search terms to begin...</em>
            </span>
          </h3>
        </li>
      );
    }

    return this.renderContainer();
  }
});

// Export the module back to the route
module.exports = Results;
