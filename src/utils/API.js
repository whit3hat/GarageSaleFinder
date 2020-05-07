import axios from 'axios';

//URL for the google API
const URL = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';

export default {
    getMap: function(query) {
        return axios.get(URL + query )
    }
};