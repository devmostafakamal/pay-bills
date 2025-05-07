import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router";

function MyProfile() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h2>{user.email}</h2>
      <h2 className="text-xl font-semibold">{user.displayName || "No Name"}</h2>
      {/* <p>{user.photoURL}</p> */}
      <img width={520} src={user.photoURL} alt="User" />
      <Link to="/updateProfile">
        <button>Update Profile</button>
      </Link>
    </div>
  );
}

export default MyProfile;
