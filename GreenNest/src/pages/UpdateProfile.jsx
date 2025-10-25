import React, { useContext,useEffect,useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
//import { AuthProvider} from "../context/AuthProvider";

const UpdateProfile = () => {
  const { user, loading, updateProfileFunc, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [email] = useState(user?.email || "");
  //toast.success("✅ Signed in! Profile updated successfully.");


  useEffect(() => {
    if (!loading && user) {
      toast.success("✅ Signed in! Profile updated successfully.");
    }
  }, [loading, user]);

  if (loading) {
    return <p className="text-center mt-20 text-gray-600">Loading...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-14">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full border border-gray-300 flex items-center space-x-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-400 shadow-lg">
          <img
            src={user?.photoURL || "https://i.ibb.co/DDZgp1rR/image-1.jpg"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-semibold">{name || "Your Name"}</h2>
          <p className="text-gray-600">{email || "your@email.com"}</p>
          <p className="mt-2 text-gray-700 font-semibold">@gmwi.c</p>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
