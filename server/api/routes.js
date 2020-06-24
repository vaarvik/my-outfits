const User = require("../models/users");

const router = require("express").Router();

router.post("/user/:id", (req, res, next) => {
  User.findOne({ _id: req.params.id })
    .then((user) => {
      if (req.body.password === user.password) res.send(user);
      else throw new Error("Wrong credentials");
    })
    .catch(next);
});

module.exports = router;
