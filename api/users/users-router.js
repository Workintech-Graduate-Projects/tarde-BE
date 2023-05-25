const router = require("express").Router();
const mw = require("../users/users-model");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res, next) => {
  try {
    const model = {
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
    };

    const newUsers = await mw.insertUser(model);
    res.status(201).json(newUsers);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
