const router = require("express").Router();
let User = require("./../models/User");

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const nic = req.body.nic;
  const email = req.body.email;
  const password = req.body.password;

  const NewUser = new User({
    username,
    nic,
    email,
    password,
  });

  NewUser.save()
    .then(() => {
      res.json("User Added");
    })
    .catch(() => {
      console.log(err);
    });
});

router.route("/display").get((req, res) => {
  User.find()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { username, nic, email, password } = req.body;

  const updateUser = {
    username,
    nic,
    email,
    password,
  };
  const update = await User.findByIdAndUpdate(userId, updateUser)
    .then(() => {
      res.status(200).send({ status: "User updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error in updating data" });
    });
});

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await User.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User deleted" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error in deleting data", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;

  const user = await User.findById(userId)
    .then((user) => {
      res.status(200).send({ status: "User fetched", user });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error in fetching user data", error: err.message });
    });
});

module.exports = router;
