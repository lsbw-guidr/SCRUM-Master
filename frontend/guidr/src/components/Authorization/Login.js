import React from 'react';
import {loginUser} from '../../actions/index';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


import './login.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    // Methods

    handleInput = event => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = event => {
        event.preventDefault();

        let user = {
            username: '',
            password: ''
        }

        if(this.state.username.length < 3){
            window.alert('Username must be at least 3 characters.');
        } else {
            user.username = this.state.username;
        }

        if(this.state.password.length < 8){
            window.alert('Password must be at least 8 characters.');
        } else {
            user.password = this.state.password;
        }

        if(user.username.length > 3 && user.password.length > 8){
            this.props.loginUser(user);
        }
    }

    // Render
    render(){
        return(
            <div className = 'login-container'>
            <form onSubmit = {this.handleLogin}>
                <input type = 'text' name = 'username' value = {this.state.username} placeholder = 'Username' onChange = {this.handleInput}></input>
                <input type = 'password' name = 'password' value = {this.state.password1} placeholder = 'Password' onChange={this.handleInput}></input>
                <button type = 'submit'>Login</button>
            </form>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
})


export default withRouter(connect(mapStateToProps, {loginUser})(Login));