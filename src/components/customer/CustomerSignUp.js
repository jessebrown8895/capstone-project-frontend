import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PORT } from "../../App";
import { useNavigate } from "react-router-dom";


const CustomerSignUp = () => {
    const navigate = useNavigate()
    const [signUp, setSignUp] = useState({
      name: "",
      email: "",
      password: "",
    });
    const handleChange = (e) => {
      setSignUp({ ...signUp, [e.target.name]: e.target.value });
    };
    function handleSubmit(e) {
      e.preventDefault();
      fetch(PORT + "/api/customer-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "applications/json",
        },
        body: JSON.stringify(signUp)
      }).then((r) => {
        if (r.ok) {
          console.log(r);
          r.json().then((customer) => {
            localStorage.setItem("jwt", customer.jwt);
            setSignUp(customer)
            navigate("/customer-home");
          });
        }
      });
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Label>name</Form.Label>
        <Form.Control
          type="name"
          name="name"
          onChange={handleChange}
          value={signUp.name}
          placeholder="name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={handleChange}
          value={signUp.email}
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          onChange={handleChange}
          value={signUp.password}
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CustomerSignUp;
