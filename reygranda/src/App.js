import React from 'react';
import './App.css';
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap/';
import Logo from './Logo.png';
import github from './Github.svg';
import linkedin from './LinkedIn.svg';

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
        <br></br>
        <br></br>
        <br></br>

        <Row>
          <Col className="col-2">
            <span className="btn-links">
              <img
                src={github}
                className="d-inline-block"
                alt="Rey Granda"
              ></img>
              <a href="https://github.com/reygranda" target="_blank">
                Github
              </a>
            </span>
          </Col>
          <Col>
            <span className="btn-links">
              <img
                src={linkedin}
                className="d-inline-block"
                alt="Rey Granda"
              ></img>
              <a href="https://linkedin.com/in/reygranda" target="_blank">
                LinkedIn
              </a>
            </span>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
