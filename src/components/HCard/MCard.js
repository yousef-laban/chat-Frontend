import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const MCard = (props) => {
  console.log(props.message.text);
  const _user = useSelector((state) => state.user.user);
 
  return (<>
    { (_user.id === props.message.sender.id) ?
    <div  className="c1">
      <Card.Body >
        {/* <Card.Text className="c10">{props.message.sender?.username}</Card.Text> */}
        <Card.Title className="c8">{props.message?.text}</Card.Title>
       
      </Card.Body>
    </div> 
    :
    <div className="c2" >
      <Card.Body>
        <Card.Text className="c3" >{props.message.sender?.username}</Card.Text>
        <Card.Title className="c4"  >{props.message?.text}</Card.Title>
      </Card.Body>
    </div> 
  }
  </>);
};

export default MCard;
