import { useSelector } from "react-redux";
import group4 from "../../images/group4.png";

const GCard = (props) => {
  const users = useSelector((state) => state.user.users);

  let name = "";

  if (props.group.name) name = props.group.name;
  else {
    props.group.users.forEach((user) => {
      if (+user.userId !== +props._user.id) {
        const wanted = users.find((_user) => _user.id === user.userId);
        name = wanted.username;
      }
    });
  }

  return <div><img className="c105" src={group4} /><div className="c106">{name}</div> </div>;
};

export default GCard;
