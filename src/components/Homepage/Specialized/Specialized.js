import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Specialized.css";

const Specialized = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="textstyle">
                        <h1 className="mb-4">
                            We Are Trusted The Best Certificate Healthcare,
                            Specialist
                        </h1>
                        <p className="mb-4">
                            Explain to you how all this mistaken idea of
                            denouncing pleasure and praising pain was born and I
                            will give you a complete account of the system, and
                            the master-builder of human happiness. Expound the
                            actual teachings of the great explorer of the truth.
                        </p>
                        <p>A Good Environment For Work</p>
                        <p>Digital Laboratory</p>
                        <p>Emergency Services</p>
                        <p>Professional Doctors</p>
                        <p>Scientific skills For Getting A Better Result</p>
                    </Col>
                    <Col xs={12} md={6} className="imgpadding">
                        <img
                            src="https://i.ibb.co/Sw5ZmBp/Doctors-checking-medical-testing-on-digital-tablet.jpg"
                            className="imgpsize"
                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Specialized;
