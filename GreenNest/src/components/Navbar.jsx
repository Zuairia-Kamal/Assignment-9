import { Link, NavLink } from "react-router";
import logo from "../assets/img/logo-1.jpg";
import logo1 from "../assets/img/logo (13).jpg";
import logo2 from "../assets/img/logo (10).jpg";
import logo3 from "../assets/img/logo (5).jpg";
import logo4 from "../assets/img/logo (11).jpg";
//import logo5 from "../assert/img/image (1).jpg";


import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { use, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
// import MyLink from "./MyLink";

const Navbar = () => {
 
  const { user, signoutUserFunc, setUser, loading, setLoading } =
    useContext(AuthContext);
  console.log(user);

  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  console.log(loading);

  return (

    <div className="bg-slate-100f py-2 border-b border-green "
     >
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img
    src="https://i.ibb.co/pByT0nms/i1.jpg"
    alt="GreenNest Logo"
    className="w-[55px] rounded-full hover:scale-105 transition-transform duration-300"
  />
          <div><h1 className="text-green-500 font-bold font-serif text-lg">Green Nest</h1></div>
        </figure>
        <ul className="flex items-center gap-2">
          <li>
            <MyLink to={"/"}>🏡Home🏡</MyLink>
          </li>
          <li>
            <MyLink to={"/plants"}>🌳Plants🌲</MyLink>
          </li>
          {user || (
            <li>
              <MyLink to={"/profile"}>Profile</MyLink>
            </li>
          )}
        </ul>

        {loading ? (
          <ClockLoader color="#e74c3c" />
        ) : user ? (
          <div className="text-center space-y-3">
            
            <div className=" ">
          {user && user?.email ? (
            <div>
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
              <p>{user.displayName}</p>
            </div>
          ) : (
            <img src={userIcon} alt="" />
          )}
        </div>

            <div
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } 
              }
            >
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="text-white/80">{user?.email}</p>
              <button onClick={handleSignout} className="my-btn">
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
            <Link to={"/signin"}>Sign in</Link>
          </button>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
