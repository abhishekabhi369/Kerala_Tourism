import React from 'react'
import './Footer.css'
import { Image } from 'react-bootstrap'
function Footer() {
    const botimg=[{
        img:"https://www.keralatourism.org/images/dtpc.png"
    },
    {
        img:"https://www.keralatourism.org/images/ktdc.jpg"
    },
    {
        img:"https://www.keralatourism.org/images/ktil-logo.jpg"
    },
    {
        img:"https://www.keralatourism.org/images/teps.jpg"
    },
    {
        img:"https://www.keralatourism.org/images/brdc-logo.png"
    },
    {
        img:"https://www.keralatourism.org/images/sargaalaya-logo.png"
    },
    {
        img:"https://www.keralatourism.org/images/sihmk.jpg"
    },
    {
        img:"https://www.keralatourism.org/images/responsible-tourism.jpg"
    },
    {
        img:"https://www.keralatourism.org/images/kitts.jpg"
    },
    {
        img:"https://www.keralatourism.org/images/adventurekeralatourism-logo.jpg"
    },
    {
        img:"https://www.keralatourism.org/images/muziris-logo.jpg"
    },
    {
        img:"https://www.keralatourism.org/images/saathi-logo.png"
    },
    {
        img:"https://www.keralatourism.org/images/nidhi.jpg"
    },
    {
        img:"https://www.keralatourism.org/images/sahapedia.jpg"
    }
]

  return (
    <div> 
        <div className='foot'>
    <div className='footer-main'>
        <div>
        <ul>
            <h4 className='foo'>Explore</h4>
          
                <li>Classification Schemes</li>
                <li>Governmental Affairs</li>
                <li>Media Room</li>
                <li>Tourism Events</li>
                <li>Maps</li>
                <li>Site Map</li>
            </ul>
        </div>
        <div>
        <ul>
            <h4 className='foo'>Travel Hub</h4>
            
                <li>Kerala at a Glance</li>
                <li>Travel Care</li>
                <li>Where to Stay</li>
                <li>How to?</li>
                <li>Travel Tips</li>
            </ul>
        </div>
        <div>
        <ul>
            <h4 className='foo'>Nature</h4>
            
                <li>Hills</li>
                <li>Backwaters</li>
                <li>Beaches</li>
                <li>Wildlife</li>
                <li>Waterfalls</li>
            </ul>
        </div>
        <div>
        <ul>
            <h4 className='foo'>Places</h4>
           
                <li>Munnar</li>
                <li>Wayanad</li>
                <li>Kovalam</li>
                <li>Periyar</li>
                <li>Varkkala</li>
            </ul>
        </div>
        <div>
        <ul>
            <h4 className='foo'>Specialities</h4>
          
                <li>Ayurveda</li>
                <li>Monsoon</li>
                <li>Houseboat</li>
                <li>Kerala Food </li>
                <li>Festivals</li>
            </ul>
        </div>
        <div>
        <ul>
            <h4 className='foo'>Videos/Photos</h4>
          
                <li>Videos</li>
                <li>Photos</li>
                <li>360 degree Videoa</li>
                <li>Royalty Free Photos</li>
                <li>Wallpapers</li>
            </ul>
        </div>
    </div>
    <hr/>
    <div className='sec-footer'>
        <div className='ms-5 sec-footer-child' >
            <h5 style={{textAlign:'center',color:"#036",fontSize:"18px"}}>Subscribe Our Newsletter</h5>
            <p style={{textAlign:'center'}}>Get notified to Kerala Tourism events and activities</p>
            <div className='d-flex'>
            <input type="text" placeholder='Your Email' style={{padding:"8px 80px",border:"1px solid #ccc"}}/>
            <button style={{backgroundColor:"#036",color:"white",fontSize:"12px",border:"none",padding:"10px 10px"}}>SUBSCRIBE</button>
            </div>
        </div>
        <div className='busi'>
            <p>For Business/Trade/Classifications and Tenders please visit</p>
            <a href="">www.keralatourism.gov.in</a>
            
        </div>

    </div>
    <hr />
    <div className='third-footer text-center'>
        <button className='third-btn' style={{backgroundColor:"#bd1a48",color:"white",padding:"5px 17px",border:"2px solid #a02743",fontSize:"18px"}}>RECRUITMENTS</button>

    </div>
    </div>
    <div className='bot-main'style={{display:"flex"}}>

{
    botimg.map((display)=>
    <div className='bot-img'>

    <Image src={display.img}  style={{width:"65px",height:"55px"}} />
    </div>
    )
   
}
</div>
<div className='bot-con text-center'>
    <p>Department of Tourism, Government of Kerala, Park View, Thiruvananthapuram, Kerala, India - 695 033 <br />
    Phone: +91 471 2321132, Fax: +91 471 2322279, E-mail: <a href="">info@keralatourism.org</a> . <br />
    All rights reserved © Kerala Tourism 2023.<a href="">Copyright | Terms of Use | Cookie Policy | Contact Us</a> . <br />
    Developed & Maintained by Invis.
    </p>
</div>
    </div>
  )
}

export default Footer