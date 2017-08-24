// Inclue the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component
var Route = router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Include the Router component
var Router = router.Router;

// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
var browserHistory = router.browserHistory;

// Reference the high-level components
var Main = require("../components/Main");
var Home = require("../components/Home");
var Search = require("../components/Search");
var DogMap = require("../components/DogMap");
var Events = require("../components/Events");
var Breeding = require("../components/Breeding");
var PetFinder = require("../components/PetFinder");
var Registration = require("../components/Registration");
var Login = require("../components/Login");
var WaggsMap = require("../components/WaggsMap");

// Export the Routes
module.exports = (
  // High level component is the Router component.
  <Router history={browserHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Search or Saved show the appropriate component */}
      <Route path="Search" component={Search} />
      <Route path="WaggsMap" component={WaggsMap} />
      <Route path="Events" component={Events} />
      <Route path="Breeding" component={Breeding} />
      <Route path="PetFinder" component={PetFinder} />
      <Route path="Registration" component={Registration} />
      <Route path="Login" component={Login} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Home} />

    </Route>
  </Router>
);

// <Route path="DogMap" component={DogMap} />
