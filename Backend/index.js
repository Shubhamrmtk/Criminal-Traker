const express=require('express')
const app=express()
const cors=require('cors')
const dotenv = require('dotenv');
const port=3000
dotenv.config()
app.use(cors())
app.use(express.json())



app.use('/',require('./routers/criminal.route'))
app.use('/',require('./routers/user.route'))
let jwtSecreateKey=process.env.JWT_SECRET_KEY
console.log(jwtSecreateKey)


// app.get('/',async(req,res)=>{
//     try {
//         res.send('Hello')
//     } catch (error) {
//         res.send(error)
//     }
// })

app.listen(port,()=>{
    console.log(`your listening on port ${port}`)
})