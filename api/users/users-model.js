const db = require("../../data/db-config");

async function FindOut() {
  const allUsers = await db("users");

  const responseList = allUsers.forEach((item) => {
    delete item.password;
  });
  return responseList;
}
async function ThinkFitFor(filter) {
  let filteredUsers = await db("users").where(filter);
  return filteredUsers;
}
async function ThinkFitForid(user_id) {
  let filteredUsers = await db("users").where("user_id", user_id).first();
  //await ve first birlikte kullanıldığında sorun çıkarabiliyor.
  // sorun çıkarsa filteredUsers[0] dene.
  return filteredUsers;
}
async function Add(user) {
  let inserted = await db("users").insert(user);
  return ThinkFitForid(inserted[0]);
}
module.exports = { FindOut, ThinkFitFor, ThinkFitForid, Add };
