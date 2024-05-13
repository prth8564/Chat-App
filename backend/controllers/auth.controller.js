import mongoose from 'mongoose';
import User from '../models/user.mode.js';
import bcryptjs from 'bcryptjs';
import { generateToken } from '../utils/generateToken.js';


//---------------Signup-------------------------------------------------------------------------
export const signup = async (req,res) => {
    try{
        const {fullName , userName , password , confirmPassword , gender } = req.body;
        console.log(userName);
        if(password != confirmPassword){
            return res.status(400).json({
                Error:"Password does not match with confirmPassword"
            })
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password , salt);
        const user = await User.findOne({userName});
        console.log(user);
        if(user){
            return res.status(400).json({Error:"User Already Exists"});
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy/?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl/?username=${userName}`;
        const newUser = new User({
            fullName , 
            userName,
            password:hashedPassword,
            gender,
            profilePic : gender === "male" ? boyProfilePic : girlProfilePic
        })
        if(newUser){
        generateToken(newUser._id , res);
        await newUser.save();

        res.status(201).json({
            _id:newUser._id,
            username:newUser.userName,
            profilePic:newUser.profilePic,
        })
    }
    else{
        res.status(400).json({error:"Invalid user data"});
    }
        }
        catch(err){
            console.log("Error in signup controller" , err);
            res.status(500).json({error:"Internal Server Error"});
        }

}
//---------------Signup-------------------------------------------------------------------------


//663d1bbf556df05eb663b6db



//---------------Login--------------------------------------------------------------------------
export const login = async (req,res) => {
    const {username , password} = req.body;
    console.log(username);
    console.log(password);
try{
    console.log(username);
    const user = await User.findOne({userName:username});
    console.log(user.password);
    const isPassword = await bcryptjs.compare(password , user.password || "");
    if(!isPassword || !user){
        res.status(400).json({error:"Invalid username or password"});
    }

    generateToken(user._id , res) 

    res.status(200).json({
        username:user.userName,
        fullName:user.fullName,
        profilePic:user.profilePic
    });

    
}
catch(err){
    res.status(500).json({error:err.message});
}
}
//---------------Login--------------------------------------------------------------------------





//---------------Logout--------------------------------------------------------------------------
export const logout = (req,res) => {
    try{
        res.cookie("token" , "" , {maxAge:0});
        res.status(200).json({message:"logged out successfully"})
    }
    catch(err){
        res.json(500).json({error:"Internal server error"});
    }
}

//---------------Logout--------------------------------------------------------------------------