//styling

//components
import SearchBar from "./SearchBar";

//
import { useState } from "react";
import { useSelector } from "react-redux";
import HCard from "../HCard";
import { useHistory } from "react-router";

const NewChat = (props) => {
  const history = useHistory();
  const _user = useSelector((state) => state.user.user);

  const groups = useSelector((state) => state.groups.groups);
  const loading2 = useSelector((state) => state.groups.loading);

  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const [query, setQuery] = useState("");

  if (!_user) history.push("/"); // REVIEW: Redirect not push

  if (loading || loading2) return <h2>loading !!!</h2>;

  let name = [];

  // REVIEW: .filter returns a new
  groups
    .filter((group) => {
      let keep = false;
      group.users.forEach((user) => {
        if (user.id === _user.id) keep = true;
      });
      return keep;
    })
    .filter((group) => {
      group.users.forEach((user) => {
        if (+user.id !== +_user.id) name.push(user.username);
      });
    });

  // const newArray = groups
  // .filter((group) => group.users.some((user) => user.userId === _user.id))
  // .forEach((group) => {
  //   name = group.users.filter((user) => user.username);
  // });

  const filteredList = users
    .filter((user) => user.username.toLowerCase().includes(query.toLowerCase()))
    .filter((user) => user.id !== _user.id)
    .filter((user) => !name.includes(user.username))
    .map((user) => (
      <HCard user={user} _user={_user}>
        {user.username}
      </HCard>
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      {query === "" ? <></> : <div>{filteredList}</div>}
    </>
  );
};

export default NewChat;
