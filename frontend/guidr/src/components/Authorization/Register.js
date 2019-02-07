import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/index';

import './register.css';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password1: '',
            password2: '',
            email: '',
        }
    }

    
    handleInput = event => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleRegister = event => {
        event.preventDefault();

        let user = {
            username: '',
            password: '',
            email: ''
        }

        if(this.state.password1.length < 8 || this.state.password2.length < 8){
            window.alert('Password must be at least 8 characters.');
        }

        if(this.state.password1 !== this.state.password2){
            window.alert('Both passwords must match!');
        } else if(this.state.password1 === this.state.password2){
            user.password = this.state.password1;
        }

        if(this.state.username.length < 3){
            window.alert('Username must be at least 3 characters.');
        } else {
            user.username = this.state.username;
        }

        // TODO: Parse email address properly
        if(this.state.email){
            user.email = this.state.email;
        }

        if(user.username.length > 3 && user.password.length > 8 && this.state.email){
            console.log(user);
            this.props.registerUser(user);
        }

    }


    render(){
        return(
            <div className = 'register-container'>
            REGISTER
            <form className = 'register-form' onSubmit = {this.handleRegister}>
                Full Name<input type = 'text' value = {this.state.username} name = 'username' onChange = {this.handleInput}></input>
                Email Address<input type = 'email' value = {this.state.email} name = 'email' onChange = {this.handleInput}></input>
                Password<input type = 'password' value = {this.state.password1} name = 'password1' onChange = {this.handleInput}></input>
                Password(Confirm) <input type = 'password' value = {this.state.password2} name = 'password2' onChange = {this.handleInput}></input>
                <button type = 'submit'>Register</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    isRegistering: state.isRegistering,
})

export default withRouter(connect(mapStateToProps, {
    registerUser,
})(Register));