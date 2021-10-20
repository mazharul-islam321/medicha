import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Signin.css";

const Signin = () => {
    const { signInUsingGoogle, signInUsingGithub, processLogin, setIsLoading } =
        useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logInError, setLogInError] = useState("");

    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false));
    };

    const handleGithubSignIn = () => {
        signInUsingGithub().then((result) => {
            history.push(redirect_url);
        });
    };

    const handleEmailLogIn = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordLogIn = (e) => {
        setPassword(e.target.value);
    };

    const handleLogIn = (e) => {
        e.preventDefault();
        processLogin(email, password)
            .then((result) => {
                history.push(redirect_url);
                setLogInError("");
            })
            .catch((error) => {
                setLogInError(error.message);
            });
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
                        <h1 className="text-center fw-bold">SIGN IN</h1>
                        <Form
                            className="mx-auto pt-4 pb-5 w-75"
                            onSubmit={handleLogIn}
                        >
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>EMAIL</Form.Label>
                                <Form.Control
                                    type="email"
                                    onBlur={handleEmailLogIn}
                                    placeholder="Email Address"
                                    required
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="BasicPassword"
                            >
                                <Form.Label>PASSWORD</Form.Label>
                                <Form.Control
                                    type="password"
                                    onBlur={handlePasswordLogIn}
                                    placeholder="..........."
                                    required
                                />
                            </Form.Group>
                            <span>{logInError}</span>
                            <div className="d-grid gap-2 my-4">
                                <Button variant="secondary" type="submit">
                                    Sign In
                                </Button>
                            </div>
                            <div>
                                <span>Don't have an account?</span>
                                <Link to="/signup"> Sign Up</Link>
                            </div>
                        </Form>
                        <div className="text-center">
                            <Button
                                className="btn-regular me-3"
                                onClick={handleGoogleSignIn}
                            >
                                Google Sign In
                            </Button>
                            <Button
                                className="btn-warning"
                                onClick={handleGithubSignIn}
                            >
                                Github Sign In
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Signin;
