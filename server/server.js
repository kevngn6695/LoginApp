/* Call all needed library */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

/* Set port number to connect server with client */
const port = process.env.PORT || 5000;

/* Initialize express js */
const app = express();

/* Usage the library */
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Set a path between client and server */
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

/* Listen to initial port */
app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
