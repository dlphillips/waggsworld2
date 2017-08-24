
// API Key
// a6552e2a7dd2087fa0fb4104d446cb19
// API Secret
// a96bafd4af4842306cd19b7b57704687

// Include the Axios library for HTTP requests
var axios = require("axios");

// Helper Functions
var eventHelpers = {

  // **** NEW ROUTES ****//
  // This will return any dog friendly bars from our database
  getEvents: function() {

    return axios.get("/api/events",{

    })
      .then(function(results) {
        // console.log(results);
        return results;
      });

  }
};

// We export the helpers function
module.exports = eventHelpers;