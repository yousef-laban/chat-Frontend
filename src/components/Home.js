//styling
import { useSelector } from "react-redux";
import { Center } from "../styles";
import '../App.css';
import pic1 from "../images/pic1.png"
import pic2 from "../images/pic2.png"

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
        <div>
          <h1 className="b3">Have your best chat </h1>
         
          <img  className="b6" src={pic1}/>
          <img  className="b7" src={pic2}/>
       
        
        
        </div>
      )}
    </Center>
  );
};

export default Home;
