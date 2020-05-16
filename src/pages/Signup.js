import React, {useState} from 'react';
import { Form, Button, ModalBody, Modal } from 'react-bootstrap';

//axios variable import for api query
const axios = require('axios').default;


function Signup() {
    //set components initial state
    // const [signup, setSignup] = useState([])
    const [formObject, setFormObject] = useState({})


    /*
            GeoLocation Function
    */
 

    
    //varaibles for the GeoLocation function from the sign up form.
    let address = formObject.formStreetNumber;
    let street = formObject.formStreetName;
    let city = formObject.formCity;
    let state = formObject.formState;

    function GeoLocation(){
       //take the address from sign up fields and convert for DB
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}+${street}+${city}+${state}&key=AIzaSyAQV4OnQ1CIWg_QP0L_yL1lsftxK5K6CUs`)
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
            <Form.Group controlId='formFirstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder='Bobby' />
            </Form.Group>
            <Form.Group controlId='formLastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder='Teenager' />
            </Form.Group>
            <Form.Group controlId='formStreetNumber'>
                <Form.Label>House Number</Form.Label>
                <Form.Control type='text' placeholder='123' />
            </Form.Group>
            <Form.Group controlId='formStreetName'>
                <Form.Label>Street Name</Form.Label>
                <Form.Control type='text' placeholder='Main St' />
            </Form.Group>
             <Form.Group controlId='formCity'>
                <Form.Label>City</Form.Label>
                <Form.Control type='text' placeholder='City' />
            </Form.Group>
            <Form.Group controlId='formState'>
                <Form.Label>State</Form.Label>
                <Form.Control type='text' placeholder='State' />
            </Form.Group>
            <Form.Group controlId='formZip'>
                <Form.Label>Zip</Form.Label>
                <Form.Control type='text' placeholder='01234' />
            </Form.Group> 
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
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
                onClick={() => GeoLocation()}
                variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </ModalBody>
        </Modal>

    )
};

export default Signup;
