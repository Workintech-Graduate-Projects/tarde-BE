const userModel = require("./user-model");
const bcrypt = require("bcryptjs");
const { JWT_SECRET } = require("../../config/config");

const kullaniciAdiVarmi = async (req, res, next) => {
  try {

    let isExistUser = await userModel.ThinkFitForName({
      username: req.body.username,
    });
    if (!isExistUser || !isExistUser.length) {

    const isExistUser = await userModel.ThinkFitForName(req.body.username);

    if (isExistUser && isExistUser.length) {
      next({
        status: 404,
        message: "Girilen isim sistemde mevcut değil",
      });
    } else {
      req.currentExistUser = isExistUser[0];

      next();
    }
  } catch (error) {
    next(error);
  }
}

const sifreGecerlimi = async (req, res, next) => {
  try {
    let { password } = req.body;
    if (!password || password.length < 3) {
      next({
        status: 422,
        message: "Şifreniz en az 3 karakterden oluşmalıdır",
      });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const ayniUserNameVarmiKontrolu = async (req, res, next) => {
  try {
    let isExistUser = await userModel.ThinkFitForName({
      username: req.body.username,
    });
    if (isExistUser && isExistUser.length > 0) {
      res
        .status(401)
        .json({ message: "FATAL ERROR : !!!! Bu kullanıcı mevcuttur !!!! " });
    } else {
      req.body.password = bcrypt.hashSync(req.body.password);
      next();
    }
    //  else {
    //   req.ExistUsers = isExistUser[0];
    // }
  } catch (error) {
    next(error);
  }
};
function protected(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedJWT) => {
      if (err) {
        res.status(401).json({ message: "Token signature dogru değil" });
      } else {
        req.decodedJWT = decodedJWT;
        console.log(req.decodedJWT);
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Token provided degil" });
  }
}

module.exports = {
  kullaniciAdiVarmi,
  sifreGecerlimi,
  ayniUserNameVarmiKontrolu,
  protected,
}
