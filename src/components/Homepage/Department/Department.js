import { Card, Col } from "react-bootstrap";

const Department = (props) => {
    const { name, description, img } = props.department;

    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Department;
