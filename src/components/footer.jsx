import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Fourthimg from '../images/google-play-badge@3x.png';
import Fifthimg from '../images/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917@3x.png';
import Hearticon from '../images/Icon awesome-heart.svg';

function Footer(props) {
    return (
        <Container fluid className="footer">

        <hr className="hr"/>

        <Row className=" my-4">
            
            <Col sm>
              <h4>pracify</h4>
              <p>Pracify helps companies scale on-demand by connecting them to a network of selected and trained gig workers for performing easily doable task-based jobs on a pay-per-performance system.</p>
              <img src={Fourthimg} height="50px" alt=""/>
              <img src={Fifthimg} height="35px" alt=""/>
            </Col>
            
            <Col sm>
            
               <Row className="footer_col my-4">
                 <Col sm lg={4}>
                   <h6>Company</h6>
                   <p>About Us</p>
                   <p>How It Works</p>
                   <p>Careers</p>
                 </Col>
                 <Col sm lg={4}>
                 <h6>Get In Touch</h6>
                   <p>Contact Us</p>
                   <p>College festivals</p>
                 </Col>
                 <Col sm lg={4}>
                 <h6>Legal</h6>
                   <p>Terms & Conditions</p>
                   <p>Privacy Policy</p>
                 </Col>
               </Row>
            
            </Col>
            
            </Row>

            <hr className="hr"/>

            <div className="container">
            
            <div className="float-left">
               Made with <img src={Hearticon} alt=""/> in India.
            </div>

            <div className="text-center">
              Copyright &copy; {() => Date().getFullYear()} Tyche Ventures Private Limited.
            </div>

            <div className="">
            <i className="mx-2 fab fa-facebook-f"></i>
            <i className="mx-2 fab fa-instagram"></i>
            <i className="mx-2 fab fa-linkedin-in"></i>
            <i className="mx-2 fab fa-twitter"></i>
            </div>

            </div>
            
        </Container>
    );
}

export default Footer;