import React from 'react';
import './main.css';
import { InputGroup, FormControl} from 'react-bootstrap';


function Searching(){
    return (
        
<InputGroup size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>

    ) 

           
};

export default Searching;