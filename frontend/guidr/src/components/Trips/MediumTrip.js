// displays a medium detail display of a trip

// displays a rich example of a featured trip

import React from 'react';

const MediumTrip = (props) => {
    return (
        <div className = 'medium-trip'>
            {props.trip.title}
            {props.trip.description}
        </div>
    )
}

export default MediumTrip;