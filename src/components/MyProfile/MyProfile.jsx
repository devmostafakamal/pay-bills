import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router";

function MyProfile() {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <div>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-md text-center">
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
          />
        ) : (
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center text-4xl">
            {user.displayName ? user.displayName.charAt(0) : "U"}
          </div>
        )}
        <h2 className="text-xl font-semibold mb-2">
          {user.displayName || "No name set"}
        </h2>
        <p className="text-gray-600 mt-2">{user.email}</p>
        <Link to="/updateProfile">
          <button className="px-4 py-2 bg-emerald-300 mt-4 rounded">
            Update Profile
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MyProfile;
