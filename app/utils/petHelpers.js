
// API Key
// a6552e2a7dd2087fa0fb4104d446cb19
// API Secret
// a96bafd4af4842306cd19b7b57704687

// Include the Axios library for HTTP requests
var axios = require("axios");

// Helper Functions
var petHelpers = {

  // **** NEW ROUTES ****//
  // This will return any dog friendly bars from our database
  // getPetData: function(search, start, lon, lat) {
  getPetData: function() {
    // var formattedTerm = term.trim();

    // console.log(search, start, lon, lat);

// http://api.petfinder.com/pet.find?format=json&key=3a62ece31719a64dcf6726980917d7ad&animal=dog&location=94089&age=senior&count=10

    return axios.get("https://api.petfinder.com/pet.find?format=json",{
	    params: {
	      key: 'a6552e2a7dd2087fa0fb4104d446cb19',
	      animal: 'dog',
	      location: 'Charlotte,NC',
	      count: 10
	    }
    })
      .then(function(results) {
      	console.log(results);
        return results.data;
      });
  }
};

// We export the helpers function
module.exports = petHelpers;
