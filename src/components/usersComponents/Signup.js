import { FormCenter } from "../../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../store/actions/authActions";
import { useHistory } from "react-router-dom";
// import { useSelector } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  //   const products = useSelector((state) => state.products.products);

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
      </div>

      <div className="form-group">
        <label>E-mail: </label>
        <input
          className="form-control"
          placeholder="Enter the Password"
          type="email"
          name="email"
          //   value={product.price}
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
        Creat
      </button>
    </FormCenter>
  );
};

export default Signup;
