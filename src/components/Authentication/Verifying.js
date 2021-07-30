import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { verifying } from "../../store/actions/authActions";

const Verifying = () => {
  let token = useParams().token;
  const localToken = localStorage.getItem("Token");
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  let history = useHistory();

  const check = () => {
    if (token === localToken) {
      user.verify = true;
      dispatch(verifying(user, history));
    } else return <h2>Some Thing Went Wromg !! try again </h2>;
  };

  return <>{check()}</>;
};

export default Verifying;
