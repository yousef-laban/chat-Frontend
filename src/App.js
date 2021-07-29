//component
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Signin from "./components/usersComponents/Signin";
import Signup from "./components/usersComponents/Signup";
import Profile from "./components/profileComponents/Profile";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles";
import { useState } from "react";

//
import { Route, Switch } from "react-router";

import Verify from "./components/usersComponents/Verify";
import Verifying from "./components/usersComponents/Verifying";
import UpdateProfile from "./components/profileComponents/UpdateProfile";

//
import { Route, Switch } from "react-router";

function App() {
  const [counter, setCounter] = useState(0);

  const sw = () => {
    setCounter(counter + 1);
  };
  const y = () => {
    if (counter % 3 === 0) return "light";
    if (counter % 3 === 1) return "dark";
    if (counter % 3 === 2) return "reverse";
  };


    
  return (
    <ThemeProvider theme={theme[y()]}>
    <GlobalStyle />
 
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

      </ThemeProvider>

  );
  }

export default App;
