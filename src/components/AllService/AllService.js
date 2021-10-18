import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useServices from "../../hooks/useServices";

const AllService = () => {
    const [services] = useServices();
    return (
        <>
            <Container>
                <h2>this is all service page</h2>
                <Row xs={1} md={2} className="g-4">
                    {services.map((service) => (
                        <Col key={service.id}>
                            <Card>
                                <Card.Img variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title>{service.name}</Card.Title>
                                    <Card.Text>{service.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default AllService;
