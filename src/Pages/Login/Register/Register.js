import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
  const navigate = useNavigate()
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
    const handleRegistration=(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword=e.target.confirmPassword.value;
        createUserWithEmailAndPassword(email, password)
    }
    if(user){
      navigate("/")
    }
    return (
        <div>
        <div className="my-5 w-2/5 mx-auto bg-gray-700 rounded-lg px-10 py-8">
          <p className="text-center text-3xl text-yellow-500">Register Here</p>
          <form onSubmit={handleRegistration}>
            <div className="email-field">
              <label className="text-white text-xl">Enter Your Email</label>{" "}
              <br />
              <input
                className=" px-2 py-3 w-full rounded-lg"
                type="email"
                placeholder="Your Email"
                name="email"
              />
            </div>
  
            <div className="password-field my-5">
              <label className="text-white text-xl">Set Password</label> <br />
              <input
                className=" px-2 py-3 w-full rounded-lg"
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
  
            <div className="confirm-password-field">
              <label className="text-white text-xl">Confirm Password</label>{" "}
              <br />
              <input
                className=" px-2 py-3 w-full rounded-lg"
                type="password"
                placeholder="Retype Password"
                name='confirmPassword'
              />
            </div>

            <div className="register-button mt-5 text-right">
              <input
                className="hover:cursor-pointer w-full bg-yellow-500 text-black px-5 py-2 text-xl font-semibold rounded-lg"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <div className="already-account mt-2 mb-5">
            <p className=" text-gray-300">
              Already have an account?{" "}
              <Link className="text-yellow-500" to={"/login"}>
                Login
              </Link>
            </p>
          </div>
          <div className="or w-4/5 mx-auto mb-5">
            <hr className=" w-2/5 inline-block" />
            <span className="text-center text-gray-300 inline-block w-1/5">
              or
            </span>
            <hr className=" w-2/5 inline-block" />
          </div>
{/*           <div className="sign-in-google">
            <button
              onClick={handleGoogleSignIn}
              className="text-white py-3 px-2 my-2 text-left w-full border-2 rounded-lg"
            >
              <FontAwesomeIcon
                className=" w-1/6 inline-block text-left"
                icon={faGoogle}
                size={"xl"}
              ></FontAwesomeIcon>
              <span className="text-center w-5/6 mx-auto inline-block ">
                Continue With Google
              </span>
            </button>
          </div> */}
        </div>
      </div>
    );
};

export default Register;