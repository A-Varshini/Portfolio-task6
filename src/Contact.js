import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from './contact-img.svg';
import './Contact.css'
import TrackVisibility from 'react-on-screen';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3000/#", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };
  

  return (
    <div>
    <section className="contact" id="connect">
    
      <Container>
      <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
            
              {/* {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              } */}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contact Me!!</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit">{buttonText}</button>
                     
                                   </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
                
                <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDts9C9iWNF83ExezBXJLIJ0g2dwoERg08&callback=initMap"
        async defer></script>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
        {/* <iconbutton onclick={() => window.open('https://www.instagram.com/')}> 
        
        <InstagramIcon />
        
        </iconbutton> */}
       
        
      </Container>
      <p>Hit me up on social media and let's collaborate!!</p>
      <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<a href="https://twitter.com/" class="icon-button twitter"><i class="fab fa-twitter"></i><div></div></a>
<a href="https://www.facebook.com/" class="icon-button facebook"><i class="fab fa-facebook"></i><div></div></a>
<a href="https://www.linkedin.com/in/adiraju-sri-varshini-00833621b/" class="icon-button linkedin"><i class="fab fa-linkedin"></i><div></div></a>
<a href="https://www.instagram.com/27_varshu_04/" class="icon-button instagram"><i class="fab fa-instagram"></i><div></div></a>
<a href="https://github.com/A-Varshini" class="icon-button github"><i class="fab fa-github"></i><div></div></a>
</div>
<iframe src="//maps.google.com/maps?q=53.3381768,-6.2613077&z=15&output=embed"></iframe></section>
    </div>
  )
}