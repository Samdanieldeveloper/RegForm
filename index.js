import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import {fileURLToPath} from 'url'
import { dirname } from "path"


const fileurl = fileURLToPath(import.meta.url)
const __dirname = dirname(fileurl)
const app = express()
const port = 5009
app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.urlencoded({extended:true}))
const url = "mongodb+srv://samdanielselvirr:India_2023@cluster0.4iaig5o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url).then(()=>{
    console.log("Mongoose connected")
})
const schema = {
    name:String,
    age:Number,
    Dob:String,
    Email:String,
    password:String
}
const naming = mongoose.model("Form",schema)

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/components/index.html")
})
app.post("/",async(req,res)=>{
    try{
    const {name,age,Dob,Email,password} = req.body
    const emailid = await naming.findOne({Email:Email})
    if(!emailid){ 
    const saver =  new naming({name,age,Dob,Email,password})
    await saver.save()
    
        res.redirect("/success")
    }
    else{
        res.redirect(
            "/EmailAmbiguity"
        )
    }
    }
    catch(e){
        res.redirect("/error")
    }

})

app.get("/success",(req,res)=>{
    res.sendFile(__dirname + "/components/success.html")
})
app.get("/error",(req,res)=>{
    res.sendFile(__dirname + "/components/error.html")
})
app.get("/emailAmbiguity",(req,res)=>
{
    res.sendFile(__dirname + "/components/email.html")
})
app.use(express.json())

app.listen(port, ()=>{
    console.log("Server connected to PC successfully with ", port);
})