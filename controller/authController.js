const jwt=require("jsonwebtoken");
const UserModel = require("../model/User");
const bcrypt=require("bcryptjs");
exports.login=async(req,res,next)=> {
    const {email,password}=req.body;
    try{
        const user=await UserModel.findOne({email});
        if(!user){
            const error=new Error("Invalid credencials");
            error.statusCode=400;
            throw error
        }
        const validPassword=await bcrypt.compare(password,user.password)
        if(!validPassword){
            const error=new Error("Invalid credencials");
            error.statusCode=400;
            throw error;
        }
        const data={id:user._id,role:user.role,email:user.email};
        const jwtToken=await jwt.sign({...data},process.env.JWT_SECRETKEY,{expiresIn:process.env.JWT_EXPRESIN});
        res.cookie("jwt",jwtToken,{
            httpsOnly:true,
            secure:process.env.NODE_ENV==="production",
            maxAge: Number(process.env.COOKIE_AGE),
        })
        res.status(200).json({
            message:"Login successfully",
            id:user._id,
            role:user.role,
            email:user.email,
        });
    }catch(error) {

        next(error)
    }
}

exports.logout=async(req,res,next)=> {
    try{
        res.clearCookie("jwt",{
            httpsOnly:true
        })
        res.status(200).json({message:"logout successfully"})
    }catch(error){
        next(error)
    }
}