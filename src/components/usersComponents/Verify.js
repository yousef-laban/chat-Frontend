import { useDispatch } from "react-redux";


// import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { verify } from "../../store/actions/authActions";
import "../../App.css"

const Verify = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  //   let history = useHistory();

  return (
    <>
      <h2 className="b8"> !!  Please Verify Your Email  !! </h2>

      <button
        style={{ margin: "10px" }}
        type="button"
        class="b9"
        onClick={() => dispatch(verify(user))}
      >
        Verify
      </button>
    </>
  );
};

export default Verify;
