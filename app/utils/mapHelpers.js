// Include the Axios library for HTTP requests
var axios = require("axios");

// Helper Functions
var mapHelpers = {

  // **** NEW ROUTES ****//
  // This will return any dog friendly bars from our database
  getMapData: function(search, start, lon, lat) {
    // var formattedTerm = term.trim();

    return axios.get("/api/getmapdata",{
	    params: {
	      model: search,
	      start: start,
	      lon: lon,
	      lat: lat
	    }
    })
      .then(function(results) {
        return results.data;
      });

  }
};

// We export the helpers function
module.exports = mapHelpers;
