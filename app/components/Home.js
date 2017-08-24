// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
// Create the Search component
var Home = React.createClass({

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {

    return (

    <div id="video-carousel-example2" className="carousel slide carousel-fade" data-ride="carousel">

        <ol className="carousel-indicators">
            <li data-target="#video-carousel-example2" data-slide-to="0" className="active"></li>
            <li data-target="#video-carousel-example2" data-slide-to="1"></li>
            <li data-target="#video-carousel-example2" data-slide-to="2"></li>
        </ol>


        <div className="carousel-inner" role="listbox">

            <div className="carousel-item active">

                <div className="view hm-black-light">


                    <video className="video-full" autoPlay loop>
                        <source src="img/mp4/dog3.mp4" type="video/mp4" />
                    </video>
                    <div className="full-bg-img"></div>
                </div>


                <div className="carousel-caption">
                    <div className="flex-center animated fadeIn">
                        <ul>
                            <li>
                                <h1 className="h3-responsive" style={{color: '#e8d071', fontWeight: 'bolder', fontSize: '200%'}}>Welcome to</h1>
                            </li>
                            <li>
                                <h1 className="h1-responsive" style={{color: '#e8d071', fontWeight: 'bolder', fontSize: '500%', textShadow: '0.05em 0.05em gray'}}>WaggsWorld!</h1>
                            </li>
                            <li>
                                <p></p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>



            <div className="carousel-item">

                <div className="view hm-blue-slight">

                    <video className="video-full" autoPlay loop>
                        <source src="img/mp4/dog2.mp4" type="video/mp4" />
                    </video>
                    <div className="mask"></div>
                </div>


                <div className="carousel-caption">
                    <div className="flex-center animated fadeInDown">
                        <ul>
                            <li>
                                <h1 className="h1-responsive" style={{color: '#000', textShadow: '0.05em 0.05em white', fontWeight: 'bolder'}}>Search for businesses & services in your neighborhood!</h1>
                            </li>
                            <li>
                                <span className="btn btn-primary btn-lg"><Link to="/search" style={{color: 'white'}}>Search Now</Link></span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>



            <div className="carousel-item">

                <div className="view hm-black-light">

                    <video className="video-full" autoPlay loop>
                        <source src="img/mp4/dog1.mp4" type="video/mp4" />
                    </video>
                    <div className="mask"></div>
                </div>


                <div className="carousel-caption">
                    <div className="flex-center animated fadeInDown">
                        <ul>
                            <li>
                                <h1 className="h1-responsive" style={{color: '#824018', textShadow: '0.05em 0.05em white', fontWeight: 'bolder'}}>Check out upcoming events!</h1>
                            </li>
                            <li>
                                <span className="btn btn-primary btn-lg"><Link to="/events" style={{color: 'white'}}>Events</Link></span>
                            </li>
                        </ul>
                    </div>
                </div>
 
            </div>

            <div className="carousel-item">

                <div className="view hm-black-light">

                    <video className="video-full" autoPlay loop>
                        <source src="img/mp4/dog4.mp4" type="video/mp4" />
                    </video>
                    <div className="mask"></div>
                </div>


                <div className="carousel-caption">
                    <div className="flex-center animated fadeInDown">
                        <ul>
                            <li>
                                <h1 className="h1-responsive" style={{color: '#824018', textShadow: '0.05em 0.05em white', fontWeight: 'bolder'}}>Find your new best friend!</h1>
                            </li>
                            <li>
                                <span className="btn btn-primary btn-lg"><Link to="/petfinder" style={{color: 'white'}}>PetFinder</Link></span>
                            </li>
                        </ul>
                    </div>
                </div>
 
            </div>

        </div>



        <a className="carousel-control-prev" href="#video-carousel-example2" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#video-carousel-example2" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>

    </div>

    );
  }
});

// Export the module back to the route
module.exports = Home;
