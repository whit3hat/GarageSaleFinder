import React from 'react';
import ReactDom from 'react-dom';
import Modal from './modal';


function search(Modal) {

//URL for google Maps
const URL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs&callback=initMap';

//base query function
axios.get(`${URL}=handleResponse`)
    .then(function (res) {
        console.log(res)
    })
    .catch(function (err) {
        console.log(err)
    })
    .then(function () {

    });
};

export default search;