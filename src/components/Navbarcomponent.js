import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import Navbarcomponent from "../components/Navbarcomponent.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Menubar = () => {
  return (
    <Container fluid className="contfluid">
      <Navbar collapseOnSelect expand="lg">
        <Row className="Navrow">
          <Col xl={3} xs={12} className="Brandname">
            <Navbar.Brand href="#">Petcare.</Navbar.Brand>
          </Col>
          <Col xl={6} xs={6}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="Centermenu">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Services</Nav.Link>
                <Nav.Link href="#">Training</Nav.Link>
                <Nav.Link href="#">Medicare</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col xl={3} xs={6}>
            <Nav className="Signup">
              <Nav.Link href="#" style={{ color: "#D47C88" }}>
                Signup <FaLongArrowAltRight />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    </Container>
  );
};

export default Menubar;
