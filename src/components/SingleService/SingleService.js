// import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./SingleService.css";
const SingleService = () => {
    const { serviceId } = useParams();
    // const [detailss, setDetailess] = useState([]);
    const { services } = useAuth();
    // console.log(services);
    /* useEffect(() => {
        fetch("https://mazharul-islam321.github.io/data/services.json")
            .then((res) => res.json())
            .then((data) => setDetailess(data));
    }, []); */

    const singleUser = services?.find(
        (detail) => detail.id === Number(serviceId)
    );
    // console.log(singleUser);
    return (
        <div className="text-center my-5">
            <h2 className=" mx-auto my-5">Single Service</h2>
            <Container>
                <Card className="center" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={singleUser?.img} />
                    <Card.Body>
                        <Card.Title>{singleUser?.name} </Card.Title>
                        <Card.Text>{singleUser?.description}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default SingleService;
