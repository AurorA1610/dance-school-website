import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const Home = () => {
    const [courses, setCourses] = useCourses();
    return (
        <div>
            <Header></Header>
            <Row xs={1} md={2} className="g-4 m-5">
                {Array.from( courses.slice(1, 5) ).map((course, idx) => (
                    <Course key={course.id} course={course}></Course>
                ))}
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Home;