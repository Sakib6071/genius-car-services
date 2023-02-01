import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorField;
    if (error || error1) {
        errorField=
          <div>
            <p className='text-red-500'>Error: {error?.message}{error1?.message}</p>
          </div>
        
      }
      
      if (user || user1) {
        navigate('/home')
      }
    const handleGoogleSignIn=()=>{
        signInWithGoogle();
    }
    const handleGitHubSignIn=()=>{
        signInWithGithub()
    }
    if(loading||loading1){
      return <Loading></Loading>
    }
    return (
        <div>
            {
                errorField
            }
           <div className="sign-in-google">
            <button onClick={handleGoogleSignIn} className="text-white py-3 px-2 my-2 text-left w-full border-2 rounded-lg">
              <FontAwesomeIcon
                className=" w-1/6 inline-block text-left"
                icon={faGoogle}
                size={"xl"}
              ></FontAwesomeIcon>
              <span className="text-center w-5/6 mx-auto inline-block ">
                Continue With Google
              </span>
            </button>
          </div>  
           <div className="sign-in-github">
            <button onClick={handleGitHubSignIn} className="text-white py-3 px-2 my-2 text-left w-full border-2 rounded-lg">
              <FontAwesomeIcon
                className=" w-1/6 inline-block text-left"
                icon={faGithub}
                size={"xl"}
              ></FontAwesomeIcon>
              <span className="text-center w-5/6 mx-auto inline-block ">
                Continue With GitHub
              </span>
            </button>
          </div>  
           <div className="sign-in-facebook">
            <button className="text-white py-3 px-2 my-2 text-left w-full border-2 rounded-lg">
              <FontAwesomeIcon
                className=" w-1/6 inline-block text-left"
                icon={faFacebook}
                size={"xl"}
              ></FontAwesomeIcon>
              <span className="text-center w-5/6 mx-auto inline-block ">
                Continue With Facebook
              </span>
            </button>
          </div>  
        </div>
    );
};

export default SocialLogin;