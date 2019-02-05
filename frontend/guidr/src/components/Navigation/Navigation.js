import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout, search} from '../../actions/index';

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

    render(){
        return(
            <div className = 'navigation-container'>
                <div className = 'nav-logo'>
                <div className = 'logo-img'></div>
                guidr
                </div>
                <div className = 'nav-links'>
                <Link to = '/'>HOME</Link>
                <Link to = '/features'>FEATURES</Link>
                <Link to = '/adventures'>ADVENTURES</Link>
                <Link to = '/contact'>CONTACT</Link>
                </div>
                <div className = 'nav-right'>
                <div className = 'nav-search'>
                <input type='search' placeholder = 'Search...' name = 'search' value = {this.state.search} onChange = {this.handleSearchInput}></input>
                </div>
                <div className = 'nav-login'>
                <span className = 'login-btn'>
                Login
                </span>
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
    logout,
    search,
  })(Navigation));