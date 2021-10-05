import {  faCheck, faClock, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

const About = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="fw-bold mb-5">About <span className="heading">Elegance Dance School</span></h1>
            <Container>
                <Row className="my-5">
                    <Col><div className="about mx-5 p-3 rounded"><FontAwesomeIcon icon={faUser} size="lg" /><h2 className="heading"> 2388</h2><h5>students</h5></div></Col>
                    <Col><div className="about mx-5 p-3 rounded"><FontAwesomeIcon icon={faCheck} size="lg" /><h2 className="heading">2190</h2><h5>classes completed</h5></div></Col>
                </Row>
                <Row>
                    <Col><div className="about mx-5 p-3 rounded"><FontAwesomeIcon icon={faClock} size="lg" /><h2 className="heading">12</h2><h5>hours a week</h5></div></Col>
                    <Col><div className="about mx-5 p-3 rounded"><FontAwesomeIcon icon={faTrophy} size="lg" /><h2 className="heading">18</h2><h5>awards won</h5></div></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;