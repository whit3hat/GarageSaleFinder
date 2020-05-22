import axios from 'axios';
// import '../../key.js';

//URL for the google API
const URL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs&callback=initMap';

export default {
    getMap: function(query) {
        return axios.get(URL + query )
    }
};
