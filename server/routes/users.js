const { User, validate } = require("../models/user");
const express = require("express");
const router = express.Router();

router.post("/createUser", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("User already exists!");
  } else {
    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    await user.save();
    res.send(user);
  }
});

router.get("/getUsers", async (req, res) => {
  User.find({}, function (error, users) {
    let userMap = {};
    users.forEach(function (user) {
      userMap[user._id] = user;
    });
    res.send(userMap);
  });
});

module.exports = router;
