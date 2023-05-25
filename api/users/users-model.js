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
  let filteredUsers = await db("users").where(username);
  return filteredUsers;
};
const ThinkFitForid = async (user_id) => {
  let filteredUsers = await db("users").where("user_id", user_id).first();
  //await ve first birlikte kullanıldığında sorun çıkarabiliyor.
  // sorun çıkarsa filteredUsers[0] dene.
  return filteredUsers;
};
const insertUser = async (user) => {
  await db("users").insert(user);
  return {message:"Üye olundu"}
};
module.exports = { FindOut, ThinkFitFor, ThinkFitForid, insertUser,ThinkFitForName };
