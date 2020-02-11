import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import ButtonCustom from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.action";
import { connect } from "react-redux";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredential;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredential({...userCredential, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sing in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <ButtonCustom type="submit"> Sign In </ButtonCustom>
          <ButtonCustom
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with google
          </ButtonCustom>
        </div>
      </form>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => {
    dispatch(emailSignInStart({ email, password }));
  }
});

export default connect(null, mapDispatchToProps)(SignIn);
