import jwt from 'jsonwebtoken';
import User from '../models/user.mode.js';
const protectRoute = async (req, res , next) => {
    try{
    const token = req.cookies.token;
        console.log(token);
    if(!token){
        return res.status(400).json({error:"You are not logged in"});
    }

   const decoded =  jwt.verify(token , process.env.JWT_SECRET);
   console.log(decoded);
    const user = await User.findById(decoded.userId).select("-password");
    console.log(user);
    req.user = user;
    console.log(req.user);
    next();
}
catch(err){
    res.status(400).json({error:err.message});
}
}

export default protectRoute;