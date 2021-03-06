import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import NavBarcomponent from "./components/NavBarcomponent";
import girl from "./img/girl.png";
import Dog from "./img/Dog.svg";
import Dog2 from "./img/Dog2.svg";
import paw from "./img/paw.svg";
import video from "./img/video.svg";
import Heading from "./components/SectionHeadingcomponents";
import SF1 from "./img/SF1.svg";
import SF2 from "./img/SF2.svg";
import SF3 from "./img/SF3.svg";
import SF4 from "./img/SF4.svg";
import SF5 from "./img/SF5.svg";
import { FaLongArrowAltRight } from "react-icons/fa";
import ReadMoreButton from "./components/ReadMoreButtoncomponent";
import Readbutton from "./components/ReadMoreButtoncomponent";
import Main from "./img/Main.png";
import Safehand from "./img/Safehand.svg";
import CompanyDetail from "./components/CompanyDetailcomponent";
import Clientfeedback from "./components/ClientFeedbackcomponent";
import ClientFeedback from "./components/ClientFeedbackcomponent";
import Footer from "./components/Footercomponent";
import SmoothScroll from "./components/SmoothScroll.component";
import Caredetail from "./components/CarePagecomponent";
import Signuppage from "./components/Signup";
import safty from "./img/safty.svg";
import house from "./img/house.svg";
import arrow from "./img/arrow.svg";

function App() {
  return (
    <div className="App">
      <SmoothScroll>
        {/* <Signuppage /> */}
        <NavBarcomponent />
        <section className="Introduction">
          <Container fluid className="contfluid">
            <Row>
              <Col xl={6}>
                <div className="Introtext">
                  <h2>
                    Your <span>Pet</span> is part of our family
                  </h2>
                  <p>
                    Want to train your pet? Or Looking for someone who takes
                    care of your pet? Well we are here.
                  </p>
                  <Row>
                    <Col xl={6} xs={6} className="bookbutton">
                      <Button
                        style={{
                          border: "2px solid #E39BA6",
                          background: " #E39BA6",
                          color: "#fff",
                          borderRadius: "20rem",
                        }}
                      >
                        Book A Schedule
                      </Button>
                    </Col>
                    <Col xl={6} xs={6} className="pricebutton">
                      <Button
                        style={{
                          width: "9rem",
                          border: "2px dotted #E39BA6",
                          background: " #fff",
                          color: "black",
                          borderRadius: "20rem",
                        }}
                      >
                        Price Pack
                      </Button>
                    </Col>
                    <section className="Doitsection">
                      <Image src={arrow} />

                      <button id="doitnow"> Do it Now...!!</button>
                      <div class="lds-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </section>
                  </Row>
                </div>
              </Col>

              <Col xl={6}>
                <div className="card">
                  <Row className="align-items-center">
                    <Col xl={6} className="cardcol">
                      <img src={video} />
                    </Col>
                    <Col xl={6} className="cardcol1">
                      <h3>Moniter your pet</h3>
                      <p>We have a watch 24*7</p>
                    </Col>
                  </Row>
                </div>
                <div className="card1">
                  <Row className="align-items-center">
                    <Col xl={6} className="cardcol">
                      <img src={safty} />
                    </Col>
                    <Col xl={6} className="cardcol1">
                      <h3>Safety First </h3>
                      <p>We care them like babies</p>
                    </Col>
                  </Row>
                </div>
                <img src={Main} style={{ width: "100%", height: "auto" }} />
                <div className="card2">
                  <Row className="align-items-center">
                    <Col xl={6} className="cardcol">
                      <img src={house} />
                    </Col>
                    <Col xl={6} className="cardcol1">
                      <h3>Spacious play yards</h3>
                      <p>We play on a field</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="Servicesfluffy">
          <h2>Services for fluffy companion</h2>
          <p>
            Have a look at our vast range of services we provide for your pets.
          </p>
          <Container fluid className="contfluid">
            <Row className="Servicesrow">
              <Col xl={2} xs={6} className="Servicesimg">
                <img src={SF2} className="SFimg" />
                <span>Food Diet</span>
              </Col>
              <Col xl={2} xs={6} className="Servicesimg">
                <img src={SF1} className="SFimg" />
                <span>Litter and Litter Boxes</span>
              </Col>
              <Col xl={2} xs={6} className="Servicesimg">
                <img src={SF3} className="SFimg" />
                <span>Health and Wellbeing</span>
              </Col>
              <Col xl={2} xs={6} className="Servicesimg">
                <img src={SF4} className="SFimg" />
                <span>Grooimg and Care</span>
              </Col>
              <Col xl={2} xs={6} className="Servicesimg">
                <img src={SF5} className="SFimg" />
                <span>Beds and Furniture</span>
              </Col>
            </Row>
          </Container>
        </section>

        <Caredetail />

        <section className="FurrySafeHands">
          <Container fluid className="contfluid">
            <Row>
              <Col xl={6}>
                <Heading text="Your Furry Friend is in Safe Hands" />
                <p>
                  Have a look at our facilities and amenities that have been set
                  up keeping in mind all the necessary things required for pets.
                  The facility is been developed under the guidance of pet
                  experts all over the nation. We have facilities like a
                  dedicated veterinary home, playground for activities, toys for
                  all pets & also training tracks, and experts whom you can
                  bring to train your pet. Also,...
                </p>
                <div className="Readmore">
                  <Readbutton
                    text="Read more"
                    style={{
                      background: "none",
                      color: "#D47C88",
                      border: "none",
                    }}
                  />
                  <FaLongArrowAltRight style={{ color: "#D47C88" }} />
                </div>
              </Col>
              <Col xl={6} style={{ textAlign: "end" }}>
                <img src={Safehand} className="Safehandimg" />
              </Col>
            </Row>
          </Container>
        </section>
        <CompanyDetail />
        <ClientFeedback />
        <Footer />
      </SmoothScroll>
    </div>
  );
}

export default App;
