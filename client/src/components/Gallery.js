import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Gallery.css";

const Places = () => {
  return (
    <section className="places_section">
      <Container>
        <div className="places_top_text text-center">
          <h2>Travel Gallery</h2>
        </div>
        <div className="image_gallery">
          <Row className="gx-2 gy-2">
            <Col md={3}>
              <div class="place-img place-image-1 rounded-3">
                <h2>
                  <a href="/trip">Jammu & Kashmir</a>
                </h2>
              </div>
            </Col>
            <Col md={3}>
              <div class="place-img place-image-2 rounded-3">
                <h2>
                  <a href="/trip">kerala</a>
                </h2>
              </div>
            </Col>
            <Col md={3}>
              <div class="place-img place-image-3 rounded-3">
                <h2>
                  <a href="/trip">varanasi</a>
                </h2>
              </div>
            </Col>
            <Col md={3}>
              <div class="place-img place-image-4 rounded-3">
                <h2>
                  <a href="/trip">Nicobar islands</a>
                </h2>
              </div>
            </Col>
            {/* <Col md={3}>
              <div class="place-img place-image-5 rounded-3">
                <h2>
                  <a href="/switzerland">Delhi</a>
                </h2>
              </div>
            </Col> */}
          </Row>
        </div>  
      </Container>
    </section>
  );
};

export default Places;
