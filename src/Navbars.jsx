import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Col, Container, Image, Row } from 'react-bootstrap'
function Headding() {
  const [scrolled, setScrolled] = useState(false);
  const heading=[{}]
    
  
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 40; // Change 50 to the scroll position where you want the color change
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrolled]);

  const navbarStyle = {
    backgroundColor: scrolled ? '#036' : ' rgba(255, 255, 255, 0.101)',
    transition: 'background-color 0.5s ease',
    // Add other styles like padding, height, etc., as needed
  };
  
  return (
    <div >
      {/* <div className='swiper-head' style={{}}> */}
   <Container fluid style={{
    paddingRight: '0px',
    paddingLeft: '0px',position:"relative"
}}>
    
    <div className='main-head'>

    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><Image  src='https://www.keralatourism.org/images/banner/medium_desktop/ashtamudi_lake.jpg' fluid /></SwiperSlide>
        <SwiperSlide><Image  src='https://www.keralatourism.org/images/banner/medium_desktop/caravan-1920x6502.jpg' fluid /></SwiperSlide>
        <SwiperSlide><Image  src='https://www.keralatourism.org/images/banner/medium_desktop/destination-wedding-banner-1920.jpg' fluid/></SwiperSlide>
        <SwiperSlide><Image  src='https://www.keralatourism.org/images/banner/medium_desktop/dharmadam_beach.jpg' fluid/></SwiperSlide>
        <SwiperSlide><Image  src='https://www.keralatourism.org/images/banner/medium_desktop/parambikulam.jpg' fluid/></SwiperSlide>
        <SwiperSlide><Image  src='https://www.keralatourism.org/images/banner/medium_desktop/international_children%E2%80%99spainting_competition_2023-1920-6501.jpg' fluid/></SwiperSlide>
        <SwiperSlide><Image  src='https://www.keralatourism.org/images/banner/medium_desktop/cbl-1920x650.jpg'fluid /></SwiperSlide>
      </Swiper>
      </div>
      </Container>
    
         <Container fluid>
      <Row>
      <div className='child-swiper' style={navbarStyle}>
        <Col xs={3}>
       
      {/* <div className='heading-second'> */}
    <div className='kerala logo'>
      <Image height={'70px'} src='https://www.keralatourism.org/images/kt/kerala-tourism-title.png?d=18122017'  fluid/>
    </div>
     
    {/* </div> */}
    </Col>
    <Col xs={9}>
   
    <div className='top-head pe-5'>
        <div className="logos">
        <i class="fa-brands fa-youtube fa-xl" style={{color:'#ff0000'}}></i>
        <i class="fa-brands fa-facebook fa-xl" style={{color: "#005eff"}}></i>
        <i class="fa-brands fa-twitter fa-xl" style={{color: '#005eff'}}></i>
        <i class="fa-brands fa-instagram fa-xl" style={{color: "#000000"}}></i>
        <i class="fa-brands fa-whatsapp fa-xl" style={{color: '#00ff04'}}></i>
        <i class="fa-brands fa-pinterest fa-xl" style={{color: "#ff2e2e"}}></i>
        <i class="fa-brands fa-linkedin fa-xl" style={{color: "#347af4"}}></i>
        </div>
        <div className="visit-jan">
        <h6 className='visit-head'>Visits since 1 Jan 2007 50,716,876 <span style={{marginLeft:'1rem'}}>Visits since 1 Apr 2023  8,855,287 </span></h6>
        </div>
        <div className="language ">
            <a href="#" ><span className='link'>ENG</span> <span className='link-span'>LANGUAGES</span></a>
        </div>
    </div>

    <div className='searchbars'>
        <nav class="navbar navbar-expand-lg "> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse kerala-list pt-3" id="navbarSupportedContent">
      
    <a href="">EXPERIENCE KERALA</a>
        <a href="">WHERE TO GO</a>
        <a href="">WHERE TO STAY</a>
        <a href="">THINGS TO DO</a>
        <a href="">PLAN YOUR TRIP</a>
        <a href="">TRAVEL CARE</a>
        <a href="">E BROCHURES</a>
        <a href="">E NEWS LETTER</a>
        <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
      </div>
      </nav>
      </div>  
  
    </Col>
    
    </div>
    <div className='mobileapplication' style={{backgroundColor:"green"}}>

      <div>

      <img src="https://www.keralatourism.org/images/app-icons/play-store.png" alt="" />
      <img src="https://www.keralatourism.org/images/app-icons/app-store.png" alt="" />

      </div>
    </div>
    </Row>
    </Container>
      {/* </div>     */}

     

    </div>
  )
}

export default Headding