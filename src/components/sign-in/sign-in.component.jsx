import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import ButtonCustom from '../custom-button/custom-button.component';
import './sign-in.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' });
        } catch (error) {
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]: value});
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />
                    <div className="buttons">
                        <ButtonCustom type="submit"> Sign In  </ButtonCustom>
                        <ButtonCustom onClick={signInWithGoogle} isGoogleSignIn> Sign in with google </ButtonCustom>
                    </div>
                </form>
            </div>
        )
    }
}
