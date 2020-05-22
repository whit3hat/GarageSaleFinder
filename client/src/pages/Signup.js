import React, {useState} from 'react';
import { Form, Button, ModalBody, Modal, Col } from 'react-bootstrap';
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
        // console.log(formObject);
        // if(formObject.formFirstName && formObject.formLastName && formObject.formBasicEmail) {
            API.saveUser({
                
                date: [
                    {startDate: formObject.formDateStart},
                    {endDate: formObject.formDateEnd}
                ],

                location: [{
                address: formObject.formStreetNumber},
                {street: formObject.formStreetName},
                {city: formObject.formCity},
                {state: formObject.formState}
                ],

                keyword: [{
                    keyword: formObject.formKeyWords}],

                description: [{
                    description: formObject.formDescription}]
                

            })

            .then(res => geoLocation(formObject)
            .then(res => { }
                )
            .catch(err => console.log(err));
        // }
    };

    /*
        GeoLocation Function
    */
   function geoLocation(){
        console.log("hi")
        console.log(formObject);
    //    take the address from sign up fields and convert for DB
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${formObject.formStreetNumber}+${formObject.formStreetName}+${formObject.formCity}+${formObject.formState}&key=AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs`)
            .then(function(res) {
                console.log(res)
            })
            .catch(function (err) {
                console.log(err)
            })
            .then(function(res) {

            }); 
    }

    return (
        <Modal show={true} size="lg">
            <ModalBody>
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId='formFirstName'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                    name='formFirstName'
                    onChange={handleInputChange} type='text' placeholder='Bobby' />
                </Form.Group>

                <Form.Group as={Col} controlId='formLastName'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                    name='formLastName'
                    onChange={handleInputChange} type='text' placeholder='Teenager' />
                </Form.Group>
           </Form.Row>

           <Form.Row>
                <Form.Group as={Col} controlId='formStreetNumber'>
                    <Form.Label>House Number</Form.Label>
                    <Form.Control 
                    name='formStreetNumber'
                    onChange={handleInputChange} type='text' placeholder='123' />
                </Form.Group>

                <Form.Group as={Col} controlId='formStreetName'>
                    <Form.Label>Street Name</Form.Label>
                    <Form.Control 
                    name='formStreetName'
                    onChange={handleInputChange} type='text' placeholder='Main St' />
                </Form.Group>
                </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId='formCity'>
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                    name='formCity'
                    onChange={handleInputChange} type='text' placeholder='City' />
                </Form.Group>
            
                <Form.Group as={Col} controlId='formState'>
                    <Form.Label>State</Form.Label>
                    <Form.Control 
                    name='formState'
                    onChange={handleInputChange} type='text' placeholder='State' />
                </Form.Group>

                <Form.Group as={Col} controlId='formZip'>
                    <Form.Label>Zip</Form.Label>
                    <Form.Control 
                    name='formZip'
                    onChange={handleInputChange} type='text' placeholder='01234' />
                </Form.Group>
         </Form.Row>
         <Form.Row>
                <Form.Group as={Col} controlId='formDateStart'>
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                    name='formDateStart'
                    onChange={handleInputChange} type='text' placeholder='06/30/2020' />
                </Form.Group>

                <Form.Group as={Col} controlId='formDateEnd'>
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                    name='formDateEnd'
                    onChange={handleInputChange} type='text' placeholder='07/01/2020' />
                </Form.Group>
        </Form.Row>
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

            {/* <Form.Group controlId="formBasicEmail">
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
            </Form.Group> */}
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