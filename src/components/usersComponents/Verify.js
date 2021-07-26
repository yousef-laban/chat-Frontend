import { useDispatch } from "react-redux";

// import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { verify } from "../../store/actions/authActions";

const Verify = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  //   let history = useHistory();

  return (
    <>
      <h2>Please Verify Your Email </h2>

      <button
        style={{ margin: "10px" }}
        type="button"
        class="btn btn-secondary"
        onClick={() => dispatch(verify(user))}
      >
        Verify
      </button>
    </>
  );
};

export default Verify;
