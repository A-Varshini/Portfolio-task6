import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "./logo.svg";
import navIcon1 from "./nav-icon1.svg";
import navIcon2 from "./nav-icon2.svg";
import navIcon3 from "./nav-icon3.svg";
import './Footer.css'
import React from 'react'

function Footer() {
  return (
    <div>
         <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
           
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Thankyou for visiting my Page!!!</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}

export default Footer
