const express = require("express");

const router = express.Router();

const SupportRequest = require("../models/SupportRequest");


// Create support request
router.post("/", async (req, res) => {
  try {
    const {
      name,
      age,
      contact,
      category,
      description,
    } = req.body;

    const request = await SupportRequest.create({
      name,
      age,
      contact,
      category,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Support request submitted successfully",
      request,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to submit support request",
    });
  }
});


// Get all support requests
router.get("/", async (req, res) => {
  try {
    const requests = await SupportRequest
      .find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      requests,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch support requests",
    });
  }
});


module.exports = router;