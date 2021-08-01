import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import MCard from "../HCard/MCard";

const Chat = (props) => {
  const history = useHistory();
  const _user = useSelector((state) => state.user.user);
  const messages = useSelector((state) => state.messages.messages);
  const loading = useSelector((state) => state.messages.loading);
  if (!props.wanted) return <></>;
  const groupId = props.wanted.id;

  if (!_user) history.push("/");

  if (loading) return <h2>loading !!!</h2>;

  const filteredMessages = messages
    .filter((message) => +message.groupId === +groupId)

    .map((message) => <MCard message={message} _user={_user} />);

  return (
    <>
      <h2>chattttt</h2>
      <div>{filteredMessages}</div>
    </>
  );
};

export default Chat;
