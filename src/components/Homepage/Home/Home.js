import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import useDepartment from "../../../hooks/useDepartment";
import Carousel from "../Carousels/Carousels";
import Department from "../Department/Department";
import Services from "../Services/Services";
import Specialized from "../Specialized/Specialized";

import "./Home.css";

const Home = () => {
    const [departments] = useDepartment();
    const { services } = useAuth();
    const newDepartments = departments.slice(0, 4);
    const newServices = services.slice(0, 6);
    return (
        <>
            <div className="backgroundcolor">
                <Carousel></Carousel>
            </div>
            <Container>
                <div>
                    <h2 className="text-center py-5">Medical Departments</h2>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {newDepartments.map((department) => (
                            <Department
                                key={department.id}
                                department={department}
                            ></Department>
                        ))}
                    </Row>
                </div>
            </Container>
            <div className="backgroundcolor">
                <Specialized></Specialized>
            </div>

            <Container>
                <div>
                    <h2 className="text-center my-5">Specialized Services</h2>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {newServices.map((service) => (
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
