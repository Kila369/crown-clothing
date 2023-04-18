import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

import SingUp from "../sing-up/sing-up.component";
import Button from "../../components/button/button.component";

const SingIn = () => {
  useEffect(() => {
    const getResult = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    getResult();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sing in page</h1>
      <Button onClick={logGoogleUser} buttonType="google">
        Sing in with Google Popup
      </Button>
      <Button onClick={signInWithGoogleRedirect} buttonType="google">
        Sing in with Google Redirect
      </Button>
      <SingUp />
    </div>
  );
};

export default SingIn;
