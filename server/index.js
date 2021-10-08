require("dotenv-safe").config();
const express = require("express");
const path = require("path");
const { router } = require("./router/router");
const app = express();

app.use(express.json());
app.use("/api", router);

app.use(express.static(path.join(__dirname, "./build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, (err) => {
  if (err) {
    console.log(`Something went wrong while starting server on PORT: ${PORT}`);
    console.log(err);
    return;
  }

  console.log(`Server is listening on PORT: ${PORT}`);
});
