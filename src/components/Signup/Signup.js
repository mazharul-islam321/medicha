import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>MEDICHA</h1>
                        <img src="https://i.ibb.co/k6GXFhx/logo.png" alt="" />
                    </Col>
                    <Col>
                        <Form className="mx-auto pt-4 pb-5 w-75">
                            <h2>REGISTER</h2>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>NAME</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Your Full Name"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email Address"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>PASSWORD</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="..........."
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>CONFIRM PASSWORD</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="............"
                                />
                            </Form.Group>
                            <div className="d-grid gap-2 my-4">
                                <Button variant="secondary">
                                    Create Account
                                </Button>
                            </div>
                            <div className="">
                                <span>already have an account?</span>
                                <Link to="/signin"> signin</Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Signup;
