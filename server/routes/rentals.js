const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('', (req, res)=> {
    Rental.find({}, (err, rentals) => {
        if(err)
            return res.json(err);

        return res.json(rentals)
    });
});

router.get('/:id', (req, res) =>{
    const rentalId = req.params.id;

    Rental.findById(rentalId, (err, rentalStored) => {
        if(err){
            return res.status(422).send({
                success : false,
                errors : [{title: 'Rental error', detail: 'Could not find Rental'}]
            });
        }
        else
        {
            return res.json({
                success : true,
                rental : rentalStored
            });
        }
    });
});

module.exports = router;