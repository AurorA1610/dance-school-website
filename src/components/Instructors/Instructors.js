import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => setInstructors(data));
    }, [])
    return (
        <div>S
            <Header></Header>
            <h3 className="mb-5 text-success">Meet Our Instructors</h3>
            <Row xs={1} md={3} className="g-4">
            {
                instructors.map(instructor => 
                    <div>
                        <h4>{instructor.name}</h4>
                        <h6>{instructor.phone}</h6>
                    </div>
                )
            }
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Instructors;