import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Dashboard() {
  return (
    <div className="App">
   
      <Container>
        <Row className="px-3 my-5">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Button href=""  size="lg" style={{height:'100px',padding:'30px'}} variant="primary">
                Brand Managment
              </Button>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Button href="" size="lg" style={{height:'100px',padding:'30px' }} variant="secondary">
                Company Managment
              </Button>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Button href="" size="lg" style={{height:'100px',padding:'30px'}} variant="success">
                Car Bookings
              </Button>
            </Card>
          </Col>
        </Row>

        <Row className="px-3 my-5">
          <Col>
            <Card style={{ width: "18rem" }}>
              <Button href="" size="lg" style={{height:'100px',padding:'30px'}} variant="warning">
                Car Managment
              </Button>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Button href="" size="lg" style={{height:'100px',padding:'30px'}} variant="dark">
                User Managment
              </Button>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Button href="" size="lg" style={{height:'100px',padding:'30px'}} variant="info">
                Manage Subscribers
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
