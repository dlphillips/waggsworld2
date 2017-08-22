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
            search: "",
            start: "",
            fLon: 0,
            fLat: 0
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
                                <div className="col-lg-4 text-center card">
                                     <center><span className="fa-stack fa-3x">
                                          <i className="fa fa-circle fa-stack-2x"></i>
                                          <strong className="fa-stack-1x text-success">1</strong>
                                     </span></center>
                                    <h4><strong>Your location</strong></h4>

                                    <button onClick={this.mapMe}
                                      className="form-control"
                                      id="end"
                                      style={btnStyle}
                                      required
                                    >
                                      Click to find your location
                                    </button>
                                </div>
                                <div className="col-lg-4 text-center card">
                                    <div className="dropdown">
                                      <center><span className="fa-stack fa-3x">
                                          <i className="fa fa-circle fa-stack-2x"></i>
                                          <strong className="fa-stack-1x text-success">2</strong>
                                     </span></center>
                                       <h4><strong>What can we help you find?</strong></h4>
                                       <select id="search" defaultValue={this.state.search} 
                                       onChange={this.handleChange}
                                       required
                                       >
                                          <option></option>
                                          <option value="bars">Dog Friendly Bars</option>
                                          <option value="groomers">Groomers</option>
                                          <option value="hospitals">Pet Hospitals</option>
                                          <option value="vets">Veterinarians</option>
                                          <option value="boarders">Boarding</option>
                                        </select>
                                    </div>     
                                </div>
                                <div className="col-lg-4 text-center card">
                                    <center><span className="fa-stack fa-3x">
                                          <i className="fa fa-circle fa-stack-2x"></i>
                                          <strong className="fa-stack-1x text-success">3</strong>
                                    </span></center>
                                    <div className="dropdown">
                                    <h4><strong>Select a search radius (miles)</strong></h4>
                                       <select id="start" defaultValue={this.state.start} 
                                       onChange={this.handleChange}
                                       required
                                       >
                                          <option></option>
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5</option>
                                        </select>
                                    </div>     
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