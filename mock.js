const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.post("/token", (req, res) => {
  const { username, password } = req.query;
  if (username !== "admin" || password !== "admin") {
    res.status(401).json();
  }
  const loginInfo = {
    userName: "Admin",
    userRole: 1,
    avatar: "",
    locate: "vi-VN",
  };
  res.status(200).json(loginInfo);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
