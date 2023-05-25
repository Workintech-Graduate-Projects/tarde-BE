const router = require("express").Router();
const md = require("./users-model");
const mw = require("./users-middleware");
const bcrypt = require("bcryptjs");

//KAYIT

router.post(
  "/register",
  mw.usernameGecerlimi,
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

// router.post(
//   "/login",
//   mw.kullaniciAdiVarmi,
//   mw.sifreGecerlimi,
//   async (req, res, next) => {
//     try {
//       let isValidPassword = bcrypt.compareSync(
//         req.body.username,
//         ExistUsers.password
//       );
//       if (isValidPassword) {
//         res.json({
//           message: `Hoşgeldin ${req.body.username}`,
//         });
//       } else {
//         //LOGIN  -  cookie session
//         req.session.user_id = req.ExistUsers.user_id;
//         next({
//           status: 401,
//           message: "Geçersiz kriter",
//         });
//       }
//     } catch (error) {
//       next(error);
//     }
//   }
// );

// //ÇIKIŞ

// router.get("/logout", (req, res, next) => {
//   try {
//     if (req.session.user_id) {
//       req.session.destroy((err) => {
//         if (err) {
//           res.status(500).json({ message: "Hata oluştu" });
//         } else {
//           res.json({ message: "Çıkış Yapıldı" });
//         }
//       });
//     } else {
//       res.status(200).json({
//         message: "Oturum bulunamadı",
//       });
//     }
//   } catch (error) {}
// });

module.exports = router;
