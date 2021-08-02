import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { creatGroup } from "../../store/actions/groupActions";

const GroupChatForm = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const _user = useSelector((state) => state.user.user);

  let newGroup = {
    name: "",
    image: "",
    usersId: "",
  };

  const [groupChat, setGroupChat] = useState(newGroup);
  const [image, setImage] = useState(newGroup.image);

  if (loading) return <h2>loading !!!</h2>;

  const options = users
    .filter((user) => user.id !== _user.id)
    .map((user) => ({
      label: user.username,
      value: user.id,
    }));

  const handelChange = (event) => {
    setGroupChat({
      ...groupChat,
      [event.target.name]: event.target.value,
    });
  };

  const handelChangeImage = (event) => {
    setGroupChat({
      ...groupChat,
      image: event.target.files[0],
    });
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handelChangeSelect = (event) => {
    setGroupChat({
      ...groupChat,
      usersId: event,
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    const newFrom = {
      ...groupChat,
      usersId: groupChat.usersId.map((userId) => ({ userId: userId.value })),
    };
    newFrom.usersId.push({ userId: _user.id });

    dispatch(creatGroup(newFrom));
    handelRest();
  };

  const handelRest = () => {
    setGroupChat({
      name: "",
      image: "",
      usersId: "",
    });
  };

  return (
    <div className="d-lg-flex p-4 justify-content-lg-center">
      <div className="jumbotron">
        <form onSubmit={handelSubmit}>
          {image ? (
            <img
              className="mx-auto d-block"
              width="250px"
              style={{ paddingBottom: "20px" }}
              src={image}
              alt={groupChat.name}
            />
          ) : (
            ""
          )}

          <div className="form-group">
            <div className="input-group mb-3">
              <span className="input-group-text">Name</span>
              <input
                name="name"
                type="text"
                className="form-control"
                onChange={handelChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group mb-3">
              <span className="input-group-text">Image</span>
              <input
                name="image"
                type="file"
                className="form-control"
                onChange={handelChangeImage}
              />
            </div>
          </div>
          <Select
            options={options}
            onChange={handelChangeSelect}
            placeholder="Chose Group Participants ... "
            noOptionsMessage={() => "No Other Users ..."}
            isMulti
            autoFocus
            isSearchable
          />
          <button type="submit" className="btn btn-primary">
            "Submit"
          </button>
        </form>
      </div>
    </div>
  );
};
export default GroupChatForm;
