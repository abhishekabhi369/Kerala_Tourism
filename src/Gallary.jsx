import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Galary.css'
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Gallary() {
  return (
    <div>
        <Container>
        <Row>
            <Col>
            <h2 className='text-center pt-4 pb-5 experiencetext'>Explore Photo Gallary</h2>
            </Col>
        </Row>
        </Container>

        <Container>
        <section >
        <Row>
            <Col md={2} sm={6} xs={12} style={{paddingLeft: '0px',paddingRight: '0px'}}>
                <div  className=' position-relative'>
                <img src="https://www.keralatourism.org/images/homecontentimage/desktop/beach.jpg" class="card-img-top" alt="..."/>
            
                <h5 class="text-center dest-heading">Beaches</h5>
            
                </div>
                </Col>
                <Col md={2} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
                <div className=' position-relative' >
                <img src="https://www.keralatourism.org/images/homecontentimage/desktop/panorama.jpg" class="card-img-top" alt="..."/>
                
                <h5 class="text-center dest-heading">Kerala Panorama</h5>
                
                </div>
                </Col>
                <Col md={2} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
                <div className=' position-relative' >
                <img src="https://www.keralatourism.org/images/homecontentimage/desktop/img-3.jpg" class="card-img-top" alt="..."/>
            
                <h5 class="text-center dest-heading">Pilgrim Centres</h5>
            
                </div>
                </Col>
            <Col md={2} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div className=' position-relative' >
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/img-4.jpg" class="card-img-top" alt="..."/>
           
             <h5 class="text-center dest-heading">Artforms</h5>
          
            </div>
            </Col>
            <Col md={2} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div className=' position-relative' >
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/festivals-1.jpg" class="card-img-top" alt="..."/>
             <h5 class="text-center dest-heading">Festivals</h5>
            </div>            
                </Col>
            <Col md={2} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div  className=' position-relative'>
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/img-6.jpg" class="card-img-top" alt="..."/>
             
             <h5 class="text-center dest-heading">Places Of Interst</h5>
         
            </div>
            </Col>
            <Col md={2} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div  className=' position-relative'>
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/img-7.jpg" class="card-img-top" alt="..."/>
             
             <h5 class="text-center dest-heading">Waterfalls</h5>
           
            </div>
            </Col>
            
           
            <Col md={2} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div  className=' position-relative'>
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/monuments.jpg" class="card-img-top" alt="..."/>
             
             <h5 class="text-center dest-heading">Monuments</h5>
          
            </div>
            </Col>

            <Col md={2} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div  className=' position-relative'>
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/wild-life-2.jpg" class="card-img-top" alt="..."/>
             
             <h5 class="text-center dest-heading">Wildlife</h5>
          
            </div>
            </Col>

            <Col md={2} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div  className=' position-relative'>
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/img-10.jpg" class="card-img-top" alt="..."/>
             
             <h5 class="text-center dest-heading">Hills</h5>
          
            </div>
            </Col>

            <Col md={2} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div  className=' position-relative'>
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/Ayurveda.jpg" class="card-img-top" alt="..."/>
             
             <h5 class="text-center dest-heading">Ayurvedha</h5>
          
            </div>
            </Col>

            <Col md={2} sm={6} xs={12}style={{paddingLeft: '0px',paddingRight: '0px'}}>
            <div  className=' position-relative'>
            <img src="https://www.keralatourism.org/images/homecontentimage/desktop/img-12.jpg" class="card-img-top" alt="..."/>
             
             <h5 class="text-center dest-heading">Backwaters</h5>
          
            </div>
            </Col>
            </Row>
        </section>

        </Container>
        <Container className='pb-5 pt-3 text-center'>
        <Row >
            <Col>
            {/* <h5 className='text-center pt-4 pb-5 experiencetexts'>FIND MORE EXPERINECES &nbsp;</h5> */}
                <button className=' pb-2 pe-2 ps-2 pt-2 buttontext'>BROWSE OUR GALLARY  &nbsp;<i class="fa-regular fa-image"></i></button>
            </Col>
            </Row>
            <Row>
            <Col>
            <h2 className='text-center pt-4 pb-5 experiencetext'>Connect with Us</h2>
            </Col>
            </Row>
            <Row>
            <Col>

                <div className='logo-main'>
                    <div className='yt-logo'>
                    {/* <i class="fa-brands fa-youtube fa-lg" style={{color:'#ff0000',borderRadius:"50%"}}></i> */}
                    <TfiYoutube  size={40} color='fff'/>
                    </div>
                    <div className='fb-logo'>
                    {/* <i class="fa-brands fa-facebook"></i> */}
                    <FaFacebook  size={40} color= "fff"/>
                    </div>
                    <div className='twitter-logo'>
                    {/* <i class="fa-brands fa-twitter" style={{color: "#00ffcc"}}></i> */}
                    <FaTwitter size={40} color= "fff" />
                    </div>
                    <div className='insta-logo'>
                    {/* <i class="fa-brands fa-square-instagram"></i> */}
                    <ImInstagram size={25} color= "fff" />
                    </div>         
                   <div className='wts-logo'>
                    {/* <i class="fa-brands fa-square-whatsapp" style={{color: "#2bff00"}}></i> */}
                    <FaWhatsapp size={40} color= "fff" />
                    </div>
                    <div className='pint-logo'>
                    {/* <i class="fa-brands fa-pinterest" style={{color: "#ff1900"}}></i> */}
                    <FaPinterest  size={40} color= "fff"/>

                    </div>
                    <div className='link-logo'>
                    {/* <i class="fa-brands fa-linkedin" style={{color: "#0c7ee9"}}></i> */}
                    <FaLinkedin  size={40} color= "fff"/>
                    </div>
                </div>
            </Col>
            </Row>
         
        
        </Container>
        <Container className='connect-para'>
            <Row>
                <Col>
                 <h6><span style={{color:'#3eb7ee'}}>#KeralaTourism</span>  is Live & Trending. Don't forget to follow & share your Kerala experience</h6>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Gallary