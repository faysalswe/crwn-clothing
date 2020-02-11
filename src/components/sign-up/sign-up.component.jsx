import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.action";
import { connect } from "react-redux";
import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [ userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userInfo;

  const handleSubmit = async event => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart(displayName, email, password);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInfo({...userInfo, [name]: value });
  };
  
  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span> Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
          handleChange={handleChange}
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit"> Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (displayName, email, password) => {
    dispatch(signUpStart({ displayName, email, password }));
  }
});

export default connect(null, mapDispatchToProps)(SignUp);
