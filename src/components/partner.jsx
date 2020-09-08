import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Surface1 from '../images/surface1.svg';
import Handshake from '../images/handshake.svg';
import Rupee from '../images/rupee.svg';

function Partner(props) {
    return (
        <Container fluid className="partner">

            <Container className="my-5 w-75 text-center">
            <h5>Partner with Pracify!</h5>
            <p>We love partnering with college societies and student clubs across India. <br/>
            We know you usually need sponsorship to organize a great event  and we've got a way to help with you
            that, just complete some tasks and earn cash sponsorship for your college festival.</p>
            <button className="my-3 letspartner_button">Let's Partner</button>
            </Container>

            <Row className="my-5">

             <Col sm>
             <h5>Partnership Benefits</h5>
             <h6 className="my-4">Cash Sponsorship</h6>
             <h6 className="my-4">Brand Partnerships</h6>
             <h6 className="my-4">Promote Event</h6>
               <p>Promote your college event among
               Pracify users</p>
             </Col>

             <Col sm className="text-center">
             <img src={Surface1} className="my-2" alt=""/><br/>
             <img src={Handshake} className="my-2" alt=""/><br/>
             <img src={Rupee} className="my-2" alt=""/>
             </Col>

            </Row>
        </Container>
    );
}

export default Partner;