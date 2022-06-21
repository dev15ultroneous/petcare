import React from "react";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import Main from "../img/Main.png";
import "../components/Signup.css";

const Signuppage = () => {
  return (
    <section className="signupsection">
      <Container fluid className="contfluid">
        <div className="signupform">
          <Row>
            <Col xl={6}>
              <Image src={Main} style={{ width: "75%", height: "auto" }} />
            </Col>
            <Col xl={6}>
              <div class="card-body">
                <h3 class="signup-h3">Sign up</h3>
                <div class="form-outline">
                  <div class="row">
                    <div class="col-xl-6">
                      <label class="form-label" for="form3Example8">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="form"
                        class="form-control form-control-lg"
                      />
                    </div>
                    <div class="col-xl-6">
                      <label class="form-label" for="form3Example8">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="form"
                        class="form-control form-control-lg"
                      />
                    </div>
                  </div>
                </div>
                <div class="form-outline">
                  <label class="form-label" for="form3Example97">
                    Email
                  </label>
                  <input
                    type="text"
                    id="form"
                    class="form-control form-control-lg"
                  />
                </div>

                <div class="form-outline">
                  <label class="form-label" for="form3Example8">
                    Password
                  </label>

                  <input
                    type="text"
                    id="form"
                    class="form-control form-control-lg"
                  />
                </div>

                <div class="form-outline">
                  <label class="form-label" for="form3Example8">
                    Confirm Password
                  </label>

                  <input
                    type="text"
                    id="form"
                    class="form-control form-control-lg"
                  />
                </div>

                <div class="form-outline">
                  <label class="form-label" for="form3Example97">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="form"
                    class="form-control form-control-lg"
                  />
                </div>
                <div class="form-outline">
                  <label class="form-label" for="form3Example8">
                    Address
                  </label>

                  <input
                    type="text"
                    id="form"
                    class="form-control form-control-lg"
                  />
                </div>
                <div class="submit-button">
                  <button type="button" class="btn btn-warning btn-lg ms-2">
                    signup
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
export default Signuppage;
