//component
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Signin from "./components/usersComponents/Signin";
import Signup from "./components/usersComponents/Signup";

//styleing
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";

//
import { Route, Switch } from "react-router";
import Verify from "./components/usersComponents/Verify";

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

        <Route path="/verify">
          <Verify />
        </Route>
      </Switch>
    </>
  );
}

export default App;
