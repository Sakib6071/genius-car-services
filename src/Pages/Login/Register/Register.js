import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';
import { sendEmailVerification } from 'firebase/auth';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Register = () => {
  const [errors,setErrors]=useState('')
  const [agree,setAgree]=useState(false)
  const navigate = useNavigate()
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:(true)});
 
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const handleRegistration= async (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword=e.target.confirmPassword.value;
        if(agree){         
        if(password===confirmPassword){
          await createUserWithEmailAndPassword(email, password)
          await updateProfile({ displayName:name});
          
            console.log('Updated profile');
          
      navigate("/")
        }
        else{
          setErrors("Password not matched")
        }
        }
        else{
          setErrors("Accept terms and condition")
        }
    }
    if(user){
      console.log(user);
    }
    if(loading){
      return <Loading></Loading>
    }
    return (
        <div>
          <PageTitle title="Register"></PageTitle>
        <div className="mt-5 w-4/5 md:w-2/5 mx-auto bg-gray-700 rounded-lg px-10 py-8">
          <p className="text-center text-3xl text-yellow-500">Register Here</p>
          <form onSubmit={handleRegistration}>
            <div className="name-field">
              <label className="text-white text-xl">Enter Your Name</label>{" "}
              <br />
              <input
                className=" px-2 py-3 w-full rounded-lg"
                type="text"
                placeholder="Your Name"
                name="name"
              />
            </div>
            <div className="email-field my-5">
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
  
            <div className="confirm-password-field mb-5">
              <label className="text-white text-xl">Confirm Password</label>{" "}
              <br />
              <input
                className=" px-2 py-3 w-full rounded-lg"
                type="password"
                placeholder="Retype Password"
                name='confirmPassword'
              />
            </div>
            <div>
              <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
              <label className='text-white' htmlFor="terms">Accept Terms & Conditions</label>
            </div>

            <div className="register-button mt-5 text-right">
              <input
              disabled={!agree}
                className={`hover:cursor-pointer w-full bg-yellow-500 text-black px-5 py-2 text-xl font-semibold rounded-lg ${agree?"bg-yellow-500 text-black":"disabled: bg-yellow-200 text-gray-500"}`}
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <div><p className='text-red-500'>{errors}</p></div>
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
        <SocialLogin></SocialLogin>
        
        </div>
      </div>
    );
};

export default Register;