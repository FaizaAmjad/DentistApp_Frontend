const express = require("express");
const router = require("express").Router();
const Slots = require("../schemas/slots.js");

//Get all Slots
router.get("/", async (req, res) => {
    try {
        const allSlots = await Slots.find();
        res.status(200).json(allSlots);
    } catch (error) {
        res.status(404).json({ error: "Slots not found" });
    }
});

//Get a specific slot by entered ID
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        
        const slot = await Slots.findById(id);
        if(!slot){ 
                    return res.status(404).json({ error: "Slot not found" }); 
                 }
        res.status(200).json(slot);
    } catch (error) {
        res.status(404).json({ error: "Slot not found" });
    }
});

//Creating a new Slot - We will use it to make them available
router.post("/", async (req, res) => {
    try {
        const newSlot = new Slots( { time: req.body.time, availability: req.body.availability } )
        const savedSlot = await newSlot.save();
        
        res.status(200).json(savedSlot);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});


//Deleting a specific slot by ID - We will use it to make a slot unavailable
router.delete({});