import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import headerlogo from "../../../images/logo.jpg";

const Header = () => {
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={headerlogo}
                            width="60px"
                            height="50px"
                            alt=""
                        />
                        MEDICHA
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/departments">
                                Departments
                            </Nav.Link>
                            <Nav.Link as={Link} to="/allService">
                                Services
                            </Nav.Link>
                            <Nav.Link as={Link} to="/doctors">
                                Doctors
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact">
                                Contact
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/signin">
                                Sign In
                            </Nav.Link>
                            <Nav.Link as={Link} to="/signup" eventKey={2}>
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
