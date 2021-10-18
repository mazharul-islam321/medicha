import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch("./doctors.json")
            .then((res) => res.json())
            .then((data) => setDoctors(data));
    }, []);
    return (
        <>
            <Container>
                <h2>this is doctor page</h2>
                <Row xs={1} md={2} className="g-4">
                    {doctors.map((doctor) => (
                        <Col key={doctor.id}>
                            <Card>
                                <Card.Img variant="top" src={doctor.img} />
                                <Card.Body>
                                    <Card.Title>{doctor.name}</Card.Title>
                                    <Card.Text>{doctor.specialist}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Doctors;
