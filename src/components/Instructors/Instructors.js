import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Instructors.css';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setInstructors(data));
    }, [])
    return (
        <div>
            <Header></Header>
            <h1 className="mb-5 heading">Our Instructors</h1>
            <Row xs={1} md={2} className="g-4">
            {
                instructors.map(instructor => 
                    <Col className="instructor border border-2 p-4 rounded-pill">
                        <h4>{instructor.name}</h4>
                        <h6>phone: {instructor.phone}</h6>
                    </Col>
                )
            }
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Instructors;