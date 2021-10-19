import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "./Carousels.css";

const Carousels = () => {
    return (
        <>
            <Container>
                <Carousel className="imgSize" fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/Sw5ZmBp/Doctors-checking-medical-testing-on-digital-tablet.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/tbM8vcm/Close-up-of-Doctor-is-touching-digital-virtual-screen-for-analytics-Medical-data-Medical-technology.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/gtXNsNM/Doctor-HD-Wallpapers-Top-Free-Doctor-HD-Backgrounds-jpg.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );
};

export default Carousels;
