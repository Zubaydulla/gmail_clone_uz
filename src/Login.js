import { Button } from "@mui/material";
import { getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { setUserlogin } from "./features/userSlice";
import { provider } from "./firebase";
import "./Login.scss";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          setUserlogin({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt="Gmail Login"
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
