import { Col, Container, Image, Row } from "react-bootstrap";
import { companydata } from "../util/Listofdata";
import "./Companydetailcomponent.css";
// import companydata from "../util/Listofdata";
// import ribbine from "../img/ribbine.svg";

const companydetail = () => {
  return (
    <section className="companydata">
      <Container fluid className="contfluid">
        <Row>
          {companydata.map(
            (
              value,
              index //company data maping
            ) => (
              <Col
                key={index}
                xl={3}
                xs={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  className="background"
                  style={index % 2 === 0 ? null : { marginTop: "5rem" }}
                >
                  <div className="details">
                    <Image src={value.image} fluid />
                    {/* <img src={ribbine} /> */}
                    <h3>{value.title}</h3>
                    <p>{value.describe}</p>
                  </div>
                </div>
              </Col>
            )
          )}
        </Row>
      </Container>
    </section>
  );
};

export default companydetail;
