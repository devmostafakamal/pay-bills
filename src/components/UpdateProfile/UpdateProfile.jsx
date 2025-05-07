import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext"; // Adjust the import path
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");
  console.log(name, photoURL);
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      })
        .then(() => {
          setMessage("Profile updated successfully!");
          setUser({ ...user, displayName: name, photoURL: photoURL });
        })
        .catch((error) => {
          console.log(error);
        });
      navigate("/profile");
    } catch (error) {
      setMessage("Error updating profile: " + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-center">Update Profile</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Display Name</label>
          <input
            type="text"
            className="input w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Photo URL</label>
          <input
            type="text"
            className="input w-full"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-full" type="submit">
          Update Information
        </button>
        {message && <p className="text-center text-sm mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default UpdateProfile;
