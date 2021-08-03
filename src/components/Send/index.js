import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { creatMessage } from "../../store/actions/messageActions";
import { FlexStyle, SearchBarStyled } from "../../styles";
import InputEmoji from "react-input-emoji";

const Send = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [message, setMessage] = useState("");

  console.log(props.wanted);

  if (!props.wanted) return <></>;

  const newMessage = {
    text: message,
    groupId: props.wanted.id,
    userId: user.id,
  };

  const resertField = () => {
    setMessage({
      text: "",
    });
  };

  const handelClick = () => {
    dispatch(creatMessage(newMessage));
    resertField();
  };

  return (
    <FlexStyle>
      {/* <SearchBarStyled
        value={message.text}
        className="l6"
        onChange={(event) => setMessage(event.target.value)}
      /> */}
      <InputEmoji
        className="l6"
        value={message.text}
        onChange={setMessage}
        cleanOnEnter
        onEnter={handelClick}
        placeholder="Type a message"
      />
      <Button className="l7" variant="primary" onClick={handelClick}>
        send
      </Button>
    </FlexStyle>
  );
};

export default Send;
