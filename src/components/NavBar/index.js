import { NavB, Logo } from "../../styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/authActions";
import "../../App.css";
import { useHistory } from "react-router-dom";

const NavBar = (props) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  let history = useHistory();

  const handelLogout = () => {
    dispatch(logout(history));
  };
  return (
    <NavB>
      <Logo exact to="/">
        <h1 className="tt">CHATTIE</h1>
      </Logo>

      <div>
        {user ? (
          <>
            <button
              style={{ margin: "10px" }}
              type="button"
              class="b1"
              onClick={handelLogout}
            >
              Log Out
            </button>

            {/* <button
              style={{ margin: "10px" }}
              type="button"
              class="b21"
              onClick={() => history.push("/new-chat")}
            >
              new chat
            </button> */}

            <button
              style={{ margin: "10px" }}
              type="button"
              class="b2"
              onClick={() => history.push("/group")}
            >
              Chat
            </button>
          </>
        ) : (
          <>
            <Link to="/signin">
              <button style={{ margin: "10px" }} type="button" class="b1">
                Sign In
              </button>
            </Link>

            <Link to="/signup">
              <button style={{ margin: "10px" }} type="button" class="b2">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </NavB>
  );
};

export default NavBar;
