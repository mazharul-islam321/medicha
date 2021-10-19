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
            <h2 className="text-center py-5">this is doctor page</h2>
            <Container className=" pb-5">
                <Row xs={1} md={2} className="g-4">
                    {doctors.map((doctor) => (
                        <Col key={doctor.id}>
                            <Card>
                                <Card.Img variant="top" src={doctor.img} />
                                <Card.Body>
                                    <Card.Title>{doctor.name}</Card.Title>
                                    <Card.Text>{doctor.specialist}</Card.Text>
                                    <span>
                                        time: {doctor.startTime}-
                                        {doctor.endTime}{" "}
                                    </span>
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
