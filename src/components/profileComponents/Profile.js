//styling
//
import { useSelector } from "react-redux";
import { DetaledImage } from "../../styles";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.user.user);
  const profiles = useSelector((state) => state.profiles.profiles);

  const loading = useSelector((state) => state.profiles.loading);

  if (loading) return <h1>loading</h1>;
  const wantedProfile = profiles.find((p) => +p.userId === user.id);

  return (
    <>
      <Link to="/profile/update">
        <button
          style={{ margin: "10px" }}
          type="button"
          class="btn btn-secondary"
        >
          Edit Profile
        </button>
      </Link>
      <DetaledImage src={wantedProfile.image} alt={wantedProfile.fullName} />
      <p>Name : {wantedProfile.fullName}</p>
      <p>Gender : {wantedProfile.gender}</p>
      <p>Phone Num : {user.phoneNum}</p>
      <p> Email : {user.email}</p>
    </>
  );
};

export default Home;
