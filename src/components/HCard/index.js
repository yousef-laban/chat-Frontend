import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { creatDM } from "../../store/actions/groupActions";

const HCard = (props) => {
  const dispatch = useDispatch();

  const newChat = {
    name: "",
    usersId: [{ userId: props._user.id }, { userId: props.user.id }],
  };

  const handelClick = () => {
    dispatch(creatDM(newChat));
  };

  return (
    <Card className="c103">
      <Card.Img  />
      <Card.Body>
        <Card.Title>{props.user.username}</Card.Title>

        <Button className="c102" variant="primary" onClick={handelClick}>
          chat
        </Button>
      </Card.Body>
    </Card>
  );
};

export default HCard;
