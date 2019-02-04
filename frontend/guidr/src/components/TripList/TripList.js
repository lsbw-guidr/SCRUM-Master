import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {loginUser, fetchAllTrips} from '../../actions/index';

class TripList extends React.Component {
    componentDidMount(){
        const id = localStorage.getItem('uuid');
        this.props.fetchAllTrips(id);
    }

    render(){
        return(
            <div>
                THIS IS THE TRIP LIST
                {this.props.trips.map(trip => {
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
    trips: state.trips
})

export default withRouter(connect(mapStateToProps, {loginUser, fetchAllTrips})(TripList));