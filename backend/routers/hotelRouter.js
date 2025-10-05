const express= require('express');
const router= express.Router();
const Hotel = require('../models/hotelModel');
// create a new hotel
router.post('/add',async(req,res)=>{
    try{
        const hotel = new Hotel(req.body);
        const result = await hotel.save();
        res.status(201).json(result);
    }catch(err){
        console.error(err);
        res.status(500).json({error:err.message});
    }
});
 // get all hotels
 router.get('/getall',async(req,res)=>{
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        console.error(err);
        res.status(500).json({error:err.message});
    }
});
// get hotel by id
router.get('/getbyid/:id',async(req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id);
        if(!hotel){
            return res.status(404).json({error:'Hotel not found'});
        }
        res.status(200).json(hotel);
    }catch(err){
        console.error(err);
        res.status(500).json({error:err.message});
    }
});

// update hotel
router.put('/update/:id',async(req,res)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(updatedHotel);
    }catch(err){
        console.error(err);
        res.status(500).json({error:err.message});
    }
});

// delete hotel
router.delete('/delete/:id',async(req,res)=>{
    try{
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedHotel);
    }catch(err){
        console.error(err);
        res.status(500).json({error:err.message});
    }
});
//search hotel by city
router.get('/search/city/:city',async(req,res)=>{
    try{
        const hotels = await Hotel.find({city:{$regex:req.params.city,$options:'i'}});
        res.status(200).json(hotels);
    }catch(err){
        console.error(err);
        res.status(500).json({error:err.message});
    }
});
//update room availability
router.put('/availability/:roomId',async(req,res)=>{
    try{
        const roomId = req.params.roomId;
        const dates = req.body.dates;
        await Hotel.updateOne(
            {"roomNumbers._id":roomId},
            {
                $push:{"roomNumbers.$.unavailableDates":{$each:dates}}
            }
        );
        res.status(200).json({message:'Room availability updated successfully'});
    }catch(err){
        console.error(err);
        res.status(500).json({error:err.message});
    }
});
module.exports=router;