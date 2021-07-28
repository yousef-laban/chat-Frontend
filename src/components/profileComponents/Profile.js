import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Styling
import { DetaledImage } from "../../styles"; // File name should be DetailedImage instead of DetaledImage

const Home = () => {
  //Rename to Profile
  const user = useSelector((state) => state.user.user);
  const profiles = useSelector((state) => state.profiles.profiles);
  const loading = useSelector((state) => state.profiles.loading);

  if (loading) return <h1>loading</h1>; //Create a loading component

  const wantedProfile = profiles.find((p) => +p.userId === user.id); //Rename constant to userProfile, use profile instead of p

  if (!wantedProfile) return <h2>loading</h2>; //Create a loading component

  console.log("helo", wantedProfile); //Remove console log

  return (
    <>
      <Link to="/profile/update">
        <button
          style={{ margin: "10px" }} //Remove inline styling
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
