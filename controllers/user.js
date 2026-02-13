//the commented code is for the statefull authentication.

//all require's
const User= require("../models/user")
const {v4:uuidv4}=require("uuid");
const {getuser,setUser}=require("../service/auth")

//data entry in db from coming POST req from EJS.
async function handleUserSignup(req,res) 
{
    const {name,email,password}=req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.render("/")
}


//verify the credentials and generate sessionId/cookie.
async function handleUserLogin(req,res) 
{
    const {email,password}=req.body;
    const user = await User.findOne({email,password})
    if(!user){
        return res.render("login",{
            error:"invalid email or password"
        })
    }
   /*  const sessionId=uuidv4(); */
    /* setUser(sessionId,user) */
    const token = setUser(user)
    /* res.cookie("uid",sessionId); */
   // res.cookie("uid",token);
    res.cookie("token",token);
    return res.redirect("/");
}

module.exports={
    handleUserSignup,handleUserLogin
}