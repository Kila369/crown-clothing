import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

import { AuthenticationContainer } from "./authentication.styles";

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
    <AuthenticationContainer>
      <SignIn />
      {/* <Button onClick={signInWithGoogleRedirect} buttonType="google">
        Sing in with Google Redirect
      </Button> */}
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
