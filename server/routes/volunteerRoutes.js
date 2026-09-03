const express = require("express");

const router = express.Router();

const Volunteer = require("../models/Volunteer");


// Register volunteer
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      location,
      role,
      availability,
      skills,
      motivation,
    } = req.body;

    const volunteer = await Volunteer.create({
      name,
      email,
      phone,
      location,
      role,
      availability,
      skills,
      motivation,
    });

    res.status(201).json({
      success: true,
      message: "Volunteer registered successfully",
      volunteer,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to register volunteer",
    });
  }
});


// Get all volunteers
router.get("/", async (req, res) => {
  try {
    const volunteers = await Volunteer
      .find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      volunteers,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch volunteers",
    });
  }
});


module.exports = router;