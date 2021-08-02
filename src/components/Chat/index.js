import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import MCard from "../HCard/MCard";
import { useState } from "react";


const Chat = (props) => {
  const history = useHistory();
  const _user = useSelector((state) => state.user.user);
  const messages = useSelector((state) => state.messages.messages);
  const loading = useSelector((state) => state.messages.loading);
  const [wanted, setWanted] = useState(null);
  if (!props.wanted) return <></>;
  const groupId = props.wanted.id;

  if (!_user) history.push("/");

  if (loading) return <h2>loading !!!</h2>;

  const filteredMessages = messages
    .filter((message) => +message.groupId === +groupId)

    .map((message) => <MCard message={message} _user={_user} />);

  return (
    <>

       <div className="l9" >{filteredMessages}</div>
      
    

    </>
  );
};

export default Chat;
