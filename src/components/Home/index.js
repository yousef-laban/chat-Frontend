import { useSelector } from "react-redux";
import { Center } from "../../styles";

import "../../App.css";
import pic1 from "../../images/pic1.png";
import pic2 from "../../images/pic2.png";

import { useHistory } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  let history = useHistory();

  return (
    <Center>
      {/* This condition should be outside the return */}
      {/* move it outside and write it as an if condition, 
      and use Redirect */}
      {user ? (
        // instead of user.verify === false => !user.verify
        user.verify === false ? (
          // REVIEW: Without the .
          history.push("./verify")
        ) : (
          history.push("./profile")
        )
      ) : (
        // history.push(!user.verify ? "" : "")
        <div>
          <h1 className="b3">Have your best chat </h1>

          <img className="b6" src={pic1} alt={"pic1"} />
          <img className="b7" src={pic2} alt={"pic2"} />
        </div>
      )}
    </Center>
  );
};

export default Home;
