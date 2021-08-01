import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { creatMessage } from "../../store/actions/messageActions";
import { FlexStyle, SearchBarStyled } from "../../styles";

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

  const handelClick = () => {
    dispatch(creatMessage(newMessage));
  };

  return (
    <FlexStyle>
      <SearchBarStyled onChange={(event) => setMessage(event.target.value)} />
      <Button variant="primary" onClick={handelClick}>
        send
      </Button>
    </FlexStyle>
  );
};

export default Send;
