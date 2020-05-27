import React, { useState, useEffect } from 'react';
import API from '../utils/API';


function Sales() {
    const [sales, setSales] = useState([])
  
    useEffect(() => {
    geoLocation()
  }, [])
  
  function geoLocation() {
    console.log('geoLocation function')
  
    //API call to get all sales from the DB
    API.getUser()
      .then(res => 
        console.log(res.data)
        // setSales(res.data)
      )
      .catch(err => console.log(err))
  
  }
  
  geoLocation();
  }

  export default Sales