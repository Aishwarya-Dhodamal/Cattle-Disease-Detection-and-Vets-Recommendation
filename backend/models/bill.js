import mongoose from 'mongoose'

const vetSchema = new mongoose.Schema({
   Name:{
        type:String,
        required:true
    },
    Qualification:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true,
    },
    District:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

const Vet = mongoose.model("Vet",vetSchema);
export default Vet