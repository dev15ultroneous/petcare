import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Heading from "./SectionHeadingcomponents";
import videogirl from "../img/videogirl.svg";
import "../components/Clientfeedbackcomponent.css";
import { clientfeedback } from "../util/Listofdata";
import prev from "../img/prev.svg";
import next from "../img/next.svg";

const feedback = () => {
  return (
    <Container fluid className="contfluid">
      <section className="feedbacksection">
        <Row>
          <Col xl={6} className="feedbackimg">
            <img src={videogirl} className="feedbackimg" />
          </Col>
          {clientfeedback.map(
            (
              value,
              index //Client feedback Maping
            ) => (
              <Col xl={6} key={index}>
                <Heading text="Clients Feedback for us" />
                <p className="feedbackpera">{value.details}</p>
                <Row>
                  <Col xl={6} xs={6} style={{ textAlign: "end" }}>
                    <Button>
                      <div>
                        <Image src={prev} />
                      </div>
                    </Button>
                  </Col>
                  <Col xl={6} xs={6} style={{ textAlign: " initial" }}>
                    <Button>
                      <div>
                        <Image src={next} />
                      </div>
                    </Button>
                  </Col>
                </Row>
              </Col>
            )
          )}
        </Row>
      </section>
    </Container>
  );
};

export default feedback;
