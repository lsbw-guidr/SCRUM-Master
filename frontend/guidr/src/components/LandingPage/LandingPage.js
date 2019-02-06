import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {fetchAllPublicTrips} from '../../actions/index';

import Login from '../Authorization/Login';


class LandingPage extends React.Component {

    componentDidMount = () => {
        if(!this.props.publicTrips || this.props.publicTrips.length === 0){
            this.props.fetchAllPublicTrips();
        }
    }

    render(){
        return(
            <div>
                LANDING PAGE
                <Login />
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    uuid: state.uuid,
    publicTrips: state.publicTrips
})

export default withRouter(connect(mapStateToProps, {fetchAllPublicTrips})(LandingPage));