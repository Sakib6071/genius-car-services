import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const handleSignOut =()=>{
    signOut()
  }
  return (
    <header className=" sticky top-0 z-50">
      <div className="grid grid-cols-5 py-5 bg-green-500">
        <div className="col-span-2 text-center">
          <p className=" text-3xl font-bold">LOGO</p>
        </div>
        <div className=" col-span-3 grid grid-cols-4">
          <div>
            <a href="home#experts" className="text-xl font-semibold">
              Experts
            </a>
          </div>
          <div>
            <Link to={"/about"} className="text-xl font-semibold">
              About
            </Link>
          </div>
          <div>
            <a href="home#services" className=" text-xl font-semibold">
              Service
            </a>
          </div>
          <div>
            {
                user?<Link to={"/login"}>
                    <button className="" onClick={handleSignOut}>Logout</button>
                </Link>: <Link to={"/login"} className="text-xl font-semibold">
              Login
            </Link>
            }
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
