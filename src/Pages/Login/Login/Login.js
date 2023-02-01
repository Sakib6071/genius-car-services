import { async } from "@firebase/util";
import React from "react";
import { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleNewUser = () => {
    navigate("/register");
  };
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let errorField;
  if (error) {
    errorField = (
      <div>
        <p className="text-red-500">Error: {error?.message}</p>
      </div>
    );
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const handleForgetPassword = async()=>{
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
    toast("sent email")
    }
    else{
      toast('Please Enter Your Email Address')
    }
  }
  // if(Loading||sending){
  //   return <Loading></Loading>
  // }
  return (
    <div>
      <div className="mt-5 w-4/5 md:w-2/5 mx-auto bg-gray-700 rounded-lg px-10 py-8">
        <p className="text-center text-3xl text-yellow-500">Login Here</p>
        <form onSubmit={handleLogin}>
          <div className="email-field">
            <label className="text-white text-xl">Enter Your Email</label>{" "}
            <br />
            <input
              ref={emailRef}
              className=" px-2 py-3 w-full rounded-lg"
              type="email"
              placeholder="Your Email"
              name="email"
            />
          </div>

          <div className="password-field my-5">
            <label className="text-white text-xl">Enter Password</label> <br />
            <input
              ref={passwordRef}
              className=" px-2 py-3 w-full rounded-lg"
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="login-button mt-5 text-right">
            <input
              className="hover:cursor-pointer w-full bg-yellow-500 text-black px-5 py-2 text-xl font-semibold rounded-lg"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <div className="forget-password mt-2 mb-5">
          <p
            className="text-yellow-500  cursor-pointer"
            onClick={handleForgetPassword}
          >
            Forget Password?
          </p>
        </div>
        <div className="new-user mt-2 mb-5">
          <p className=" text-gray-300">
            New here?{" "}
            <span
              className="text-yellow-500 cursor-pointer"
              onClick={handleNewUser}
            >
              Register
            </span>
          </p>
        </div>
        {errorField}
        <div className="or w-4/5 mx-auto mb-5">
          <hr className=" w-2/5 inline-block" />
          <span className="text-center text-gray-300 inline-block w-1/5">
            or
          </span>
          <hr className=" w-2/5 inline-block" />
        </div>
        <SocialLogin></SocialLogin>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
