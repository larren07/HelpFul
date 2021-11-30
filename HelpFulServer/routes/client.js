const router = require('express').Router();
const bcrypt = require("bcrypt")
const Client = require('../models/client')



router.get('/',(req,res)=>{
    res.send("Hello Client")
})

router.get("/", (req,res)=>{
    Cient.find({},(err,data)=>{
      if(!err){
        res.send(data);
      } else{
        console.log(err);
      }
    })
})

router.post('/register',async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password,salt)
        const newClient = new Client({
            firstName:req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPass,
            city: req.body.city,
        })

        const client = await newClient.save()
        res.status(200).json(client)
    } catch(err){
        res.status(500).json(err)
        console.log(err)
    }
})

router.post('/login',async (req,res)=>{
    try{
        const client = await Client.findOne({email:req.body.email})
        // !client && res.status(400).json("Wrong credentials!");
        if(!client){
            console.log("Email Wrong")
            return res.status(400).json({"message" : "Email Wrong"});
            
        }

        const validated = await bcrypt.compare(req.body.password, client.password);
        // !validated && res.status(400).json("Wrong credentials!");
        if(!validated){
            console.log("Password Wrong")
            return res.status(400).json({"message" : "Password Wrong"});
        }

        const { password, ...others } = client._doc;
        res.status(200).json(others);
    }catch(err){
        console.log(err)
        return res.status(500).json(err)
        
    }
})

module.exports = router;    