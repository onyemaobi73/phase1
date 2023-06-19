const express = require("express");
const route  = require("./Routes/router");
require("./Config/database");

const port = 2030;

const app = express();

app.use(express.json());

// testing of server
app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is up and running",
  });
});

app.use("/api", route); //router

app.listen(port, () => {
  console.log("server is up and running", port);
});
