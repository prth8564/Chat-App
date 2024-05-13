import mongoose from "mongoose";
import Conversation from "../models/conversation.js";
import Message from '../models/messages.js';
import conversation from "../models/conversation.js";
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

export const getMessages = async(req,res)=> {
    try{
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all : [senderId , userToChatId]}
        }).populate("messages");

        if(!conversation) res.status(200).json([]);

        const messages = conversation.messages;
        //console.log(messages,"--------------messages");
        res.status(200).json({messages});
    }
    catch(err){
        console.log(err.message);
    }
}

export default messageController;