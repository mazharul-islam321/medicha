import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
            <Container>
                <Form className="mx-auto w-25">
                    <img
                        src=""
                        alt=""
                        width="200"
                        height="60"
                        className="d-inline-block align-top mb-3"
                    />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="submit"
                            variant="primary"
                            value="Sign Up"
                            className="btn-color"
                        />
                    </Form.Group>
                    <Link to="/signin">already have an account</Link>
                </Form>
            </Container>
        </>
    );
};

export default Signup;
