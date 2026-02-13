const express= require("express");
const path = require("path");
const {connectToDb}=require("./connect");

const URL=require('./models/url');


const urlRoute = require("./routes/URL");
const staticRouter =require("./routes/staticRouter")
const userRouter =require("./routes/user")
const cookieParser= require("cookie-parser")
const {restrictToLoggedinUserOnly,verifyAuth, checkForAuthorization,restrictTo}=require("./middleware/auth")
const app=express();
const port =8001;

connectToDb('mongodb://localhost:27017/short-url').then(()=> console.log("Connected To Database Sir")).catch((err)=> console.log("error",err));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(checkForAuthorization);

//view-engine set
app.set("view engine","ejs");

//use res.render to load up an ejs view file
app.set("views",path.resolve("./views"));


//server side rendering example for my referance.
/* app.get('/test',async(req,res)=>{
    const allUrls= URL.find({});
return res.render("home",{urls:allUrls,})
}); */

//Routes.
app.use("/url",restrictTo(["NORMAL","ADMIN"]),urlRoute);
/* app.use("/url",restrictToLoggedinUserOnly,urlRoute); */
app.use("/users",userRouter);
app.use("/",staticRouter);
/* app.use("/",verifyAuth,staticRouter);
 */
app.get('/url/:shortID',async(req,res)=>{
    const shortID=req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortID 
    },{$push: {
        visitHistory:{timestamps: Date.now()}
    }})
    res.redirect(entry.redirectURL);
});

//portListening
app.listen(port,()=> console.log(`server started at ${port} sucessfully`));