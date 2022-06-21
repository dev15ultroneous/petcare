import { Col, Container, Image, Row } from "react-bootstrap";
import "../components/Footercomponent.css";
import Submit from "../img/Submit.svg";
import dribbble from "../img/dribbble.svg";
import facebook from "../img/facebook.svg";
import figma from "../img/figma.svg";
import whatsapp from "../img/whatsapp.svg";
import youtube from "../img/youtube.svg";

const footer = () => {
  return (
    <section className="Footer">
      <Container fluid className="contfluid">
        <Row>
          <Col xl={6} xs={12} md={12} className="footerfirst">
            <h2>Subscribe to our newsletter</h2>
            <input type="text" placeholder="Email address" className="input" />
            <img src={Submit} />
          </Col>
          <Col xl={2} xs={12} md={4} className="footermob">
            <div className="Footerleft">
              <h3>About</h3>

              <ul style={{ padding: "0" }}>
                <li className="footerlink">About us</li>
                <li className="footerlink">Careers</li>
                <li className="footerlink">In Press</li>
              </ul>
            </div>
          </Col>
          <Col xl={2} xs={12} md={4} className="footermob">
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
          <Col xl={2} xs={12} md={4} className="footermob">
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
          <Col xl={4} xs={12} md={12}>
            <h4 className="Brandtextfooter">Petcare.</h4>
          </Col>
          <Col xl={4}>
            <div className="socialmedia">
              <Image src={facebook} className="socialimg" />

              <Image src={youtube} className="socialimg" />

              <Image src={dribbble} className="socialimg" />

              <Image src={figma} className="socialimg" />

              <Image src={whatsapp} className="socialimg" />
            </div>
          </Col>
          <Col xl={4} xs={12} md={12}>
            <span>© 2000-2021, All Rights Reserved</span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default footer;
