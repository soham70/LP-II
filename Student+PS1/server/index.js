const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const studentmarks=require('./student')

const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb://localhost:27017/studentmarks',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

console.log("MongoDB Connected!")

app.get('/students',async(req,res)=>{
    const studlist=await studentmarks.find();
    res.json(studlist)
})

async function insertdata()
{
    const student = new studentmarks({
        name:"Soham",
        rollno:33174,
        wad:50,cc:50,cns:50,dsbda:50,ai:50
    })
    const res= await student.save()
}

// insertdata()

app.listen(4000,()=>{
    console.log("server is listening on Port 4000")
})

