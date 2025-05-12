const express = require('express');
const User = require('./Models/User');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');
const cookieParser = require('cookie-parser');


const {Connect} = require('./Config/db');

const app = express();
require('dotenv').config();


app.use(express.json());

app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:1234', // specific origin
  credentials: true,               // allow credentials
}));




app.post('/signup',async(req,res,next)=>{
    try{
          const{name,email,password} = req.body;
           const user = new User({
            name,email,password
           });
           const data= await user.save();
           res.send("User Added successfully");

    }
    catch(err){
         next(err);
    }
    
    
})


app.post("/login",async(req,res,next)=>{
    try{
    const{email,password} = req.body;
    const query = await User.findOne({email});
    const value = query._id.toString();

    if(!query)
    {
        throw new Error("Invalid credential");
    }
    
    if(query.password !== password)
    {
         throw new Error("Invalid credential");
    }

     const jwttoken = await jwt.sign({value},process.env.JWT_KEY,{expiresIn:'1d'});
     
    res.cookie("token",jwttoken);
    res.send("Login done");
    }
    catch(err)
    {
       next(err);
    }

})

app.get("/dashboard",auth,(req,res,err)=>{
        try {  
             res.send("done");
        }
        catch(err){
            next(err);
        }
})

app.get("/profile",auth,(req,res,err)=>{
    try{
         
        // console.log(req.body);
        res.json(req.body);
    }
    catch(err)
    {
        next(err);
    }
})

app.get("/logout",(req,res,err)=>{
    res.clearCookie('token');
    res.send("Done");
})

app.use("/",(err,req,res,next)=>{
    res.status(400).json({error:err.message});
    // console.log(err.message);

})

Connect().then(()=>{
    try{
       app.listen(3030,()=>{
    console.log("Server running at 3030");
    })
    }catch(err){
        console.log(err);
    }
})
