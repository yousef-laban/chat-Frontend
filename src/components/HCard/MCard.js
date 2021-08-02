import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const MCard = (props) => {
  const users = useSelector((state) => state.user.users);

  const user = users.find((user) => +user.id === +props.message.userId);

  console.log(user);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>sender : {user.username}</Card.Text>
        <Card.Title>{props.message.text}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default MCard;
