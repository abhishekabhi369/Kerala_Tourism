import React from 'react'
import './Explore.css'
import { Col, Container, Row } from 'react-bootstrap'
function Explore() {
  return (
  
    <div>
    <Container fluid style={{paddingLeft:"0px",paddingRight:"0px"}}>
        <Row>
        <Col>
     <div className='vedio-container'>
        <div className='vedio-wrap'>
        <video  className='in-vedio' autoPlay loop muted>
        <source src="https://www.keralatourism.org/images/kt/videos/Loop_video_Rain-MP41.mp4" type="video/mp4" />
         </video>
         <div className='vedio-text'>
         <button href="">EXPLORE OUR VEDIOS</button>
         <div className='vedio-text-div'><span>Take a peek at what God’s Own Country has to offer you. Be awed.</span></div>
     
         </div>
         </div>
   
    </div>
    </Col> 
    </Row>
    </Container>
    </div>
  )
}

export default Explore