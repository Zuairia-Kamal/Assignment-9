import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




const Profile = () => {
  const { user, updateProfileFunc, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [email, setEmail] = useState(user?.email || "");
  const navigate = useNavigate();


  const handleUpdate = (e) => {
    e.preventDefault();
    


   
    updateProfileFunc({ displayName: name, photoURL: photo })
      .then(() => {
        setUser(prev => ({ ...prev, displayName: name, photoURL: photo, email }));
        toast.success("✅ Profile updated successfully!");
        navigate("/updateprofile");
      })
      .catch((e) => toast.error(e.message));
  };



  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setUser(prev => ({ ...prev, displayName: newName })); 
  };
    const handlePhotoChange = (e) => {
    const newPhoto = e.target.value;
    setPhoto(newPhoto);
    setUser(prev => ({ ...prev, photoURL: newPhoto }));
  };


  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setUser(prev => ({ ...prev, email: newEmail }));
  };






  return (
    <div
      className="bg-[#f9f8f6] min-h-screen flex justify-center items-center px-4"
      style={{ backgroundImage: "url('https://i.ibb.co/rK7MXWLQ/image3-1.jpg')" }}
    >
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center border border-green-100">
        <img
          src={photo || "https://i.ibb.co/vfxY2bP/logo-1.jpg"}
          alt="profile"
          className="h-32 w-32 rounded-full mx-auto border-4 border-green-500 shadow-sm mb-4 object-cover"
        />


        <h2 className="text-3xl font-serif font-bold text-green-800 mb-2">
          {name || "Your Name"}
        </h2>
        <p className="text-gray-600 mb-6">{email || "your@email.com"}</p>


        <form onSubmit={handleUpdate} className="space-y-5 text-left">
          <div>
            <label className="block text-green-800 font-semibold mb-1">
              Display Name 😀
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-green-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>


          <div>
            <label className="block text-green-800 font-semibold mb-1">
              Photo URL 📸
            </label>
            <input
              type="text"
              placeholder="Enter photo URL"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full border border-green-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>


          <div>
            <label className="block text-green-800 font-semibold mb-1">
              Email ✉️
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-green-300 rounded-md p-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>


         <Link to="/updateprofile">
         <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md font-semibold hover:bg-green-800 transition"
          >
            🌹 Update Profile 🌹
          </button></Link>
        </form>


        <p className="text-sm text-gray-500 mt-6">
          Keeping your profile updated helps personalize your experience.
        </p>
      </div>
    </div>
  );
};


export default Profile;