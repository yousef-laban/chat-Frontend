import { Card } from "react-bootstrap";

const GCard = (props) => {
  let name = "";

  props.group.users.forEach((user) => {
    if (+user.id !== +props._user.id) name = user.username;
  });

  return (
    <Card className="c6">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default GCard;
