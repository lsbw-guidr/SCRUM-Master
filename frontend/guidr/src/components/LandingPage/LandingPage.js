import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {fetchAllPublicTrips} from '../../actions/index';

import Login from '../Authorization/Login';
import FeaturedTrip from '../Trips/FeaturedTrip';
import MediumTrip from '../Trips/MediumTrip';
import SmallTrip from '../Trips/SmallTrip';
import './landing-page.css';



class LandingPage extends React.Component {

    componentDidMount = () => {
        if(!this.props.publicTrips || this.props.publicTrips.length === 0){
            this.props.fetchAllPublicTrips();
        }
    }


    render(){

        let featuredTrip;
        if(this.props.publicTrips.length > 0){
            featuredTrip = <FeaturedTrip trip = {this.props.publicTrips[0]} />;
            console.log(featuredTrip.title);
        } else {
            featuredTrip = 'Loading...';
            // TODO: Add loading animation for better UX
        }

        let medTrips = [];
        if(this.props.publicTrips.length > 0){
            for(let i = 1; i < 4; i++){
                medTrips.push(this.props.publicTrips[i]);
            }
        } else {
            medTrips = 'Loading...';
        }

        let smallTrips = [];
        if(this.props.publicTrips.length > 0){
            for(let i = 4; i < 8; i++){
                smallTrips.push(this.props.publicTrips[i]);
            }
        } else {
            smallTrips = 'Loading...';
        }

        return(

            // TODO: Three sizes of trip card components
            // Featured: image, title, author, date, comments?, tags/type,category, description, read more link to full card
            // Medium: image, date, author, title, description, readmore link to full card
            // Small: image, date(overlay), location/title, author
            // pass each of these components their props from our publicTrips array
            
            // TODO: We can ensure that these numbering methods work properly by sorting publicTrips by date (most recent first)
            <div className = 'landing-container'>
                
                <div className = 'landing-left'>
                LANDING PAGE
                <Login />
                <div className = 'landing-featured'>
                {featuredTrip}
                </div>

                <div className = 'landing-marquee'>
                <div className = 'landing-small'>
                <SmallTrip trip = {smallTrips[0]} />
                </div>
                <div className = 'landing-small'>
                <SmallTrip trip = {smallTrips[1]} />
                </div>
                <div className = 'landing-small'>
                <SmallTrip trip = {smallTrips[2]} />
                </div>  
                </div>

                </div>


                <div className = 'landing-right'>
                <div className = 'landing-right-left'>
                <div className = 'landing-med'>1
                <MediumTrip trip = {medTrips[0]} />
                </div>
                <div className = 'landing-med'>
                <MediumTrip trip = {medTrips[1]} />
                </div>
                </div>

                <div className = 'landing-right-right'>
                
                <div className = 'landing-register'>register</div>
                
                <div className = 'landing-med'>
                <MediumTrip trip = {medTrips[2]} />
                </div>
                
                </div>
                </div>
                
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