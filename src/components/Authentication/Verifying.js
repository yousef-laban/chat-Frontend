import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { verifying } from "../../store/actions/authActions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Verifying = () => {
  let token = useParams().token;
  const localToken = localStorage.getItem("Token");
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  let history = useHistory();

  const check = () => {
    if (token === localToken) {
      user.verify = true;
      // REIVEW: toast should happen in the actrion not here
      toast("sucessfully Verified", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(verifying(user, history));
    } else return <h2>Some Thing Went Wromg !! try again </h2>;
  };

  return (
    <>
      {check()}
      <ToastContainer />
    </>
  );
};

export default Verifying;
