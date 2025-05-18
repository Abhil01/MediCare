const jwt = require('jsonwebtoken');
const User = require('../Models/User');

const auth = async(req,res,next)=>{
  
    try{
     const {token} = req.cookies;    
    
       if(!token)
       {
         return res.status(401).json({error:"Not token"});

       }
       const data = await jwt.verify(token,process.env.JWT_KEY);
       const{value} = data;
    //    console.log(value);

    const query = await User.findById(value);
    if(!query)
    {
         return res.status(401).json({error:"Not authorised"});
    }
      
      req.body = query;
       next();

    }
    catch(err)
    {
        throw new Error(err.message);
    }
}

module.exports = auth;