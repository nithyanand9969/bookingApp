const express = require("express");
const {
  loginController,
  registerController,
  authController,
} = require("../controllers/userCtrl");
const AuthMiddelWare = require("../middlewares/AuthMiddelWare");

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/getUserData", AuthMiddelWare, authController);

module.exports = router;
