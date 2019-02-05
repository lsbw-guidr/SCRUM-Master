import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {fetchAllPublicTrips} from '../../actions/index';

class LandingPage extends React.Component {

    render(){
        return(
            <div>
                LANDING PAGE
                {this.props.publicTrips.map(trip => {
                    return (
                        <div key = {trip.id}>
                        <div>TITLE: {trip.title}</div>
                        <div>DESC: {trip.description}</div>
                        <img src = {trip.img_url} alt = {trip.id}></img>
                        </div>
                    )
                }
                    )}
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