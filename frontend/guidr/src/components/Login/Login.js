import React from 'react'

import './login.css'

const Login = props => {
    return (
        <div className='login'>
          <h1>Guidr</h1>
          <h3>Welcome! Please login or register below.</h3>
          <div className='login-forms'>
            <form onSubmit={(e) => props.handleLogin(e, props.user.username, props.user.password)} className='sign-in'>
                <input 
                    onChange={props.handleLoginChanges}
                    value={props.user.username}
                    required 
                    type='text' 
                    name='username' 
                    placeholder="username" 
                />
                <input 
                    onChange={props.handleLoginChanges}
                    value={props.user.password}
                    required 
                    type='password' 
                    name='password' 
                    placeholder="password" 
                />
                <button type="submit">Login</button>
            </form>
            <form onSubmit={(e) => props.handleRegister(e, props.newUser.name, props.newUser.username, props.newUser.pw1, props.newUser.pw2)} className='register'>
                <input 
                    onChange={props.handleRegisterChanges} 
                    value={props.newUser.name} 
                    required 
                    type='text' 
                    name='name' 
                    placeholder="Enter your name" 
                />
                <input 
                    onChange={props.handleRegisterChanges} 
                    value={props.newUser.username} 
                    required 
                    type='text' 
                    name='username' 
                    placeholder="Choose a username" 
                />
                <input 
                    onChange={props.handleRegisterChanges} 
                    value={props.newUser.pw1} 
                    required 
                    type='password'
                    name='pw1' 
                    placeholder="Pick a strong password" 
                />
                <input 
                    onChange={props.handleRegisterChanges} 
                    value={props.newUser.pw2} 
                    required 
                    type='password' 
                    name='pw2' 
                    placeholder="Confirm Password" 
                />
                <button type='submit'>Create Account</button>
            </form>
          </div>
          
        </div>
    );
};

export default Login;