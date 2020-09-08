import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Firstimg from '../images/Group 800.svg';
import Secondimg from '../images/Group 801.svg';
import Thirdimg from '../images/Group 801.svg';


function Home(props) {
    return (
        <Container fluid className="home">

            <Row className="my-5 pt-5">

            <Col sm={10} lg={8}>
              <h5>Pracify - Building India's youngest &
                strongest on-demand workforce!</h5>
              <p>Pracify helps companies to scale using our network of on-demand workers
                comprising of India's youth who are paid on a 'pay-per-performance' system.
            <br/>
            <br/>           
                With Pracify, companies can achieve their business goals in a cost-effective 
                manner by onboarding on-demand workers for various tasks.</p>
            </Col>

            <Col sm={10} lg={3}>
               <img src={Firstimg} className="Group-800" alt=""/>
            </Col>
            
            </Row>

            <Row className="my-5 py-5">
            
            <Col sm={10} lg={4}>
               <img src={Secondimg} className="Group-801" alt=""/>
            </Col>

            <Col sm={10} lg={8}>
               <h5>Pracify for Business</h5>
               <p>Pracify helps mitigate traditional hiring risks with its 'outcome-based payout' feature 
               where companies pay only for the work they approve and not manpower employed. 
               <br/>
               <br/>
               Our company dashboard acts as a recruitment engine, enables tracking of work &
               allows payment disbursal. You can also opt for our managed services for guaranteed 
               delivery of outcome.</p>
               <button className="pracified_button">Get Pracified</button>
            </Col>

            </Row>

            <Row className="my-5 py-5">
            
            <Col sm={10} lg={8}>
               <h5>Pracify for Gig Workers</h5>
               <p>Pracify helps college students & young adults who haven't entered the professional
               world yet to earn experience and money by working for their favourite companies
               on their own schedule.
               <br/>
               <br/>
               You have the choice of selecting gigs according to your own skills and interests
               and all your earnings are safe and secured which are directly transferred to your 
               Pracify wallet which can be easily redeemed to your Paytm or Bank account.</p>
               <button className="pracified_button">Get Pracified</button>
            </Col>

            <Col sm={10} lg={4}>
              <img src={Thirdimg} className="Group-802" alt=""/>
            </Col>
            
            </Row>

            <div className="contact_us d-flex my-5">
               <div></div>
               <h4 className="my-auto">Got something? Feel free to get in touch with us!</h4>
               <button className="mx-auto my-auto contact_button">Contact Us</button>
            </div>

        </Container>
    );
}

export default Home;