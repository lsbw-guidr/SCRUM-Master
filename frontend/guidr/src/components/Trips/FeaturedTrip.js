// displays a rich example of a featured trip

import React from 'react';

const FeaturedTrip = (props) => {
    return (
        <div className = 'featured-trip'>
            {props.trip.title}
            {props.trip.description}
        </div>
    )
}

export default FeaturedTrip;