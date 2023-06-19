const express = require("express");
const { getAllUsers, NewUsers } = require("../Controller/UserControlller");


const router = express.Router();

router.route("/getallusers").get(getAllUsers);
router.route("/newuser").post(NewUsers);

module.exports = router;
