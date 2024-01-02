import React from 'react'
import './Tourpackage.css'
import { Col, Container, Row } from 'react-bootstrap'
function TourPackage() {
    const arr=[{head:'Entire Kerala',para:"A Journey Through Gods Own Country",price:'INR 2000 to 118,000',img:"https://www.keralatourism.org/images/homecontentimage/entire-kerala.jpg"},
    {head:'Center Kerala',para:"Trip to The Soul Of Kerala",price:'INR 1000 to 116,000',img:"https://www.keralatourism.org/images/homecontentimage/central-kerala.jpg"},
    {head:'Back water',para:"Through the stretches of emerald",price:'INR 1000 to 60,000',img:"https://www.keralatourism.org/images/homecontentimage/backwater.jpg"},
    {head:'South Kerala',para:"A Journey To Remember",price:'INR 10000 to 175,000',img:"https://www.keralatourism.org/images/homecontentimage/south-kerala.jpg"},
    {head:'Hill Station',para:"Explore the lush mist-clad hill stations",price:'INR 2000 to 50,000',img:"https://www.keralatourism.org/images/homecontentimage/hill-station.jpg"},
    {head:'HoneyMooon',para:"Celebrate Your Romance",price:'INR 2000 to 150,000',img:"https://www.keralatourism.org/images/homecontentimage/honeymoon.jpg"}]
  return (
    <div style={{backgroundColor:'#e3e7f1'}}>
        <Container>
              <Row>
            <Col>
            <div className='main-head'>
            <h2 className='text-center  pt-3 '>Tour Packages</h2>
            </div>
            </Col>
            </Row>
            <Row>
            <Col>
            <div class='caption-para'>
            <p class="sub-head text-center">STOP. Breathe. Slow down. Embrace life. It’s time for Kerala! <br/>
                Plan your trip with amazing offers and packages.</p>
                </div>
            </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                {
                arr.map((display)=>
                <Col md={4} sm={6} xs={12}>
                <div  className='main-img border-0 position-relative'>
                    <img src={display.img} alt="" className='img-fluid package-img'/>
                    <div className='imgtop position-absolute'>
                      <h6>{display.head}</h6>
                    <h6>{display.para}</h6>
                    </div>
                    <div class='money position-absolute'>
                      <h6>{display.price}</h6></div>
                      <div class="overlay">
                    </div>

                   </div>
              </Col>

                )
                }

            </Row>

            <Row>
                <Col className='text-center'>
                <button className=' mt-5 pb-2 pe-2 ps-2 pt-2 buttontext'>FIND MORE PACKAGES &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i></button>

                </Col>

            </Row>


        </Container>


    </div>
  )
}

export default TourPackage