const userModel = require("../users/users-model");
const bcrypt = require("bcryptjs");

async function kullaniciAdiVarmi(req, res, next) {
  try {
    let isExistUser = await userModel.goreBul({ username: req.body.username });
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
}

async function sifreGecerlimi(req, res, next) {
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
}

async function usernameGecerlimi(req, res, next) {
  try {
    let isExistUser = await userModel.ThinkFitFor({
      username: req.body.username,
    });
    if (!isExistUser) {
      next({
        status: 401,
        message: "Geçersiz kriter",
      });
    } else {
      req.ExistUsers = isExistUser[0];
    }
  } catch (error) {
    next(error);
  }
}
function limit(req, res, next) {
  try {
    if (req.session && req.session.user_id) {
      next();
    } else {
      next({
        status: 401,
        message: "Panele yalnızca danışmanlar giriş yapabilir",
      });
    }
  } catch (error) {
    next(error);
  }
}
module.exports = {
  kullaniciAdiVarmi,
  sifreGecerlimi,
  usernameGecerlimi,
  limit,
};
