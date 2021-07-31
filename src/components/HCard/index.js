import { Card, Button } from "react-bootstrap";

const HCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="left" src={props.user.profile.image} />
      <Card.Body>
        <Card.Title>{props.user.username}</Card.Title>

        <Button variant="primary"> chat</Button>
      </Card.Body>
    </Card>
  );
};

export default HCard;
