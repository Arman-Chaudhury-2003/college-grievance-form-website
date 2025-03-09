const express = require("express");
const router = express.Router();
const Grievance = require("../models/Grievance");

// Get all grievances
router.get("/", async (req, res) => {
  try {
    const grievances = await Grievance.find();
    res.json(grievances);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Submit a grievance
router.post("/submit", async (req, res) => {
  try {
    const { name, email, description } = req.body;
    const newGrievance = new Grievance({ name, email, description });
    await newGrievance.save();
    res.status(201).json({ message: "Grievance submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
