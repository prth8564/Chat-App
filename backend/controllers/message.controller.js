import mongoose from "mongoose";
import Conversation from "../models/conversation.js";
import Message from '../models/messages.js';
const messageController = async (req,res) => {
    try{
        const {message} = req.body;
    const {id} =req.params;
    const senderId = req.user._id;
        console.log("receiver id -------",id);
        console.log(senderId);
        const receiverId = new mongoose.Types.ObjectId(id);
        
    let Convo = await Conversation.findOne({participants:{$all:[senderId,receiverId]}});
    console.log(Convo);
    if(!Convo){
        Convo =await Conversation.create({
            participants:[senderId,receiverId]
        })
        
    }
    console.log(Convo);
    const msg = new Message({
        senderId,
        receiverId,
        messages:message
    })

    if(msg){
        Convo.messages.push(msg._id);
    }
    await Promise.all([msg.save() , Convo.save()]);
    res.status(201).json({message:"Success"});
}
catch(err){
    res.status(500).json({error:err});
}
}

export default messageController;