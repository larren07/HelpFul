const router = require('express').Router();
const bcrypt = require("bcrypt")
const Admin = require('../models/admin')

router.get('/',(req,res)=>{
    res.send("Hello Admin")
})

router.post('/register',async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password,salt)
        const newAdmin = new Admin({
            firstName:req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPass,
        })

        const admin = await newAdmin.save()
        res.status(200).json(admin)
    } catch(err){
        res.status(500).json(err)
    }
})

router.post('/login',async (req,res)=>{
    try{
        const admin = await Admin.findOne({email:req.body.email})
        !admin && res.status(400).json("Wrong credentials!");

        const validated = await bcrypt.compare(req.body.password, admin.password);
        !validated && res.status(400).json("Wrong credentials!");

        const { password, ...others } = admin._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err)
    }
    
})

module.exports = router;