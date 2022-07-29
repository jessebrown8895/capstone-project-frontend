import { useContext, useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PORT } from '../../App';
import { CustomerContext } from "../../context/Customer";
import {useNavigate} from "react-router-dom"
function CustomerLogin() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const navigate = useNavigate()
  const { setCustomer } = useContext(CustomerContext)

  function handleSubmit(e) {
    e.preventDefault();
    fetch(PORT + "/api/customer-login",{
      method: "POST",
      headers: {"Content-Type": "application/json",
      Accept: "applications/json",
    },
    body: JSON.stringify({email, password}),
    }).then((r) => {
      if (r.ok) {
        console.log(r)
        r.json().then(data => {
          localStorage.setItem("jwt", data.jwt)
          setCustomer(data.customer)
          navigate("/customer-home")
        })
      }
    })
  }
  
  return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          sign in
        </Button>
        <Button onClick={() => {navigate("/sign-up");}}>
          Sign up
        </Button>
      </Form>
    
  );
}

export default CustomerLogin;
