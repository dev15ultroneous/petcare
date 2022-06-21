import React from "react";
import { Col, Container, Navbar, NavLink, Row } from "react-bootstrap";
import "../components/Navcomponent.css";
import { MdArrowRightAlt } from "react-icons/md";

const Nav = () => {
  return (
    <Navbar>
      <Container fluid className="contfluid">
        <div className="navbrand">
          <Row className="navrow">
            <Col xl={4}>
              <h2 className="Brandtext">Petcare.</h2>
            </Col>
            <Col xl={6} className="navlink">
              <NavLink className="link" href="#">
                Home
              </NavLink>
              <NavLink className="link" href="#">
                Services
              </NavLink>
              <NavLink className="link" href="#">
                Training
              </NavLink>
              <NavLink className="link" href="#">
                Medicare
              </NavLink>
            </Col>
            <Col xl={2}>
              <NavLink className="signup" href="#" style={{ color: "#d7818d" }}>
                Sing up <MdArrowRightAlt />
              </NavLink>
            </Col>
          </Row>
        </div>
      </Container>
    </Navbar>
  );
};

export default Nav;
