import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1>MEDICHA</h1>
                        <img src="https://i.ibb.co/k6GXFhx/logo.png" alt="" />
                    </Col>
                    <Col>
                        <h2>SIGN IN</h2>
                        <Form className="mx-auto pt-4 pb-5 w-75">
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>EMAIL</Form.Label>
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
                            <div className="d-grid gap-2 my-4">
                                <Button variant="secondary">Sign In</Button>
                            </div>
                            <div>
                                <span>Don't have an account?</span>
                                <Link to="/signup"> Sign Up</Link>
                            </div>
                        </Form>
                        <Button
                            className="btn-regular me-3"
                            onClick={signInUsingGoogle}
                        >
                            Google Sign In
                        </Button>
                        <Button
                            className="btn-warning"
                            onClick={signInUsingGithub}
                        >
                            Github Sign In
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Signin;
