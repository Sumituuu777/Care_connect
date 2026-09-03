const express = require("express");
const router = express.Router();

const SupportRequest = require("../models/SupportRequest");
const openai = require("../config/openai");

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

    // Ask AI to analyze the support request
    const aiResponse = await openai.responses.create({
      model: "gpt-5.6-luna",
      input: [
        {
          role: "system",
          content: `
                  You are an AI assistant for a healthcare NGO.

                  Your job is to organize incoming support requests for NGO volunteers.

                  Analyze the request and return ONLY valid JSON with:
                  - priority: one of "Low", "Medium", "High"
                  - summary: a short summary in 1-2 sentences

                  Priority guidelines:
                  - High: urgent healthcare need, emergency, serious medical situation,
                    inability to access essential medication, or immediate assistance required.
                  - Medium: important healthcare or support need that is not immediately urgent.
                  - Low: general information, non-urgent assistance, or routine requests.

                  Do NOT diagnose the patient.
                  Do NOT provide medical advice.
                  Only classify the urgency and summarize the request.
                `,
        },
        {
          role: "user",
          content: `
              Category: ${category}
              Description: ${description}
          `,
        },
      ],
    });

    const aiText = aiResponse.output_text;

    // Convert AI response from JSON string to JavaScript object
    const aiData = JSON.parse(aiText);

    // Save request + AI results to MongoDB
    const request = await SupportRequest.create({
      name,
      age,
      contact,
      category,
      description,
      priority: aiData.priority,
      aiSummary: aiData.summary,
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