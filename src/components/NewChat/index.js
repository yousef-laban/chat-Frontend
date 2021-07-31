//styling

//components
import SearchBar from "./SearchBar";

//
import { useState } from "react";
import { useSelector } from "react-redux";
import HCard from "../HCard";
import { useHistory } from "react-router";

const NewChat = (props) => {
  const user = useSelector((state) => state.user.user);
  const history = useHistory();

  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const [query, setQuery] = useState("");

  if (!user) history.push("/");

  if (loading) return <h2>loading !!!</h2>;

  console.log(users);

  const filteredList = users
    .filter((user) => user.username.toLowerCase().includes(query.toLowerCase()))
    .map((user) => <HCard user={user}> {user.username}</HCard>);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      {query === "" ? <></> : <div>{filteredList}</div>}
    </>
  );
};

export default NewChat;
