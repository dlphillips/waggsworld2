// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

    render: function() {

        return (
            // We can only render a single div. So we need to group everything inside of this main-container one
            <div className="main-container">
              <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar container" style={{background: 'rgba(0, 0, 0, 0.7)'}}>
                  <div className="container">
                      <span className="navbar-brand"><Link to="/" style={{color: '#e8d071', fontWeight: 'bold'}}>WaggsWorld</Link></span>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto">
                              <li className="nav-item"><Link className="nav-link" to="/waggsmap" style={{color: 'white'}}>WaggMap</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/waggDates" style={{color: 'white'}}>WaggDates</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/search" style={{color: 'white'}}>WaggSearch</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/events" style={{color: 'white'}}>WaggEvents</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/breeding" style={{color: 'white'}}>WaggMates</Link></li>
                              <li className="nav-item"><Link className="nav-link" to="/login" style={{color: 'white'}}>Login</Link></li>                              
                          </ul>      
                      </div>
                  </div>
              </nav>

              { /* Here we will deploy the sub components Search or Saved */ }
              { /* These sub-components are getting passed as this.props.children */ }
              { this.props.children }

              <footer>
                  <hr />
                  <p className="text-center copyright-font">&copy;2017 Team Fuji</p>
              </footer>

            </div>
        );
    }
});

// Export the module back to the route
module.exports = Main;