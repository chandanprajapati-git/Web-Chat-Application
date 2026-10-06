const express=require("express");
const router=express.Router();
const {sendMessage,getMessages}= require("../controllers/messagecontroller")
const protect= require("../middlewares/authMiddleware")


router.post("/",protect,sendMessage);
router.get("/:userId",protect,getMessages)
module.exports= router;