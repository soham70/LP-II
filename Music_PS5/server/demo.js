const express= require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const songdetails=require("./song")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/songdetails',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

console.log("MongoDB Connected!")

app.get('/songs',async(req,res)=>{
    const songlist=await songdetails.find();
    res.json(songlist)
})

async function insertdata()
{
    const song = new songdetails({song:"Ek Din App",film:"Yes Boss",director:"Jatin-Lalit",artist:"ShahRukh Khan"})
    const res= await song.save()
}

// insertdata()


app.listen(4000,()=>{
    console.log("App listening on Port 4000!")
})
