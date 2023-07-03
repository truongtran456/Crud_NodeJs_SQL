const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers(); //chờ ham ben CRUDService.js chạy xong mới lấy dl
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("ABCCCCCCCCCCCCC");
};

const getHoidanit = (req, res) => {
  res.render("sample.ejs");
};

//controller gọi hàm này khi nhấn button thêm User
const postCreateUser = async (req, res) => {
  let email = req.body.email; //lay bien tu client, name tu html ejs
  let name = req.body.myname;
  let city = req.body.city;
  // let{email, name, city}=req.body;
  // lay tu client va thêm dữ liệu vào database
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email,name,city) VALUES(? , ? , ?)`,
    [email, name, city] //truyen tham số động vào
  );
  res.send("Created user succeed !");

  // lay tu client va thêm dữ liệu vào database
  // connection.query(
  //   `INSERT INTO Users (email,name,city)
  //     VALUES(? , ? , ?)`,
  //   [email, name, city], //truyen tham số động vào
  //   function (err, results) {
  //     console.log(results);
  //     res.send("Created user succeed !");
  //   }
  // );
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id; //lay ra id
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user }); //truyen qua view
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email; //lay bien tu client, name tu html ejs
  let name = req.body.myname;
  let city = req.body.city;
  let userId = req.body.userId;
  // let{email, name, city}=req.body;
  await updateUserById(email, name, city, userId);

  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userId = req.params.id; //lay ra id
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};

const postHandleRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  getABC,
  getHoidanit,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
}; //xuat du lieu ra
