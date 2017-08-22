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

  // This code handles the sending of the search terms to the parent Search component
  handleClick: function(item) {
    console.log("CLICKED");
    console.log(item);

    helpers.postSaved(item.headline.main, item.pub_date, item.web_url).then(function() {
      console.log(item.web_url);
    });
  },

  // A helper method for mapping through our articles and outputting some HTML
  renderArticles: function() {
    return this.props.results.data.map(function(mapData, index) {

      // Each article thus reperesents a list group item with a known index
      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{mapData.properties.name}</em>
              </span>
              <span className="btn-group pull-right">
                <a href={mapData.properties.url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View on Yelp!</button>
                </a>

                {/*
                  By using an arrow function callback to wrap this.handleClick,
                  we can pass in an article as an argument
                */}
              </span>
            </h3>
            <p>{mapData.properties.location}</p>
            <p>{mapData.properties.address1}</p>
            <p>{mapData.properties.city}, {mapData.properties.state} {mapData.properties.zip_code}</p>
            <p>{mapData.properties.display_phone}</p>
            <p>Yelp Rating: {mapData.properties.rating} stars</p>
          </li>

        </div>
      );

    }.bind(this));

  },

  // A helper method for rendering a container to hold all of our articles
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
    console.log(this.props.results);
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
    // If we have articles, return this.renderContainer() which in turn, returns all the articles
    return this.renderContainer();
  }
});

// Export the module back to the route
module.exports = Results;
