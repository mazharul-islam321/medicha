import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-dark text-light">
            <Container>
                <Row>
                    <Col>
                        <h1>MEDICHA</h1>
                        <p>
                            The relentless service of Hospitals in the past 25
                            years taken health care to the most modern levels in
                            the region catering to urban & rural.
                        </p>
                        <p>
                            A Health Care Provider of Western Approach,
                            Hospitals is the most trusted multispecialty
                            hospital.
                        </p>
                        <Link to="/about">Know More</Link>
                    </Col>
                    <Col>
                        <h2>Usefull Links</h2>
                        <Link to="/departments">
                            <p>departments</p>
                        </Link>
                        <Link to="/allService">
                            <p>services</p>
                        </Link>
                        <Link to="/doctors">
                            <p>doctors</p>
                        </Link>
                        <Link to="/about">
                            <p>about</p>
                        </Link>
                    </Col>
                    <Col>
                        <h2>Opening Hours</h2>
                    </Col>
                    <Col>
                        <h2>Get In Touch</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
