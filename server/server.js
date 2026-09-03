const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const supportRoutes = require("./routes/supportRoutes");
const volunteerRoutes = require("./routes/volunteerRoutes");

const app = express();

const PORT = process.env.PORT || 5000;


// Database
connectDB();


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.get("/", (req, res) => {
  res.json({
    message: "CareConnect API is running",
  });
});

app.use("/api/support", supportRoutes);
app.use("/api/volunteers", volunteerRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});