const User=require("../models/User");

const getUsers= async (req,res)=>{
  try{
    const user= await User.find(
      {_id:{$ne:req.user}},
      "name , email, profileImage, isOnline lastSeen"
    );
    res.status(200).json(user);
  } 
  catch(error){
    res.status(500).json({
      message:"Server Error",
      error: error.message
    })
  }
}
module.exports={getUsers}