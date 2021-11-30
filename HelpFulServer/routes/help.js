const router = require('express').Router();
const bcrypt=require('bcrypt')
const Help = require('../models/help')

router.get('/',(req,res)=>{
    res.send("Hello Help")
})


router.post('/register',async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password,salt)
        const newHelp = new Help({
            firstName:req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPass,
            city: req.body.city,
            volunteerId: req.body.volunteerId,
            helpType: req.body.helpType,
        })

        const help = await newHelp.save()
        res.status(200).json(help)
    } catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

router.post('/login',async (req,res)=>{
    try{
        const help = await Help.findOne({email:req.body.email})
        !help && res.status(400).json("Wrong credentials!");

        const validated = await bcrypt.compare(req.body.password, help.password);
        !validated && res.status(400).json("Wrong credentials!");

        const { password, ...others } = help._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;    