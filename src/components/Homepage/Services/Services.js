import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = (props) => {
    const { id, name, description, img } = props.service;

    const descrip = description.slice(0, 160);
    return (
        <>
            <Col>
                <Card className="cardheight">
                    <Card.Img className="cardimg" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{descrip}</Card.Text>
                    </Card.Body>
                    <div className="mx-auto mb-3">
                        <Link to={`/singleService/${id}`}>
                            <Button className="btn btn-warning">Details</Button>
                        </Link>
                    </div>
                </Card>
            </Col>
        </>
    );
};

export default Services;
