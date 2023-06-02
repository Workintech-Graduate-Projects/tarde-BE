const router = require("express").Router();
const md = require("../users/user-model");
const mw = require("../users/user-middleware");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { limitli, onlyRole } = require("../users/user-middleware");

const { JWT_SECRET } = require("../../config/config");

const generateToken = (user) => {
  const payload = {
    subject: user.id,
    name: user.username,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, JWT_SECRET, options);
};

//KAYIT

router.post(
  "/register",
  mw.ayniUserNameVarmiKontrolu,
  mw.sifreGecerlimi,
  mw.roleAdiGecerlimi,
  async (req, res, next) => {
    try {
      const model = {
        username: req.body.username,
        role_id: req.body.role_id,
        password: bcrypt.hashSync(req.body.password, 10),
      };

      const newUsers = await md.insertUser(model);
      res.status(201).json(newUsers);
    } catch (error) {
      next(error);
    }
  }
);
/* router.post("/register", mw.roleAdiGecerlimi, async (req, res, next) => {
  try {
    const userBeing = {
      username: req.body.username,
      role_id: req.body.role_id,
      password: req.body.password,
    };
    const insertedUser = await md.roleEkle(userBeing);
    res.status(201).json(insertedUser);
  } catch (error) {
    next(error);
  }
}); */

// GİRİŞ

router.post(
  "/login",
  /*  mw.roleAdiGecerlimi, */
  mw.sifreGecerlimi,
  async (req, res, next) => {
    const user = req.body;
    const registeredUser = await md.ThinkFitForName(user.username);
    console.log(registeredUser);

    if (
      registeredUser &&
      bcrypt.compare(user.password, registeredUser.password)
    ) {
      const token = generateToken(user);
      res.status(200).json({
        message: `Welcome ${registeredUser.username}, token:${token}`,
      });
    } else {
      res.status(403).json({ message: `Giris yapilamadi` });
    }
  }
);

//ÇIKIŞ
router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).json({ message: "cikis hata verdi" });
      } else {
        res.status(200).json({ message: "cikis basarili " });
      }
    });
  }
});

router.post("/reset_password", (req, res) => {
  res.status(200).json({ message: "password reset calisiyor" });
});
router.get("/:user_id", limitli, onlyRole("admin"), (req, res, next) => {
  Users.roleIdyeGoreBul(req.params.user_id)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

module.exports = router;
