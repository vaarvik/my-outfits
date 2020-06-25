const router = require("express").Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");

// router.post("/user/:id", (req, res, next) => {
//   User.findOne({ _id: req.params.id })
//     .then((user) => {
//       try {
//         if (bcrypt.compareSync(req.body.password, user.password))
//           res.send(user);
//         else throw "Wrong credentials";
//       } catch (error) {
//         res.send({ error });
//       }
//     })
//     .catch(next);
// });

router.post("/registrer", (req, res, next) => {
  const userData = req.body;
  const password = bcrypt.hash(req.body.password, 10, (err, hash) => {
    userData.password = hash;
    User.create(userData)
      .then((user) => res.send(user))
      .catch(next);
  });
});

router.post("/login", (req, res, next) => {
  User.findOne({ username: req.body.username }).then((user) => {
    try {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send(user);
      } else {
        throw "Wrong credentials";
      }
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  });
});

module.exports = router;
