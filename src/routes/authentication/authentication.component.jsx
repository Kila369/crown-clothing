import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(() => {
  //   const getResult = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   getResult();
  // }, []);

  return (
    <div className="authentication-container">
      <SignIn />
      {/* <Button onClick={signInWithGoogleRedirect} buttonType="google">
        Sing in with Google Redirect
      </Button> */}
      <SignUp />
    </div>
  );
};

export default Authentication;
