import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Whatshappen.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
function Whatshappen() {
    const arr=[{img:"https://www.keralatourism.org/images/festivals/home-thumb/champions_boat_league20220107065424_397_1.jpg",
                head:"Champions Boat League"},
            {img:"https://www.keralatourism.org/images/festivals/home-thumb/20181120052525_351_1.jpg",
        head:"Puthari Thiruvappana"},{
            img:"https://www.keralatourism.org/images/festivals/home-thumb/20171222121635_329_1.jpg",
            head:"Vaikathashtami" },{
                img:"https://www.keralatourism.org/images/festivals/home-thumb/niranam_valiyapally_perunnal20220107071321_399_1.jpg",
                head:"Nirayam Valiyapalli Perunnal"
            },{img:'https://www.keralatourism.org/images/festivals/home-thumb/cochin_carnival20220107070030_398_1.jpg',head:"Cochin Carnival"}
        ,{
            img:"https://www.keralatourism.org/images/festivals/home-thumb/20191130064745_198_1.jpg",head:"Kanjiramattom Kodikuthu"
        },{img:"https://www.keralatourism.org/images/festivals/home-thumb/20181106110728_173_1.jpg",head:"Athirappuzha Perunnal"}
    ,{
        img:"https://www.keralatourism.org/images/festivals/home-thumb/20181106110633_381_1.jpg",head:"Arthunkal Perunnal"
    },{
        img:"https://www.keralatourism.org/images/festivals/home-thumb/20180106144046_102_1.jpg",head:"Adoor Gajamela"
    }]
  return (
    <div className='' style={{backgroundColor:'#e3e7f1'}}>
        <Container>
        <Row>
            <Col>
            <h2 className='text-center  pt-3 pb-5 '>What's happening</h2>
            </Col>
        </Row>
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
        arr.map((display)=>
        <SwiperSlide>
            <div className='image-div'>
            <img className=' img-fluid' src={display.img}  />
        </div>
        <div className='image-texts mt-2' >
        <a >{display.head}</a>
        </div>
        </SwiperSlide>
        )
       }
      </Swiper>
        </Col>
        </Row>
        <Row class="text-center">
        <Col >
            {/* <h5 className='text-center pt-4 pb-5 experiencetexts'>FIND MORE EXPERINECES &nbsp;</h5> */}
                <button className='mt-5 mb-4 pb-2 pe-2 ps-2 pt-2 buttontext'>MORE FESTIVALS & EVENTS &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i></button>
            </Col>

        </Row>

       </Container>

    </div>
  )
}

export default Whatshappen