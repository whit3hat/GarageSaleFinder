import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Textfield, Drawer, Content, Footer, FooterSection, FooterLinkList, HeaderRow } from 'react-mdl';
import { Link } from 'react-router-dom'
import Main from './Components/main';

//axios variable import for api query
const axios = require('axios').default;

//URL for google Maps
const URL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs&callback=initMap';


/*
GeoLocation Function
*/

//URL for the geolocation
const geoUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" 


function GeoLocation(){
//take the address from the DB and convert to the geo location to use in the map
axios.get(`${geoUrl}&key=AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs`)
      .then(function(res) {
          console.log(res)
      })
      .catch(function (err) {
          console.log(err)
      })
      .then(function(res) {
        
});

};


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


function App() {
    return (
        <div>
            <Layout style={{ background: 'url(https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center / cover' }}>
                <Header transparent title="Garage Sale Finder" style={{ color: 'white' }}>
                    <HeaderRow>
                        <Textfield
                            value=""
                            onChange={() => { }}
                            label="Search2"
                            expandable
                            expandableIcon="search"
                        />
                    </HeaderRow>
                    <HeaderRow>
                        <Navigation>
                            <Link to="/home">Home</Link>
                            <Link to="/landingpage">Seeker</Link>
                            <Link to="/modal">Log in or Sign up</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </HeaderRow>
                </Header>
                <Drawer title="">
                    <Navigation>
                        <Link to="/home">Home</Link>
                        <Link to="/landingpage">Seeker</Link>
                        <Link to="/modal">Log in or Sign up</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main />
                </Content>
            </Layout>



            <Footer size="mini" style={{ backgroundcolor: 'black' }}>
                <FooterSection type="left" logo="">
                    <FooterLinkList>
                        <div className="wrapper" style={{ color: 'aliceblue', fontSize: '20px' }}>
                        </div>
                    </FooterLinkList>
                </FooterSection>
            </Footer>

        </div>

    );
}


export default App;
