import React, {useState} from 'react'
import { Form, Col } from "react-bootstrap";


const Appointment = () => {
    // const [appointment, setAppointment] = useState({
    //     name: "name",
    //     email: "email",
    //     barber_id: "barber_id"
    // })
    
  return (
    <div>
      <h1>Book an appointment</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
      </Form>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>
      <Form.Group controlId="dob">
        <Form.Label>Select Date</Form.Label>
        <Form.Control type="date" name="dob" placeholder="Date of Birth" />
      </Form.Group>
    </div>
  );
}

export default Appointment