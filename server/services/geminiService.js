const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const classifySupportRequest = async ({
  category,
  description,
}) => {
  const prompt = `
You are an AI assistant for an NGO support management system.

Your job is to analyze a support request and classify its priority.

IMPORTANT:
- You are NOT a medical diagnosis system.
- Only help NGO volunteers organize and prioritize support requests.
- Priority must be one of: Low, Medium, High.
- Provide a short summary in one sentence.
- Do not provide medical advice.

Support request:

Category: ${category}
Description: ${description}

Return the result as JSON with exactly these fields:
{
  "priority": "Low | Medium | High",
  "summary": "short one sentence summary"
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash-lite",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "object",
        properties: {
          priority: {
            type: "string",
            enum: ["Low", "Medium", "High"],
          },
          summary: {
            type: "string",
          },
        },
        required: ["priority", "summary"],
      },
    },
  });

  return JSON.parse(response.text);
};

module.exports = classifySupportRequest;