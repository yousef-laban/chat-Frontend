import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//Styling
import { FormCenter } from "../../styles";

//Actions
import { signup } from "../../store/actions/authActions";

const Signup = () => {
  const dispatch = useDispatch();

  let history = useHistory(); //Change to const

  const newUser = {
    username: "",
    password: "",
    email: "",
    phoneNum: "",
  };

  const [user, setUser] = useState(newUser);

  const resetForm = () => {
    setUser({
      username: "",
      password: "",
      email: "",
      phoneNum: "",
    });
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
    resetForm();
  };

  return (
    <FormCenter onSubmit={handleSubmit}>
      <h3> Creat New User</h3>
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
            //   value={product.name} Remove if unused
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
          //   value={product.price} Remove if unused
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>E-mail: </label>
        <input
          className="form-control"
          placeholder="Enter the Password"
          type="email"
          name="email"
          //   value={product.price} Remove if unused
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Phone Num. : </label>
        <input
          className="form-control"
          type="tel"
          name="phoneNum"
          onChange={handleChange}
        />
      </div>
      <br />
      <button type="submit" className="btn btn-primary" value="Creat">
        {/* Create not Creat*/}
        Creat {/* Create not Creat*/}
      </button>
    </FormCenter>
  );
};

export default Signup;
