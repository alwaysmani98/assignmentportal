const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

connectDB();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/users", userRoutes);
app.use("/api/admins", adminRoutes);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

module.exports = app;
