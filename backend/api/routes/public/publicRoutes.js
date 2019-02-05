const express = require('express');

const {
	trip: { getPublicTrips },
} = require('../../helpers');

const router = express.Router();

// PUBLIC ROUTER serves /public/... files //

router.get(`/trips/all`, async(req, res) => {
	let publicTrips = [];

	try{
		publicTrips = await getPublicTrips();

        // returns an array of all trips designated as "Professional"
		if(publicTrips.length > 0){
			res.status(200).json(publicTrips);
		} else {
			res.status(404).json({error: "No trips found."});
		}
	}
	catch(err){
		console.log(err);
		res.status(500).json(err);
	}
})

module.exports = router;
