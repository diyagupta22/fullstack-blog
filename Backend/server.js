const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const postRoutes = require("./routes/postRoutes"); // 👈 ADD THIS

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://diyagupta:diya@ac-a9tnjiy-shard-00-00.n5juoda.mongodb.net:27017,ac-a9tnjiy-shard-00-01.n5juoda.mongodb.net:27017,ac-a9tnjiy-shard-00-02.n5juoda.mongodb.net:27017/?ssl=true&replicaSet=atlas-ix0wng-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use("/api/posts", postRoutes); // 👈 ADD THIS

app.get("/", (req, res) => {
  res.send("API running...");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});