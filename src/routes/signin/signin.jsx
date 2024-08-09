import React from 'react';
import "./signin.scss";
import { createUserDocumentFromAuth, signInWithGooglePopUp } from '../../utils/firebase/firebase';

const Signin = () => {

    const getGoogleUser = async() => {
        const res = await signInWithGooglePopUp();
        // console.log(res?.user,res?.user?.uid,"res?.user")
        const userDocRef = await createUserDocumentFromAuth(res?.user)
    }
  return (
    <div className=''>
        <div>
            <h2>Sign In Form</h2>
            <button onClick={getGoogleUser}>Sign In With Google</button>
        </div>
    </div>
  )
}

export default Signin;