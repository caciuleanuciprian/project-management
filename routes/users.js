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
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    await user.save();
    res.send(user);
  }
});

router.get("/getUser/:username", async (req, res) => {
  let username = req.params;
  User.findOne(username)
    .then((userFound) => {
      if (!userFound) {
        return res.status(404).end();
      }
      return res.status(200).json(userFound);
    })
    .catch((error) => next(error));
});

router.put("/updateUser/:id", async (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    },
    { new: true, returnOriginal: false }
  )
    .then((userUpdated) => {
      if (!userUpdated) {
        return res.status(404).end();
      }
      return res.status(200).json(userUpdated);
    })
    .catch((error) => next(error));
});

router.delete("/deleteUser/:id", async (req, res) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, function (error, response) {
    if (error) {
      res
        .status(404)
        .json(`User with id:${id} was not deleted. Something went wrong.`)
        .end();
    } else {
      res.status(200).json(`User with id:${id} deleted succesfully`);
    }
  });
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
