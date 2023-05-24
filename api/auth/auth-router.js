const router = require("express").Router();
const mw = require("./auth-middleware");
const bcryptjs = require("bcryptjs");
const userModel = require("../users/users-model");

router.post(
  "/register",
  mw.sifreGecerlimi,
  mw.usernameGecerlimi,
  async (req, res, next) => {
    try {
      let hashedPassword = bcryptjs.hashSync(req.body.password);
      let model = { username: req.body.username, password: hashedPassword };
      let insertedUser = await userModel.ekle(model);
      res.status(201).json(insertedUser);
    } catch (error) {
      next(error);
    }
  }
);

router.post("/login", mw.kullaniciAdiVarmi, async (req, res, next) => {
  try {
    let isValidPassword = bcryptjs.compareSync(
      req.body.username,
      ExistUsers.password
    );
    if (isValidPassword) {
      res.json({
        message: `Hoşgeldin ${req.body.username}`,
      });
    } else {
      //LOGIN  -  cookie session
      req.session.user_id = req.ExistUsers.user_id;
      next({
        status: 401,
        message: "Geçersiz kriter",
      });
    }
  } catch (error) {
    next(error);
  }
});
router.get("/logout", (req, res, next) => {
  try {
    if (req.session.user_id) {
      req.session.destroy((err) => {
        if (err) {
          res.status(500).json({ message: "Hata oluştu" });
        } else {
          res.json({ message: "Çıkış Yapıldı" });
        }
      });
    } else {
      res.status(200).json({
        message: "Oturum bulunamadı",
      });
    }
  } catch (error) {}
});
router.post(
  "/register",
  mw.sifreGecerlimi,
  mw.kullaniciAdiVarmi,
  (req, res, next) => {
    try {
      let hashedPassword = bcryptjs.hashSync(req.body.password);
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
