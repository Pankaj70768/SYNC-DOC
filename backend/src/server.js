require("dotenv").config();

const connectDB = require("./config/db");

const express = require("express");

const authRoutes = require("./routes/authRoutes");

const documentRoutes = require("./routes/documentRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/documents", documentRoutes);

app.get("/", (req, res) => {
  res.send("SYNC-DOC Backend is running!");
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "SYNC-DOC API is working"
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});