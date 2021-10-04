import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Services = () => {
    const [courses, setCourses] = useCourses();
    return (
        <div>
            <Header></Header>
            <Row xs={1} md={3} className="g-5 m-5">
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </Row>
            <Footer></Footer>
        </div>
    );
};


export default Services;