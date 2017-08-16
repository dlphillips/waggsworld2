// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  render: function () {

    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="main-container">



        <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
            <div className="container">
                <a className="navbar-brand" href="#">WaggsWorld</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item nav-link"><Link to="/waggsmap">WaggMap</Link></li>
                      <li className="nav-item nav-link"><Link to="/waggDates">WaggDates</Link></li>
                      <li className="nav-item nav-link"><Link to="/search">WaggSearch</Link></li>
                      <li className="nav-item nav-link"><Link to="/events">WaggEvents</Link></li>
                      <li className="nav-item nav-link"><Link to="/breeding">WaggMates</Link></li>
                      <li className="nav-item nav-link"><Link to="/login">Login</Link></li>
                    </ul>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
            </div>
        </nav>






          {/* Here we will deploy the sub components Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {this.props.children}

          <footer>
            <hr />
            <p className="text-center copyright-font">&copy;2017 Team Fuji
            </p>
          </footer>

      </div>
    );
  }
});

// Export the module back to the route
module.exports = Main;
