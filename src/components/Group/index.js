//styling//components

//
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ChatDiv, FlexStyle, GroupDiv } from "../../styles";
import Chat from "../Chat";
import GCard from "../HCard/GCard";
import Send from "../Send";

const Group = (props) => {
  const history = useHistory();
  const _user = useSelector((state) => state.user.user);

  const groups = useSelector((state) => state.groups.groups);
  const loading = useSelector((state) => state.groups.loading);

  const [wanted, setWanted] = useState(null);

  if (!_user) history.push("/");

  if (loading) return <h2>loading !!!</h2>;

  const filteredList = groups
    .filter((group) => {
      let keep = false;
      group.users.forEach((user) => {
        if (user.userId === _user.id) keep = true;
      });
      return keep;
    })
    .map((group) => (
      <div onClick={() => setWanted(group)}>
        <GCard group={group} _user={_user} />
      </div>
    ));

  return (
    <FlexStyle>
      <GroupDiv>{filteredList}</GroupDiv>
      <ChatDiv>
        <Chat wanted={wanted} />
        <Send wanted={wanted} />
      </ChatDiv>
    </FlexStyle>
  );
};

export default Group;
