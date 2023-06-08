const db = require("../../data/db-config");

async function FindOut() {
  const allUsers = await db("users");

  const responseList = allUsers.forEach((item) => {
    delete item.password;
  });
  return responseList;
}
const ThinkFitFor = async (filter) => {
  let filteredUsers = await db("users").where(filter);
  return filteredUsers;
};
const ThinkFitForName = async (username) => {
  let filteredUsers = await db("users").where("username", username.username);
  return filteredUsers[0];
};
const ThinkFitForid = async (user_id) => {
  let filteredUsers = await db("users").where("user_id", user_id).first();
  //await ve first birlikte kullanıldığında sorun çıkarabiliyor.
  // sorun çıkarsa filteredUsers[0] dene.
  return filteredUsers;
};
const insertUser = async (user) => {
  await db("users").insert(user);
  return { message: "Üye olundu" };
};
async function roleBul() {
  const users = db("users as u")
    .leftJoin("roles as r", "u.role_id", "r.role_id")
    .select("u.user_id", "u.username", "r.role_name");
  return users;
}
async function roleGoreBul(filtre) {
  const users = db("users as u")
    .leftJoin("roles as r", "u.role_id", "r.role_id")
    .select("u.*", "r.role_name")
    .where(filtre);
  return users;
}
async function roleIdyeGoreBul(user_id) {
  const user = db("users as u")
    .leftJoin("roles as r", "u.role_id", "r.role_id")
    .select("u.user_id", "u.username", "r.role_name")
    .where("user_id", user_id)
    .first();
  return user;
}
async function roleEkle(item) {
  let create_user_id;
  await db.transaction(async (trx) => {
    let use_role_id;
    const role = await trx("roles").where("role_id", item.role_id);
    if (role) {
      use_role_id = role.role_id;
    } else {
      const role_id = await trx("users").insert("role_id", item.role_id);
      use_role_id = role_id;
    }
    const user_id = await trx("users").insert(item);
    create_user_id = user_id;
  });
  /*   await db("users").insert(item); */
  return create_user_id;
}
module.exports = {
  FindOut,
  ThinkFitFor,
  ThinkFitForid,
  insertUser,
  ThinkFitForName,
  roleBul,
  roleGoreBul,
  roleIdyeGoreBul,
  roleEkle,
};
