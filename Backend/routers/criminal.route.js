const route=require('express').Router()
const { authenticate } = require('../Authntication/auth.jwt')
const { sequelize } = require('../models')

// To add criminals
route.post('/criminal',authenticate,async(req,res)=>{
    try {
        const {firstName,lastName,age,gender,address,sentence,latitude,longitude}=req.body
        if(firstName&&lastName&&age&&gender&&address,sentence&&latitude&&longitude){
            const data=await sequelize.models.Criminal.create({firstName,lastName,age,gender,address,sentence,latitude,longitude})
        res.send(data)

        }else{
            res.send("please fill all the filed")
        }
        
        
    } catch (error) {
        res.send(error.message)
        
    }
})
route.get('/criminals',authenticate,async(req,res)=>{
    try {
        const data=await sequelize.models.Criminal.findAll({})
        res.send(data)
    } catch (error) {
        res.send(400)
        
    }
})

route.delete('/criminal/:id',authenticate,async(req,res)=>{
    try {
        const data=await sequelize.models.Criminal.destroy({where:{id:req.params.id}})
        res.send({message:'deleted',data})
    } catch (error) {
        res.send(500)
        
    }
})
route.patch('/criminal/:id',authenticate,async(req,res)=>{
    try {
        const data=await sequelize.models.Criminal.update({ ...req.body}, {
            where: {
              id:req.params.id
            }
          });
        res.send({message:'INFO IS UPDATED',data})
    } catch (error) {
        res.send(500)
        
    }
})



module.exports=route
