const Message= require("../models/message");

const sendMessage= async (req,res)=>{
  try{
    const {receiverId, message}=req.body;

    if(!receiverId||!message){
      return res.status(400).json({
        message:"Receiver and message are required"
      })
    }

    const newMessage= await Message.create({
      sender:req.user,
      receiver: receiverId,
      message:message
    })
    res.status(201).json({
      message:"message sent successfully",
      data: newMessage
    });
  }
  catch(error){
    res.status(500).json({
      message:"Server error",
      error:error.message
    })
  }
}

const getMessages = async (req,res)=>{
  try{
    const {userId}=req.params;

    const messages = await Message.find({
      $or:[
        {
          sender:req.user, receiver:userId
        },
        {
          sender:userId, receiver:req.user
        }
      ]
    }).sort({createdAt:1})
    res.status(200).json(messages)
  }
  catch(error){
    res.json(500).json({message:"Server Error",
      error: error.message
    })
  }
}

module.exports={sendMessage,getMessages}