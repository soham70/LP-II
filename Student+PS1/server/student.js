const mongoose=require('mongoose')

const studentmarks=new mongoose.Schema({
    name:{type:String,required:true},
    rollno:{type:Number,required:true},
    wad:{type:Number,required:true},
    cc:{type:Number,required:true},
    dsbda:{type:Number,required:true},
    cns:{type:Number,required:true},
    ai:{type:Number,required:true},
})

module.exports=mongoose.model('studentmarks',studentmarks)