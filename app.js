const express = require("express");
const videosRoutes = require("./api/routes/videos");

const app = express();

app.use("/videos", videosRoutes);

module.exports = app;
