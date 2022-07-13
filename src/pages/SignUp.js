import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './home.css';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords Do not Match!");
      alert("Passwords Do not Match!");
    } else {
      setMessage(null);

      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        setLoading(true);

        const { data } = await axios.post(
          "http://localhost:5000/users",
          {
            username,
            email,
            password,
            nic,
          },
          config
        );

        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));

        navigate("/carlist");

        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="b">
    <div className="loginContainer"  style={{  alignItems:'center'}}>
      {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>} */}
      {/* {loading && <Loading />} */}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name" style={{ width: "420px"}}>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="name"
            required
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name" style={{ width: "420px"}}>
          <Form.Label>NIC</Form.Label>
          <Form.Control
            type="name"
            required
            value={nic}
            placeholder="NIC"
            onChange={(e) => setNic(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: "420px"}}>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" style={{ width: "420px"}}>
          <Form.Label>Password</Form.Label><br></br>
          <Form.Control
            type="password"
            required
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "420px"}}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword" style={{ width: "420px"}}>
          <Form.Label>Confirm Password</Form.Label><br></br>
          <Form.Control
            type="password"
            required
            value={confirmpassword}
            placeholder="Re-Enter Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ width: "420px"}}
          />
        </Form.Group>

        <Button variant="primary" type="submit" size="lg" style={{  alignItems:'center'}}>
          Submit
        </Button>
      </Form>
    </div></div>
  );
}

export default SignUp;
