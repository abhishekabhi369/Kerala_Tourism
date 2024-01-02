import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
function Experience() {
    const kerala=[
        {
            image:"https://www.keralatourism.org/images/homecontentimage/desktop/RT-2.jpg",
            p1:"RESPONSIBLE TOURISM MISSION",
            p2:"RT Mission is the nodal agency formed by the Government of Kerala to spread and implement the ideologies and initiatives of Responsible Tourism all over the State."
            ,backgroundColor:"rgba(239, 91, 91, .8)"
        },
        {
            image:"https://www.keralatourism.org/images/homecontentimage/desktop/yoga5.jpg",
            p1:"YOGA",p2:"An exclusive website to know What is Yoga and how Yoga can change your life"
            ,backgroundColor:"rgba(100, 150, 50, .8)"
        },
        {
            image:"https://www.keralatourism.org/images/homecontentimage/desktop/Theyyam2.jpg",
            p1:"KANNUR",p2:"Welcome to Kannur, a city that boasts of a vibrant tapestry of history, culture, tradition and natural beauty. "
            ,backgroundColor:"rgba(204, 102, 0, .8)"
        },
        {
            image:"https://www.keralatourism.org/images/homecontentimage/desktop/judaisam13.jpg",
            p1:"JUDAISM IN KERALA",p2:"Judaism is an ethnic religion comprising the collective religious, cultural and legal tradition and civilization of the Jewish people. "
            ,backgroundColor:"rgba(47, 65, 108, .8)"
        },
        {
            image:"https://www.keralatourism.org/images/homecontentimage/desktop/ecotourism.jpg",
            p1:"ECOTOURISM",p2:"Welcome to the official website of Eco Adventure Tourism in Kerala. A trip to swooningly picturesque places that are also silent, serene, slow-moving is what travelers to the Kerala always looks for is there."
            ,backgroundColor:"rgba(204, 153, 51, .8)"
        },
        {
            image:"https://www.keralatourism.org/images/homecontentimage/desktop/Experience_Kerala1.jpg",
            p1:"LAND OF MAJESTIC TREATS",p2:"Explore the tourist destinations and things to do in Kollam and Thiruvananthapuram. Check out the e-brochure and start planning your next trip to South Kerala."
            ,backgroundColor:"rgba(124, 72, 0, .8)"
        }
    ]
  return (
    <div>
        <Container>
        <Row>
            <Col>
            <h2 className='text-center pt-4 pb-5 experiencetext'>Experience Kerala</h2>
            </Col>
        </Row>
        </Container>
    <Container >
    <Row>
    <Col>
    <Swiper
        slidesPerView={4}
        spaceBetween={6}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
       {
        kerala.map((display)=>
        <SwiperSlide>
            <div className='image-div'>
            <img className=' img-fluid image' src={display.image}  />
            <h4 className='image-text ' >{display.p1}</h4>
            <div class="overlay" style={{backgroundColor:display.backgroundColor}}>
            <div class="text">{display.p2}</div>
            </div>
            
            
        </div>
        </SwiperSlide>
        )
       }
      </Swiper>
    </Col>
    </Row>
    </Container >
    <Container className='pb-5 pt-3 text-center'>
        <Row >
            <Col>
            {/* <h5 className='text-center pt-4 pb-5 experiencetexts'>FIND MORE EXPERINECES &nbsp;</h5> */}
                <button className=' pt-2 pb-2 pe-2 ps-2 buttontext'>FIND MORE EXPERINECES  &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i></button>
            </Col>
        </Row>
        </Container>

    </div>
  )
}

export default Experience