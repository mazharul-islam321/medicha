import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useDepartment from "../../hooks/useDepartment";
import "./Departments.css";

const Departments = () => {
    const [departments] = useDepartment();
    return (
        <>
            <h2 className="text-center py-5">All departments </h2>
            <Container className=" pb-5">
                <Row xs={1} md={2} className="g-4">
                    {departments.map((department) => (
                        <Col key={department.id}>
                            <Card className="cardheights">
                                <Card.Img
                                    className="departimg"
                                    variant="top"
                                    src={department.img}
                                />
                                <Card.Body>
                                    <Card.Title>{department.name}</Card.Title>
                                    <Card.Text>
                                        {department.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Departments;
