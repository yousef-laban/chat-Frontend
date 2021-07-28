import { useSelector } from "react-redux";
import { Center } from "../styles";

import { useHistory } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  let history = useHistory();

  return (
    <Center>
      {user ? (
        user.verify === false ? (
          history.push("./verify")
        ) : (
          history.push("./profile")
        )
      ) : (
        <h1>Please Sign In</h1>
      )}
    </Center>
  );
};

export default Home;
