


import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";


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

  return (
    <div > {name}</div>
  );
};

export default GCard;
