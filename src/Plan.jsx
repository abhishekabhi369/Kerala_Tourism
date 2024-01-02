import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './Plan.css'
function Plan() {
    const plan=[{img:"https://www.keralatourism.org/images/kt/tr-icon-hotel.png",name:"Where to Stay"},
    {img:"https://www.keralatourism.org/images/kt/tr-icon-brochure.png",name:"E Brochures"},
    {img:"https://www.keralatourism.org/images/kt/tr-icon-visa.png",name:"Visa on Arrival"},
    {img:"https://www.keralatourism.org/images/kt/tr-icon-info.png",name:"Travel Info"},
    {img:"https://www.keralatourism.org/images/kt/tr-icon-messageboard.png",name:"Travel Care"},
    {img:"https://www.keralatourism.org/images/kt/tr-icon-toilets.png",name:"Toilets"},
    {img:"https://www.keralatourism.org/images/kt/tr-icon-newsletter.png",name:"E Newsletter"},
    {img:"https://www.keralatourism.org/images/yatri-logo.png",name:"Yathri Nivas"}]

  return (
    <div>
        <Container>
        <Row>
          <h2 className='text-center plan-text pt-3'>Plan Your Trip</h2>
        </Row>
        <Row>
          <Col>
            <div className='main-plan'>
              {plan.map((display, index) => (
                <div key={index} className='secondary-plan'>
                  <div className='img-wrapper' style={{ backgroundColor: '#036' }}>
                    <img className='secondary-plan-img' src={display.img} alt={display.name} />
                  </div>
                  <h6 className='text-below'>{display.name}</h6>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
         <div className="acco-main">
          <div className='para-acco'>
            <p className='p-para-acco'>Search for Accommodation</p>
          </div>
              <div className='search-acco'>
                <input type="text" placeholder='Enter Keyword' />
              </div>
              <div className='search-button'>
                <Button variant='success'>&nbsp;<i class="fa-solid fa-magnifying-glass"></i>SEARCH</Button>
              </div>
          </div>         

      </Container>
    </div>
  )
}

export default Plan