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
                            <h3 className="textcolor">Best Doctors</h3>
                            <p className="textcolor">
                                The relentless service of Hospitals in the past
                                25 years taken health care to the most modern
                                levels in the region catering to urban & rural.
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
                            <h3 className="textcolor">
                                toxicologycal research
                            </h3>
                            <p className="textcolor">
                                Medical research involves research in a wide
                                range of fields, such as biology, chemistry,
                                pharmacology and toxicology with the goal of
                                developing new medicines or medical procedures
                                or improving the application of those already
                                available.
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
                            <h3 className="textcolor">Specialized Doctors</h3>
                            <p className="textcolor">
                                You may call them simply doctors. But most
                                doctors have extra expertise in one type of
                                medicine or another. In fact, there are several
                                hundred medical specialties and subspecialties.
                                Here are the most common types of doctors you'll
                                likely see.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    );
};

export default Carousels;
