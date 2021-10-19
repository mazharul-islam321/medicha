import React from "react";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Contact.css";

const Contact = () => {
    return (
        <div>
            <div className="contact">
                <h2 className="text-center">CONTACT</h2>
                <Container>
                    <Form>
                        <div className="form-field mb-4">
                            <Form.Control
                                className="form-width"
                                size="md"
                                type="text"
                                placeholder="Name"
                            />
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className=" mx-4 form-width"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                />
                            </FloatingLabel>
                            <Form.Control
                                className="form-width"
                                size="md"
                                type="text"
                                placeholder="subject"
                            />
                        </div>
                        <FloatingLabel
                            controlId="floatingTextarea2"
                            label="Message"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: "130px" }}
                            />
                        </FloatingLabel>
                        <Button className="mt-4" variant="warning" size="lg">
                            SUBMIT
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default Contact;
