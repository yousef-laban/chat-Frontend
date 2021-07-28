import { useDispatch, useSelector } from "react-redux";

//Actions
import { verify } from "../../store/actions/authActions";

const Verify = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  return (
    <>
      <h2>Please Verify Your Email </h2>

      <button
        style={{ margin: "10px" }} //Remove inline styling
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
