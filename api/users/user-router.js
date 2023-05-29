const router = require("express").Router();
const md = require("./user-model");
const mw = require("./user-middleware");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/config");

//KAYIT

router.post(
  "/register",
  mw.ayniUserNameVarmiKontrolu,
  mw.sifreGecerlimi,
  async (req, res, next) => {
    try {
      const model = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
      };

      const newUsers = await md.insertUser(model);
      res.status(201).json(newUsers);
    } catch (error) {
      next(error);
    }
  }
);

// GİRİŞ

router.post(
  "/login",
  mw.kullaniciAdiVarmi,
  mw.sifreGecerlimi,
  async (req, res) => {
    const user = req.body;
    const registeredUser = req.currentExistUser;
    if (
      registeredUser &&
      bcrypt.compareSync(user.password, registeredUser.password)
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
function generateToken(user) {
  const payload = {
    subject: user.id,
    name: user.username,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, JWT_SECRET, options);
}

module.exports = router;
