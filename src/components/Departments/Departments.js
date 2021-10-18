import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useDepartment from "../../hooks/useDepartment";

const Departments = () => {
    const [departments] = useDepartment();
    return (
        <>
            <h2>this is departments page</h2>
            <Container>
                <Row xs={1} md={2} className="g-4">
                    {departments.map((department) => (
                        <Col key={department.id}>
                            <Card>
                                <Card.Img variant="top" src={department.img} />
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
