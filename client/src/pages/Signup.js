import React, {useState} from 'react';
import { Form, Button, ModalBody, Modal } from 'react-bootstrap';
import API from '../utils/API';
import axios from 'axios';
import { Link } from "react-router-dom"

function Signup() {


    
    //set components initial state
    // const [signup, setSignup] = useState([])
    const [formObject, setFormObject] = useState({})

    //Handles updating component state when the user types into the input fields
    function handleInputChange(e) {
        
        const { name, value } = e.target;
        console.log(name, value);

        formObject[name] = value;
        setFormObject(formObject)
        console.log(formObject);

    };

    //when the form is submitted, use the geoLocation function and then save the info to the DB
    function handleFormSubmit(e) {
        e.preventDefault();
        console.log(formObject);
        // if(formObject.formFirstName && formObject.formLastName && formObject.formBasicEmail) {
            API.saveUser({
                
                location: [{
                address: formObject.formStreetNumber,
                street: formObject.formStreetName,
                city: formObject.formCity,
                state: formObject.formState}
                ],

                keyword: formObject.formKeyWords,

                description: formObject.formDescription
                

            })
            .then(res => geoLocation())
            .catch(err => console.log(err));
        // }
    };

    /*
            GeoLocation Function
    */
 
    // //varaibles for the GeoLocation function from the sign up form.
    let address = formObject.formStreetNumber;
    // let street = formObject.formStreetName;
    // let city = formObject.formCity;
    // let state = formObject.formState;

    function geoLocation(){
        console.log("hi")
        console.log(address);
    //    take the address from sign up fields and convert for DB
        // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}+${street}+${city}+${state}&key=AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs`)
        //     .then(function(res) {
        //         console.log(res)
        //     })
        //     .catch(function (err) {
        //         console.log(err)
        //     })
        //     .then(function(res) {

        //     }); 
    }

    return (
        <Modal show={true} size="lg">
            <ModalBody>
        <Form>
            <Form.Group controlId='formFirstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                name='formFirstName'
                onChange={handleInputChange} type='text' placeholder='Bobby' />
            </Form.Group>
            <Form.Group controlId='formLastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                name='formLastName'
                onChange={handleInputChange} type='text' placeholder='Teenager' />
            </Form.Group>
            <Form.Group controlId='formStreetNumber'>
                <Form.Label>House Number</Form.Label>
                <Form.Control 
                name='formStreetNumber'
                onChange={handleInputChange} type='text' placeholder='123' />
            </Form.Group>
            <Form.Group controlId='formStreetName'>
                <Form.Label>Street Name</Form.Label>
                <Form.Control 
                name='formStreetName'
                onChange={handleInputChange} type='text' placeholder='Main St' />
            </Form.Group>
             <Form.Group controlId='formCity'>
                <Form.Label>City</Form.Label>
                <Form.Control 
                name='formCity'
                onChange={handleInputChange} type='text' placeholder='City' />
            </Form.Group>
            <Form.Group controlId='formState'>
                <Form.Label>State</Form.Label>
                <Form.Control 
                name='formState'
                onChange={handleInputChange} type='text' placeholder='State' />
            </Form.Group>
            <Form.Group controlId='formZip'>
                <Form.Label>Zip</Form.Label>
                <Form.Control 
                name='formZip'
                onChange={handleInputChange} type='text' placeholder='01234' />
            </Form.Group> 

            <Form.Group controlId='formDescription'>
                <Form.Label>Description</Form.Label>
                <Form.Control 
                name='formDescription'
                onChange={handleInputChange} as='textarea' rows='3' placeholder='Description' />
            </Form.Group>
            <Form.Group controlId='formKeyWords'>
                <Form.Label>Keywords</Form.Label>
                <Form.Control 
                name='formKeyWords'
                onChange={handleInputChange} type='text' placeholder='Search Keywords' />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                name='formBasicEmail'
                onChange={handleInputChange} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group> 

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button 
            // disabled={!(formObject.formFirstName && formObject.formLastName && formObject.formBasicEmail)}
                onClick={handleFormSubmit}
                variant="primary" type="submit">
                Submit
            </Button>
            <Link to="/">Home</Link>
        </Form>
        </ModalBody>
        </Modal>

    )
};

export default Signup;
