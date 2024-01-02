import React from 'react'
import './Whatsnew.css'
import { Col, Container, Row } from 'react-bootstrap'

function Whatsnew() {
  return (
    <div>  
        <Container>
            <Row>
                <Col>
                    <h2 className='whatsnew-text text-center pb-5 pt-5'>What's New</h2>
                </Col>
            
			</Row>
			</Container>
			<Container className=' new pb-3'>
			<Row>
			
				<div className= 'what-icon col-md-6'>
				<ul >
					<a href=""><li >Kerala Tourism invites applications from lifeguards at various beaches in Kollam and Kozhikode</li></a>
					<a href=""><li>Domestic Partnership Meets 2023-24 | Register Now</li>
				</a>
				</ul>
				</div>
				<div className='what-icon  col-md-6'>
				<ul >
					<a href=""><li >International Trade Fairs and B2B Meet, Vietnam - Sep 2023 | Register Now</li>
				</a>
				<a href=""><li >International Trade Fairs and Roadshows | Sep 2023 - Mar 2024</li>
				</a>
				</ul>

			</div>
            
			
            </Row>
			</Container>
			<Container className='pb-5 pt-3 text-center'>
        <Row >
            <Col>
            {/* <h5 className='text-center pt-4 pb-5 experiencetexts'>FIND MORE EXPERINECES &nbsp;</h5> */}
                <button className=' pb-2 pe-2 ps-2 pt-2 buttontext'>MORE NEWS &nbsp;<i class="fa fa-chevron-right" aria-hidden="true"></i></button>
            </Col>
        </Row>
        </Container>
        
     </div>
  )
}

export default Whatsnew