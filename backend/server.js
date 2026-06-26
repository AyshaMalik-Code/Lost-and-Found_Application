const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static Folder
app.use("/uploads", express.static("uploads"));

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://ay_malik:2908290929082909@cluster0.prgsiok.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

// Routes
app.use("/api/items", require("./routes/itemRoutes"));

// Default Route
app.get("/", (req, res) => {
  res.send("Lost & Found API is Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});