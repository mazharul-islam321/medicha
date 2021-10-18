import React from "react";
import { Container, Row } from "react-bootstrap";
import useDepartment from "../../../hooks/useDepartment";
import useServices from "../../../hooks/useServices";
import Carousel from "../Carousels/Carousels";
import Department from "../Department/Department";
import Services from "../Services/Services";
import Specialized from "../Specialized/Specialized";

import "./Home.css";

const Home = () => {
    const [departments] = useDepartment();
    const [services] = useServices();

    return (
        <>
            <Container>
                <Carousel></Carousel>
                <div>
                    <h2 className="text-center">Medical Departments</h2>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {departments.map((department) => (
                            <Department
                                key={department.id}
                                department={department}
                            ></Department>
                        ))}
                    </Row>
                </div>

                <Specialized></Specialized>
                <div>
                    <h2 className="text-center">Specialized Services</h2>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {services.map((service) => (
                            <Services
                                key={service.id}
                                service={service}
                            ></Services>
                        ))}
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default Home;
