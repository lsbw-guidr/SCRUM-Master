import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser, search} from '../../actions/index';

import Login from '../Authorization/Login';

// TODO: Add reactstrap for login modal window

import './navigation.css';

class Navigation extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            search: ''
        }

    }

//methods go here
handleSearchInput = (event) => {
    event.preventDefault();

    this.setState({
        ...this.state,
        search: event.target.value
    })
}

handleLogout = event => {
    event.preventDefault();
    this.props.logoutUser();
}

    render(){

        const loginButton = (
            <div className = 'login-btn' onClick = {this.handleLogin}>
            Login
            </div>
        )

        const logoutButton = (
            <div className = 'login-btn' onClick = {this.handleLogout}>
            Logout
            </div>
        )

        let currentBtn;
        if(localStorage.getItem('jwt') || this.props.isLoggedIn === true){
            currentBtn = logoutButton;
        } else {
            currentBtn = loginButton;
        }

        return(
            <div className = 'navigation-container'>
                <div className = 'nav-logo'>
                <div className = 'logo-img'></div>
                guidr
                </div>
                <div className = 'nav-links'>
                <Link to = '/'>HOME</Link>
                <Link to = '/about'>ABOUT</Link>
                <Link to = '/guides'>GUIDES</Link>
                <Link to = '/trips'>TRIPS</Link>
                <Link to = '/contact'>CONTACT</Link>
                </div>
                <div className = 'nav-right'>
                <div className = 'nav-search'>
                <input type='search' placeholder = 'Search...' name = 'search' value = {this.state.search} onChange = {this.handleSearchInput}></input>
                </div>
                <div className = 'nav-login'>
                {currentBtn}
                </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
      isLoggedIn: state.isLoggedIn,
    }
  }
  
  export default withRouter(connect(mapStateToProps, {
    logoutUser,
    search,
  })(Navigation));