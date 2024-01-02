import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Things() {
  return (
    <div>
      <section className="things-back">
        <Container>
          <Row>
            <Col>
              <h2 className="things-text text-center pt-5">
                Things To Do In Kerala
              </h2>
            </Col>
          </Row>
          <Container>
          <Row className="pt-5">
            
              
              <Col md={4} sm={6} xs={12}>
              <div className=' position-relative ms-3 mb-3' >
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/Screw-Pine-Weaving1.jpg" class="card-img-top" alt="..."/>
             <h5 class="text-center dest-heading">Responsible Tourism</h5>
            </div>
              </Col>
              <Col md={4} sm={6} xs={12}>
              <div className=' position-relative ms-3 mb-3'  >
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/ayurveda6.jpg" class="card-img-top" alt="..."/>
             <h5 class="text-center dest-heading">Ayurveda</h5>
            </div>
              </Col>
              <Col md={4} sm={6} xs={12}>
              <div className=' position-relative ms-3 mb-3'  >
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/Paragliding.jpg" class="card-img-top" alt="..."/>
             <h5 class="text-center dest-heading">Paragliding</h5>
            </div>
              </Col>
              
            
              <Col md={4} sm={6} xs={12}>
              <div className=' position-relative ms-3 mb-3' >
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/A-Journey-through-the-Forest.jpg" class="card-img-top" alt="..."/>
             <h5 class="text-center dest-heading">A Journeythrough the Forest</h5>
            </div>
              </Col>
              <Col md={4} sm={6} xs={12}>
              <div className=' position-relative ms-3 mb-3'  >
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/scuba-diving1.jpg" class="card-img-top" alt="..."/>
             <h5 class="text-center dest-heading">Scuba Diving</h5>
            </div>
              </Col>
              <Col md={4} sm={6} xs={12}>
                <div className=' position-relative ms-3 mb-3' >
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/Hiking.jpg" class="card-img-top" alt="..."/>
             <h5 class="text-center dest-heading">Hking</h5>
            </div>
              </Col>
             
          </Row>
          </Container>
        </Container>
        <Container className='pb-5 pt-3 text-center'>
        <Row >
            <Col>
            {/* <h5 className='text-center pt-4 pb-5 experiencetexts'>FIND MORE EXPERINECES &nbsp;</h5> */}
                <button className='ms-0  pb-2 pe-2 ps-2 pt-2 buttontext'>EXPLORE OUR DESTINATIONS  &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i></button>
            </Col>
        </Row>
        </Container>
      </section>
    </div>
  );
}

export default Things;
