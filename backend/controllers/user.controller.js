import User from "../models/user.mode.js";

export const getUserForSidebar = async(req,res)=> {
    try{
        const loggedInUserId = req.user._id;

        const allUsers = await User.find({_id:{$ne : loggedInUserId}}).select("-password");

        res.status(200).json(allUsers);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}