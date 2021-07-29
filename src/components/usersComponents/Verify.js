import { useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";
import { verify } from "../../store/actions/authActions";
import "../../App.css";

const Verify = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handelVerify = () => {
    dispatch(verify(user));
    toast("Check Your Email To Verify", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <h2 className="b8"> !! Please Verify Your Email !! </h2>

      <button
        style={{ margin: "10px" }}
        type="button"
        class="b9"
        onClick={handelVerify}
      >
        Verify
      </button>
      <ToastContainer />
    </>
  );
};

export default Verify;
