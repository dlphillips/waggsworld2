import axios from "axios";

const API = {
    // Retrieves all quotes from the db
    getArticles: function() {
        return axios.get("https://www.eventbriteapi.com/v3/events/search/?q=dog events&token=LFNPFUM45EHXK6JWWIPM");
    }
};

export default API;