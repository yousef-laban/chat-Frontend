import { Card } from "react-bootstrap";

const MCard = (props) => {
  console.log(props.message.text);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>sender : {props.message.sender?.username}</Card.Text>
        <Card.Title>{props.message?.text}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default MCard;
