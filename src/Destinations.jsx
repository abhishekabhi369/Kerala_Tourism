import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Destinations() {
  return (
    <div className='pt-4' style={{backgroundColor:'#e3e7f1'}}>
        <Container>
        <Row>
            <Col>
            <h2 className='text-center ms-0   pt-3 pb-5 experiencetext experiencetext-1'>Top Destinations</h2>
            </Col>
        </Row>
       
        <section >
        <Row>

            <Col md={3} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div className=' position-relative' >
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/thekkekudi_cave_temple1.jpg" class="card-img-top" alt="..."/>
             <h5 class="text-center dest-heading">Thekkekudi Cave Temple</h5>
            </div>            
                </Col>
            <Col md={3} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div  className=' position-relative'>
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/museum_of_kerala_history.jpg" class="card-img-top" alt="..."/>
             
             <h5 class="text-center dest-heading">Museum Of Kerala History</h5>
         
            </div>
            </Col>
            <Col md={3} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div  className=' position-relative'>
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/kalamandalam2.jpg" class="card-img-top" alt="..."/>
             
             <h5 class="text-center dest-heading">Kerala Kalamandalam</h5>
           
            </div>
            </Col>
            
           
            <Col md={3} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div  className=' position-relative'>
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/Kuthampully1.jpg" class="card-img-top" alt="..."/>
             
             <h5 class="text-center dest-heading">Kuthampully Handloom Village</h5>
          
            </div>
            </Col>
                
               
            <Col md={3} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div  className=' position-relative'>
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/kunhimangalam1.jpg" class="card-img-top" alt="..."/>
           
             <h5 class="text-center dest-heading">Kunhimangalam</h5>
           
            </div>
            </Col>
            <Col md={3} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div className=' position-relative' >
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/mannar.jpg" class="card-img-top" alt="..."/>
            
             <h5 class="text-center dest-heading">Mannar</h5>
            
            </div>
            </Col>
            <Col md={3} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div className=' position-relative' >
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/vyloppilli-samakrithi-bhavan.jpg" class="card-img-top" alt="..."/>
           
             <h5 class="text-center dest-heading">Vyloppilli Samskrithi Bhavan</h5>
          
            </div>
            </Col>
            <Col md={3} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div className=' position-relative' >
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/MANNANAM-1.jpg" class="card-img-top" alt="..."/>
           
             <h5 class="text-center dest-heading">Mannanam</h5>
          
            </div>
            </Col>
            
          
            </Row>
        </section>
        
        </Container>
        <Container className='pb-5 pt-3 text-center'>
        <Row >
            <Col>
            {/* <h5 className='text-center pt-4 pb-5 experiencetexts'>FIND MORE EXPERINECES &nbsp;</h5> */}
                <button className='  pb-2 pe-2 ps-2 pt-2 buttontext'>EXPLORE OUR DESTINATIONS  &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i></button>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Destinations