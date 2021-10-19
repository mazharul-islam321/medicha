import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="bg-dark text-light">
            <Container>
                <Row className="py-4">
                    <Col xs={12} md={4}>
                        <h1 className="my-4">MEDICHA</h1>
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
                    <Col xs={12} md={4}>
                        <h2 className="my-4">Usefull Links</h2>
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
                    <Col xs={12} md={4}>
                        <h2 className="my-4">Get In Touch</h2>
                        <div>
                            <h3>PHONE</h3>
                            <p>+880-1926561783</p>
                        </div>
                        <div>
                            <h3>Email</h3>
                            <span>mazharulislam.lu2016@gmail.com</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
