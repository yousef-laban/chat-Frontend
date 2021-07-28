import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//Styling
import { FormCenter } from "../../styles";

//Actions
import { signin } from "../../store/actions/authActions";

const Signin = () => {
  const dispatch = useDispatch();

  let history = useHistory(); //Change to const

  const newUser = {
    username: "",
    password: "",
  };

  const [user, setUser] = useState(newUser);

  const resetForm = () => {
    setUser({
      username: "",
      password: "",
    });
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
    resetForm();
  };

  return (
    <FormCenter onSubmit={handleSubmit}>
      <h3> Sign In</h3>
      <br /> {/* Add a margin rather than using a break */}
      <div class="col-auto">
        <label class="sr-only" for="inlineFormInputGroup">
          Username
        </label>
        <div class="input-group ">
          <div class="input-group-prepend">
            <div class="input-group-text">@</div>
          </div>
          <input
            type="text"
            class="form-control"
            id="inlineFormInputGroup"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label>password : </label>
        <input
          className="form-control"
          placeholder="Enter the Password"
          type="password"
          name="password"
          onChange={handleChange}
        />
      </div>
      <br />
      <button type="submit" className="btn btn-primary" value="create">
        Sign In
      </button>
    </FormCenter>
  );
};

export default Signin;
