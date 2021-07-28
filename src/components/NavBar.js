import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Styling
import { NavB, Logo } from "../styles";

//Actions
import { logout } from "../store/actions/authActions";

//Unused props
const NavBar = (props) => {
  const dispatch = useDispatch();

  let history = useHistory(); //Change to const

  const user = useSelector((state) => state.user.user);

  //Rename to handleLogout
  const handelLogout = () => {
    dispatch(logout());
    history.push("./");
  };
  return (
    <NavB className="navbar navbar-expand-lg navbar-light bg-light">
      <Logo exact to="/">
        <img
          src="https://www.pngkit.com/png/full/123-1237333_black-bow-tie-logo.png"
          alt="logo"
        ></img>

        {user && <h3>Hello {user.username}</h3>}
      </Logo>
      <div>
        {user ? (
          <button
            style={{ margin: "10px" }} //Remove inline styling
            type="button"
            class="btn btn-secondary"
            onClick={handelLogout}
          >
            Log Out
          </button>
        ) : (
          <>
            <Link to="/signin">
              <button
                style={{ margin: "10px" }} //Remove inline styling
                type="button"
                class="btn btn-secondary"
              >
                Sign In
              </button>
            </Link>

            <Link to="/signup">
              <button
                style={{ margin: "10px" }} //Remove inline styling
                type="button"
                class="btn btn-secondary"
              >
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
