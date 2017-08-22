import axios from "axios";

const API = {
    // Retrieves all quotes from the db
    getArticles: function() {
        return axios.get("https://www.eventbriteapi.com/v3/events/search/?q=dog+events&sort_by=distance&location.within=15mi&location.latitude=35.224796&location.longitude=-80.821300&token=LFNPFUM45EHXK6JWWIPM");
    }
};

export default API;