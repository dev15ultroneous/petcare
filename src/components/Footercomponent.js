import { Col, Container, Row } from "react-bootstrap";
import "../components/Footercomponent.css";
import Submit from "../img/Submit.svg";

const footer = () => {
  return (
    <section className="Footer">
      <Container fluid className="contfluid">
        <Row>
          <Col xl={6} xs={12} className="footerfirst">
            <h2>Subscribe to our newsletter</h2>
            <input type="text" placeholder="Email address" className="input" />
            <img src={Submit} />
          </Col>
          <Col xl={2} xs={6}>
            <div className="Footerleft">
              <h3>About</h3>

              <ul style={{ padding: "0" }}>
                <li className="footerlink">About us</li>
                <li className="footerlink">Careers</li>
                <li className="footerlink">In Press</li>
              </ul>
            </div>
          </Col>
          <Col xl={2} xs={6}>
            <div className="Footerleft">
              <h3>Support</h3>
              <ul style={{ padding: "0" }}>
                <li className="footerlink">Contact us</li>
                <li className="footerlink">Online Chat</li>
                <li className="footerlink">Whatsapp</li>
                <li className="footerlink">Telegram</li>
              </ul>
            </div>
          </Col>
          <Col xl={2} xs={6}>
            <div className="Footerleft">
              <h3>FAQ</h3>
              <ul style={{ padding: "0" }}>
                <li className="footerlink">Account</li>
                <li className="footerlink">Payments</li>
                <li className="footerlink">Returns</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className="footersecond">
          <Col xl={4} xs={12}>
            <h4 className="Brandtextfooter">Petcare.</h4>
          </Col>
          <Col xl={4}></Col>
          <Col xl={4} xs={12}>
            <span>© 2000-2021, All Rights Reserved</span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default footer;
