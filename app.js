
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
dotenv.config();

// MongoDB Config
mongoose.connect(process.env.MONGO_DB_URI,{}).then(()=>{
  console.log("mongo Connected")}
).catch ((err) => console.error(err.message));
// Routing Config
const orderRoute = require("./routes/orders");
app.use("/api",orderRoute)
// Server Running
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running at http://localhost:" + PORT);
});
