import { Card, Button } from "react-bootstrap";

const GCard = (props) => {
  console.log(props.group.users);

  let name = "";

  props.group.users.forEach((user) => {
    if (+user.id !== +props._user.id) name = user.username;
  });

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Button variant="primary">chat</Button>
      </Card.Body>
    </Card>
  );
};

export default GCard;
