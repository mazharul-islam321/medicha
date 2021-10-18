import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "../Carousels/Carousels";
import Department from "../Department/Department";
import Services from "../Services/Services";
import Specialized from "../Specialized/Specialized";

import "./Home.css";

const Home = () => {
    return (
        <>
            <Container>
                <Carousel></Carousel>
                <Department></Department>
                <Specialized></Specialized>
                <Services></Services>
            </Container>
        </>
    );
};

export default Home;
