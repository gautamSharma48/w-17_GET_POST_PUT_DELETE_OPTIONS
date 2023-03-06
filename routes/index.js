const express = require("express");
const router = express.Router();
const { getUser, createUser , deleteUser , updateUser} = require("../controller");

router.get("/",getUser);
router.post("/",createUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);
router.options("/");

module.exports = router;
