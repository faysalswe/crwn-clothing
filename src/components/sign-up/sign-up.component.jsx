import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';
import './sign-up.styles.scss';
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }
  
  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;
    if (password !== confirmPassword) {
        alert("Passwords don't match");
        return;
    }
    signUpStart(displayName, email, password);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name] : value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span> Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            onChange={this.handleChange}
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            onChange={this.handleChange}
            required
          />

          <CustomButton type="submit"> Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (displayName, email, password) => { 
    dispatch(signUpStart({displayName, email, password}))
  }
})

export default connect(null, mapDispatchToProps)(SignUp);