const express = require("express");
const app = express();
const port = 8000;
// const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://pradnyesh45:Raunak13@@cluster0.yomgj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptsjs");

const User = require("./models/user");

router.post("/register", (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 20);

  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    },
    function (err, user) {
      if (err) {
        return res
          .status(400)
          .send(
            "User was not able to create, something is wrong with the backend."
          );
      }
      const token = jwt.sign({ id: user._id }, "secret key", {
        expiresIn: 86400,
      });
      res.status(200).send({ auth: true, token: token });
    }
  );
});

router.get("/profile", (req, res) => {
  const token = req.header["x-access-token"];
  if (!token) {
    return res.status(400).send({
      auth: false,
      message: "token was not present, you are not logged in",
    });
  }
  jwt.verify(token, "secret key", (err, tokenverified) => {
    if (err) {
      return res.status(500).send({
        auth: false,
        message: "token was present, but the token is wrong.",
      });
    }
    res.status(200).send(tokenverified);
  });
});
