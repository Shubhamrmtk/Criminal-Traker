const route=require('express').Router()
const { sequelize } = require('../models')
const {generatToken,authenticate}=require('../Authntication/auth.jwt')
// User Registration

route.post('/user',async(req,res)=>{
    try {
        const {firstName,lastName,email,password}=req.body
        if(firstName&&lastName&&email&&password){
        const data=await sequelize.models.User.create({firstName,lastName,email,password})

        res.send({
            message:'your registed now ',
            data
        })

        }else{
            res.send("please fill all the filed")
        }
        
        
    } catch (error) {
        res.send(error.message)
        
    }
})
route.post('/login',async(req,res)=>{
    try {
        const {email,password}=req.body
        if(email&&password){
            const data=await sequelize.models.User.findOne({where:{email}})
            if(data && password==data.password){
                const token=generatToken(data.id)
                res.status(200).send({token})

            }else{
                res.status(400).send({message:"Invalid Email or password"})
            }

            
        }else{
            res.status(400).send({message:'Please fill all the details'})
        }
    } catch (error) {
        res.status(500).send({error:error.message})
        
    }
})
route.get('/userdetails/',authenticate,async(req,res)=>{
    try {
    const data=await sequelize.models.User.findOne({where:{id:req.userId}})
        res.send(data)
    } catch (error) {   
        res.send(error)
        
    }
})

module.exports=route
    