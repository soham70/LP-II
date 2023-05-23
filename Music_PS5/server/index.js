const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const songdetails = require('./song')

const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb://localhost:27017/songdetails',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

console.log("MongoDB Connected!! ")

app.get('/songs',async(req,res)=>{
    const songlist = await songdetails.find();
    res.json(songlist)
})

async function insertdata(){
    const song= new songdetails( {song:"SongName10",film:"Film10",director:"Director10",artist:"Artist10"})
    const res=await song.save()
}

// insertdata()

app.post('/songs',async(req,res)=>{{
    try {
        const {song,film,director,artist}=req.body;
        const songData=new songdetails(
            {
                song,film,director,artist
            }
        )
        await songData.save();
        res.status(200).json("Data added successfully")
        
    } catch (e) {
        console.log(e)
    }
}})


app.delete('/songs/:song',async(req,res)=>{
    const s=req.params.song;
    const e=await songdetails.findOneAndDelete({song:s})

})



app.listen(4000,()=>{
    console.log("Server Is Listening on Port 4000")
})
