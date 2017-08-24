// Include React as a dependency
var React = require("react");

var btnStyle = {
    backgroundColor: "#fff",
    color: "#red"
};

// Query Component Declaration
var Query = React.createClass({

    // Here we set initial variables for the component to be blanks
    getInitialState: function() {
        return {
            search: ""
        };
    },

    // Whenever we detect ANY change in the textbox, we register it.
    handleChange: function(event) {
        console.log(event.target.value);

        // Here we create syntax to capture any change in text to the query terms (pre-search).
        // See this Stack Overflow answer for more details:
        // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },

    // This code handles the sending of the search terms to the parent Search component
    handleSubmit: function(event) {
        event.preventDefault();
        this.props.updateSearch(this.state.search, this.state.start, this.state.fLon, this.state.fLat);
        // this.props.updateSearch(this.state.search, this.state.start, this.state.fLon, this.state.fLat);
    },

    mapMe: function(event) {
        event.preventDefault();
        let self = this;
        navigator.geolocation.getCurrentPosition(function(position) {
                self.setState({ fLat: position.coords.latitude, fLon: position.coords.longitude });
            },
            (error) => alert(error.message));
        btnStyle = {
            backgroundColor: "green",
            color: "#fff"
        };
    },

    // Here we render the Query component
    render: function() {

        return (
            <div className="main-container">

                <div className="row">
                  <div className="col-lg-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                  <h4>
                                    <i className="fa fa-paw"></i>
                                  </h4>
                                  <h4><strong>Enter your Zip Code or City,State</strong></h4>
                                   <input type="text" className="text-center" id="search" defaultValue={this.state.search} 
                                   onChange={this.handleChange}
                                   required
                                   />
                                </div>
                            </div>
                           <div className="text-center">
                            <button
                              type="submit"
                              className="btn btn-default btn-sm"
                            >
                              <h4>Submit</h4>
                            </button>
                          </div>
                        </form>
                      </div>
                  </div>
                </div>

        );
    }
});

// Export the module back to the route
module.exports = Query;