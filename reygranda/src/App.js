import React from 'react';
import './App.css';
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap/';
import Logo from './Logo.png';

export default function App() {
  return (
    <div>
      <Navbar style={{ backgroundColor: '#212121' }}>
        <Container className="py-5">
          <Col>
            <Navbar.Brand href="home">
              <img
                src={Logo}
                className="d-inline-block align-top"
                alt="Rey Granda"
              />
            </Navbar.Brand>
          </Col>
          <Col>
            <Nav className="me-auto justify-content-end">
              <Nav.Link className="nav-links" href="#home">
                ABOUT
              </Nav.Link>
              <Nav.Link className="nav-links" href="#features">
                GRAND ROOTER
              </Nav.Link>
              <Nav.Link className="nav-links" href="#pricing">
                CONTACT
              </Nav.Link>
            </Nav>
          </Col>
        </Container>
      </Navbar>

      <Container className="py-5 hero">
        <Row>
          <Col>
            <h1 className="name">Rey Granda,</h1>
            <br></br>
            <h1 className="gradient">Software Engineer</h1>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
