import { FlexStyleVer, FormCenter } from "../../styles";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../store/actions/profileActions";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const user = useSelector((state) => state.user.user);

  const newProfile = {
    fullName: "",
    image: "",
    gender: "",
    userId: user.id,
  };

  const [_profile, setProfile] = useState(newProfile);

  const resetForm = () => {
    setProfile({
      fullName: "",
      image: "",
      gender: "",
      userId: user.id,
    });
  };

  const handleChange = (event) => {
    setProfile({ ..._profile, [event.target.name]: event.target.value });
  };

  const handelUrl = (event) => {
    setProfile({ ..._profile, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(updateProfile(_profile));

    resetForm();
    history.push("/profile");
  };

  return (
    <FormCenter onSubmit={handleSubmit}>
      <h3>Edit Profile</h3>
      <br />
      <div className="form-group">
        <label>Full Name : </label>
        <input
          className="form-control"
          type="text"
          name="fullName"
          onChange={handleChange}
          placeholder="Enter Your Full Name"
        />
      </div>

      <FlexStyleVer>
        <label>Choose Gender : :</label>
        <select
          onChange={handleChange}
          name="gender"
          id="gender"
          value={_profile}
        >
          <option>Choose ...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Its Complecated">Its Complicated</option>
        </select>
      </FlexStyleVer>

      <br />

      <div className="form-group">
        <label>Image : </label>
        <input
          className="form-control-file"
          type="file"
          name="image"
          // value={product.url} we remove it becouse type file is read only
          onChange={handelUrl}
        />
      </div>
      <br></br>

      <br />
      <button type="submit" className="b17" value="Update">
        Update
      </button>
    </FormCenter>
  );
};

export default UpdateProfile;
