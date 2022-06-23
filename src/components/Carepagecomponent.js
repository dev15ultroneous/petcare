import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import videogirl from "../img/videogirl.svg";
import Heading from "./SectionHeadingcomponents";
import Carepage from "../components/Carepagecomponent.css";
import { carepagedetail } from "../util/Listofdata";
import { Prev } from "react-bootstrap/esm/PageItem";
import prev from "../img/prev.svg";
import next from "../img/next.svg";
import videobutton from "../img/videobutton.svg";

const Caredetail = () => {
  const [currentIndex, SetcurrentIndex] = useState(0);
  const [activeIndex, SetactiveIndex] = useState(0);

  const Next = () => {
    if (currentIndex >= carepagedetail.length - 1) {
    } else {
      SetcurrentIndex(currentIndex + 1);
      SetactiveIndex(currentIndex + 1);
    }
  };
  const Prev = () => {
    if (currentIndex <= 0) {
    } else {
      SetcurrentIndex(currentIndex - 1);
      SetactiveIndex(currentIndex - 1);
    }
  };
  return (
    <section className="Care">
      <Container fluid className="contfluid">
        <Row className="Careall">
          <Col xl={6} style={{ textAlign: "left" }}>
            <Image src={videogirl} className="Carevideo" />
            <Image
              src={videobutton}
              className="Videobutton"
              onClick={() => alert("There is no video")}
            />
          </Col>
          <Col xl={6}>
            <Heading text="How we take care of your Pets" />
            <span>{carepagedetail[currentIndex].subtitle}</span>
            <p>{carepagedetail[currentIndex].details}</p>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col
                xl={3}
                xs={3}
                className="pagebutton"
                style={{
                  textAlign: "center",
                  paddingLeft: "3rem",
                  width: "15%",
                }}
              >
                <Button onClick={() => Prev()}>
                  <div>
                    <Image src={prev} />
                  </div>
                </Button>
              </Col>
              <Col xl={6} xs={6} style={{ width: "60%" }}>
                <div className="pagenatation">
                  {carepagedetail.map((v, i) => (
                    <button
                      key={i}
                      className={`carebutton`}
                      onClick={() => SetcurrentIndex(i)}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </Col>
              <Col
                xl={3}
                xs={3}
                style={{ textAlign: "center", paddingRight: "3rem" }}
              >
                <Button onClick={() => Next()}>
                  <Image src={next} />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Caredetail;
