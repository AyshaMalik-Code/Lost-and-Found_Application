const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose.connect(
  "mongodb://<user name>:<user password>@ac-jqemwpb-shard-00-00.epnjwxw.mongodb.net:27017,ac-jqemwpb-shard-00-01.epnjwxw.mongodb.net:27017,ac-jqemwpb-shard-00-02.epnjwxw.mongodb.net:27017/?ssl=true&replicaSet=atlas-iukm9z-shard-0&authSource=admin&appName=Cluster0",
)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ MongoDB connection error:", err));

app.use("/api/items", require("./routes/itemRoutes"));

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
