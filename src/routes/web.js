const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getABC,
  getHoidanit,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
} = require("../controllers/homeController"); //lay dieu tu controller

router.get("/", getHomepage); //getHomepage xu li ben controller
router.get("/abc", getABC); //ABC lay va xu li ben controller
router.get("/hoidanit", getHoidanit);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser); //goi ham ben controller
router.post("/update-user", postUpdateUser); //goi ham ben controller

router.post("/delete-user/:id", postDeleteUser); //goi ham ben controller
router.post("/delete-user", postHandleRemoveUser); //goi ham ben controller

module.exports = router;
