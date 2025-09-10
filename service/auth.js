//the commented code is for the statefull authentication.
/* const sessionIdToUserMap= new Map(); */

const jwt = require("jsonwebtoken")
const secret="Nikunj@007"


//this below function will make tokens for us!!
function setUser(user)
{
 /*    sessionIdToUserMap.set(id,user); */

 return jwt.sign({
    _id:user._id,
    email:user.email,
    role:user.role
 },secret); 
}

/* function getUser(id)
{
   return sessionIdToUserMap.get(id);
} */

function getUser(token)
{
    if(!token) return null;
    try{
    return jwt.verify(token,secret);
    }
    catch(error){
        return null;
    }
}

module.exports={
    setUser,getUser
}