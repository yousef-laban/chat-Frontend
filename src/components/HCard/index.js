import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { creatGroup } from "../../store/actions/groupActions";

const HCard = (props) => {
  const dispatch = useDispatch();

  const newChat = {
    name: "",
    usersId: [{ userId: props._user.id }, { userId: props.user.id }],
  };

  const handelClick = () => {
    dispatch(creatGroup(newChat));
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="left" src={props.user.profile.image} />
      <Card.Body>
        <Card.Title>{props.user.username}</Card.Title>

        <Button variant="primary" onClick={handelClick}>
          {" "}
          chat
        </Button>
      </Card.Body>
    </Card>
  );
};

export default HCard;
