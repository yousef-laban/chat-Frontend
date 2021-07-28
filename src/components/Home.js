import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//Styling
import { Center } from "../styles";

const Home = () => {
  const user = useSelector((state) => state.user.user);

  let history = useHistory(); //Change to const

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
