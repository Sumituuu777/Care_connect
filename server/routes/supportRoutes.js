const express = require("express");
const router = express.Router();

const SupportRequest = require("../models/SupportRequest");
const classifySupportRequest = require("../services/geminiService");

// POST - Create support request
router.post("/", async (req, res) => {
  try {
    const {
      name,
      age,
      contact,
      category,
      description,
    } = req.body;

    const aiResult = await classifySupportRequest({
      category,
      description,
    });

    const request = await SupportRequest.create({
      name,
      age,
      contact,
      category,
      description,
      priority: aiResult.priority,
      aiSummary: aiResult.summary,
    });

    res.status(201).json({
      success: true,
      message: "Support request submitted successfully",
      request,
    });
  } catch (error) {
    console.error("Support request error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to submit support request",
    });
  }
});


// GET - Get all support requests
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
    console.error("Fetch requests error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch support requests",
    });
  }
});


module.exports = router;