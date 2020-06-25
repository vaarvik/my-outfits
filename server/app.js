const express = require("express");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
const routes = require("./api/routes");
const User = require("./models/users");

//database setup
mongoose
  .connect("mongodb://localhost/my-outfits", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is set up");
    // mongoose.connection.collection("users").drop();
    // User.find().then((users) => console.log(users));
  })
  .catch((err) => console.log("connection error", err));

// mongoose.connection
//   .once("open", () => {
// User.create({
//   username: "myssli",
//   email: "jsfkdl@gjsl.com",
//   password: "secret1234",
//   garments: [
//     {
//       type: "bikini",
//       img:
//         "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRYcGMFLgJMxs4UjK67ZlF4uFY6evH3rFXKfSsmTqGFz2hq_n6EQ6SxgyVJF8gRjPhpXmEhnBvADyw&usqp=CAc",
//     },
//     {
//       type: "pants",
//       img:
//         "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSD6kb7ovj8mho6J17J80rAbwVbRs6P_kAjbFwZP_PYNHKCIyvBFWEcc6OifEVxEu6GJYJE1Zo_QQ&usqp=CAc",
//     },
//   ],
// });
// })
// .on("error", (err) => {
//   console.log("connection error", err);
// });

//server setup
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Now listening to port 4000");
});
