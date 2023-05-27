const userModel = require("../users/users-model");
const bcrypt = require("bcryptjs");

const kullaniciAdiVarmi = async (req, res, next) => {
  try {
    const isExistUser = await userModel.ThinkFitForName(req.body.username);

    if (isExistUser && isExistUser.length) {
      next({
        status: 422,
        message: "Girilen isim sistemde mevcut",
      });
    } else {
      req.body.password = bcrypt.hashSync(req.body.password);
      next();
    }
  } catch (error) {
    next(error);
  }
};

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

const usernameGecerlimi = async (req, res, next) => {
  try {
    let isExistUser = await userModel.ThinkFitForName({
      username: req.body.username,
    });
    if (isExistUser[0]) {
      res
        .status(401)
        .json({ message: "FATAL ERROR : !!!! Bu kullanıcı mevcuttur !!!! " });
    } else {
      next();
    }
    //  else {
    //   req.ExistUsers = isExistUser[0];
    // }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  kullaniciAdiVarmi,
  sifreGecerlimi,
  usernameGecerlimi,
};
