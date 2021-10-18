import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Signin = () => {
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
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="submit"
                            variant="primary"
                            value="Sign In"
                            className="btn-color"
                        />
                    </Form.Group>
                    <Link to="/signup">have no account</Link>
                </Form>
                <button className="btn-regular">Google Sign In</button>
            </Container>
        </>
    );
};

export default Signin;
