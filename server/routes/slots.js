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

