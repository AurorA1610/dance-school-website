import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const {img, name, origin, feesPerMonth, rating} = props.course
    return (
        <Col>
            <Card className="course p-4 rounded shadow">
                <Card.Img variant="top" className="course-img rounded-circle d-block mx-auto" src={img} />
                <Card.Body>
                <h2>Course name: <span className="course-name">{name}</span></h2>
                <h4>Fees per month: ${feesPerMonth}</h4>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;