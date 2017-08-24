// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var Query = require("./petFinder/Query");
var Results = require("./petFinder/Results");

var petHelpers = require("../utils/petHelpers");

const imgStyle = {
  marginTop: "80px",
  marginBottom: "20px",
  height: "50%",
  width: "50%"
};

// Create the Search component
var Search = React.createClass({

  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  getInitialState: function() {
    return {
      results: {}
    };
  },

    // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
  setQuery: function() {
    // mapHelpers.getPetData( search, newStart, fLon, fLat).then(function(data) {
    petHelpers.getPetData().then(function(data) {
      this.setState({ results: { data: data } });
    }.bind(this));
  },

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {
    return (
      <div className="main-container container card">
        <div className="img_news text-center"> <img style={imgStyle} src={"../img/justin-veenema-156591.jpg"} alt="Blog Image"/> </div>
        <div className="text-center">
            <h2>Find your new best friend here!</h2>
        </div>
        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <Query updateSearch={this.setQuery} />
        {/* Note how we pass in the results into this component */}
        <Results results={this.state.results} />
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Search;
