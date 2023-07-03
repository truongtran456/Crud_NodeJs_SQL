const connection = require("../config/database.js");
//lay ra all User trong databas
const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users");
  return results;
};

//lay ra User co' id duoc goi ra trong database
const getUserById = async (userId) => {
  let [results, fields] = await connection.query(
    "select * from Users where id = ?",
    [userId]
  );
  //gan user = ket qua lay ra dc
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

const updateUserById = async (email, name, city, userId) => {
  // lay tu client va update dữ liệu vào database
  let [results, fields] = await connection.query(
    `UPDATE Users 
    SET email = ?, name = ?, city = ?
    WHERE id = ? `,
    [email, name, city, userId] //truyen tham số động vào
  );
};

const deleteUserById = async (id) => {
  let [results, fields] = await connection.query(
    `DELETE FROM Users WHERE  id= ?`,
    [id]
  );
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
