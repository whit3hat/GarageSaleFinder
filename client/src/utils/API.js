import axios from 'axios';

export default {
    //Save User
    saveUser: function(userData) {
        return axios.post("/api/sales", userData)
    },

    getUser: function(userData) {
        return axios.get("/api/sales", userData)
    }
};