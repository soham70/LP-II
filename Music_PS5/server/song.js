const mongoose=require('mongoose')

const songdetails=new mongoose.Schema({
    song:{type:String,required:true},
    film:{type:String,required:true},
    director:{type:String,required:true},
    artist:{type:String,required:true}
})

module.exports=mongoose.model('songdetails',songdetails)

