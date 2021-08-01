//styling//components

//
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import GCard from "../HCard/GCard";

const Group = (props) => {
  const history = useHistory();
  const _user = useSelector((state) => state.user.user);

  const groups = useSelector((state) => state.groups.groups);
  const loading = useSelector((state) => state.groups.loading);

  if (!_user) history.push("/");

  if (loading) return <h2>loading !!!</h2>;

  const filteredList = groups
    .filter((group) => {
      let keep = false;
      group.users.forEach((user) => {
        if (user.id === _user.id) keep = true;
      });
      return keep;
    })
    .map((group) => <GCard group={group} _user={_user} />);

  return (
    <>
      <div>{filteredList}</div>
    </>
  );
};

export default Group;
