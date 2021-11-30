const express = require("express")
const app = express()
const cors = require('cors')

const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(express.json())
app.use(
    express.urlencoded({ extended: true })
);
app.use(cors())
const dotenv = require('dotenv')
dotenv.config({ path: './config.env'})

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(console.log("MongoDB connected"))
.catch((error)=>{
    console.log(console.log(error))
});


dotenv.config({ path: './config.env'})



app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use('/client',require('./routes/client'))
app.use('/admin',require('./routes/admin'))
app.use('/help',require('./routes/help'))
app.use('/conversation',require('./routes/conversation'))
app.use('/message',require('./routes/message'))


app.listen(5000)

