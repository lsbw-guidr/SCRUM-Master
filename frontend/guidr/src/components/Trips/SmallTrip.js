// displays a small detail card of a trip

// displays a medium detail display of a trip

// displays a rich example of a featured trip

import React from 'react';

const SmallTrip = (props) => {
    return (
        <div className = 'small-trip'>
            {props.trip.title}
            {props.trip.description}
        </div>
    )
}

export default SmallTrip;