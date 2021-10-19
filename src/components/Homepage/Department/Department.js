import { Card, Col } from "react-bootstrap";
import "./Department.css";

const Department = (props) => {
    const { name, description, img } = props.department;

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
                </Card>
            </Col>
        </>
    );
};

export default Department;
