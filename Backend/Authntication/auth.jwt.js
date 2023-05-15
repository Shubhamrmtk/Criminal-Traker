const jwt=require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config()
let jwtSecreateKey=process.env.JWT_SECRET_KEY

const generatToken=(id)=>{
    return jwt.sign(id,jwtSecreateKey)
}


const verifyToken=(token)=>{
    const verified=jwt.verify(token,jwtSecreateKey)

}

async function authenticate(req, res, next) {
    try {
        // console.log(req.headers)
      const token =await req.headers.authorization
      console.log(token)
      const decodedToken =await jwt.verify(token, jwtSecreateKey);
      console.log(decodedToken)

      req.userId = decodedToken
      next();
    } catch (error) {
      res.status(401).json({ message: 'Authentication failed!' });
    }
  }



module.exports={generatToken,verifyToken,authenticate}