import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {fetchAllPublicTrips} from '../../actions/index';

class LandingPage extends React.Component {

    componentDidMount = () => {
        if(this.props.publicTrips == null){
            this.props.fetchAllPublicTrips();
        }
    }

    render(){
        return(
            <div>
                LANDING PAGE
                
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