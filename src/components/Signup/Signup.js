import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
    const { regiError, registerNewUser } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password Must be at least 6 characters long.");
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("Password Must contain 2 upper case");
            return;
        }
        registerNewUser(email, password, name);
    };

    return (
        <>
            <Container className="py-5">
                <Row>
                    <Col xs={12} md={6} className="mb-5">
                        <h1 className="text-center fw-bold">MEDICHA</h1>
                        <img
                            className="authimg"
                            src="https://i.ibb.co/k6GXFhx/logo.png"
                            alt=""
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <Form
                            className="mx-auto pt-4 pb-5 w-75"
                            onSubmit={handleRegistration}
                        >
                            <h2 className="text-center">REGISTER</h2>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicName"
                            >
                                <Form.Label>NAME</Form.Label>
                                <Form.Control
                                    type="text"
                                    onBlur={handleNameChange}
                                    placeholder="Your Full Name"
                                    required
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    onBlur={handleEmailChange}
                                    placeholder="Email Address"
                                    required
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>PASSWORD</Form.Label>
                                <Form.Control
                                    type="password"
                                    onBlur={handlePasswordChange}
                                    placeholder="..........."
                                    required
                                />
                            </Form.Group>
                            <span>{error || regiError}</span>
                            {/* <Form.Group
                                className="mb-3"
                                controlId="formPassword"
                            >
                                <Form.Label>CONFIRM PASSWORD</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="............"
                                    required
                                />
                            </Form.Group> */}
                            <div className="d-grid gap-2 my-4">
                                <Button variant="secondary" type="submit">
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
