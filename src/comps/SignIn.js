import React from "react";
import { auth, provider } from "../firebase/config";

function SignIn() {
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };

  return (
    <button className='sign-in' onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
}
export default SignIn;
