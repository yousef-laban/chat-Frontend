// import { Link } from "react-router-dom";
import { NavB, Logo } from "../styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/authActions";

const NavBar = (props) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handelLogout = () => {
    dispatch(logout());
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
            style={{ margin: "10px" }}
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
                style={{ margin: "10px" }}
                type="button"
                class="btn btn-secondary"
              >
                Sign In
              </button>
            </Link>

            <Link to="/signup">
              <button
                style={{ margin: "10px" }}
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
