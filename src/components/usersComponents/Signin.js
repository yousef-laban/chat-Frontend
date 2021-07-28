import { FormCenter } from "../../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";
import '../../App.css';

import { useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";

const Signin = () => {
  const dispatch = useDispatch();
  let history = useHistory();

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
      <br />

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
            //   value={product.name}
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
          //   value={product.price}
          onChange={handleChange}
        />
      </div><br></br>

      <br />
      <button type="submit" className="b15" value="create">
        Sign In
      </button>
    </FormCenter>
  );
};

export default Signin;
