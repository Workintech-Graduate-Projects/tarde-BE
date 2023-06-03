const userModel = require("../users/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/config");

const kullaniciAdiVarmi = async (req, res, next) => {
  try {
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
};

const sifreGecerlimi = async (req, res, next) => {
  try {
    const { password } = req.body;
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
      res.status(401).json({ message: "Bu kullanıcı mevcuttur" });
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
const limitli = (req, res, next) => {
  try {
    let tokenHeader = req.headers["authorization"];
    if (!tokenHeader) {
      next({
        status: 401,
        message: "Token gereklidir",
      });
    } else {
      jwt.verify(tokenHeader, JWT_SECRET, (err, decodeToken) => {
        if (err) {
          next({
            status: 401,
            message: "Token gecersizdir",
          });
        } else {
          req.decodeToken = decodeToken;
          next();
        }
      });
    }
  } catch (error) {
    next(error);
  }
};
const onlyRole = (role_name) => (req, res, next) => {
  try {
    if (role_name !== req.decodeToken.role_name) {
      res.status(403).json({ message: "Yalnizca admin icin" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
const roleAdiGecerlimi = (req, res, next) => {
  try {
    let { role_name } = req.body;
    if (!role_name || role_name.trim() === "") {
      role_name = "ziyaretci";
    } else if (role_name.trim() === "admin") {
      res.status(422).json({ message: "Rol adi admin olamaz" });
      return;
    } else if (role_name.trim().length > 22) {
      res
        .status(422)
        .json({ message: "Rol adi en fazla 22 karakterden olusabilir " });
      return;
    }
    req.body.role_name = role_name.trim();
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = {
  kullaniciAdiVarmi,
  sifreGecerlimi,
  ayniUserNameVarmiKontrolu,
  protected,
  limitli,
  onlyRole,
  roleAdiGecerlimi,
};
