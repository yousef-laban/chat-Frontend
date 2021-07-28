//component
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Signin from "./components/usersComponents/Signin";
import Signup from "./components/usersComponents/Signup";
import Profile from "./components/profileComponents/Profile";
import Verify from "./components/usersComponents/Verify";
import Verifying from "./components/usersComponents/Verifying";
import UpdateProfile from "./components/profileComponents/UpdateProfile";

//
import { Route, Switch } from "react-router";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/signin">
          <Signin />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/verify/:token">
          <Verifying />
        </Route>

        <Route path="/verify">
          <Verify />
        </Route>
        <Route path="/profile/update">
          <UpdateProfile />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
