import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import group4 from "../../images/group4.png";
import group5 from "../../images/group5.jpg";

const MCard = (props) => {
  const users = useSelector((state) => state.user.users);
  const _user = useSelector((state) => state.user.user);
  const user = users.find((user) => +user.id === +props.message.userId);

  return (
    <>
      {_user.id === props.message.userId ? (
        <div className="c1">
         <Card.Body >
      <Card.Text className="c3" > <img className="c101" src={group4}/></Card.Text>
        <Card.Title className="c8"> {props.message?.text}</Card.Title>
      </Card.Body>
    </div> 
      ) : (
        <div className="c2">
          <Card.Body>
         <Card.Text className="c3" > <img className="c101" src={group5}/></Card.Text>
//         {<Card.Text className="c3">{user.username}</Card.Text>}
            <Card.Title className="c4">{props.message?.text}</Card.Title>
          </Card.Body>
        </div>
      )}
    </>
  );
};
export default MCard;
// {props.message.sender?.username}