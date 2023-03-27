import mongoose from "mongoose";
const ImageSchema=mongoose.Schema({
    userid:{type:String,required:true},
    name:{
        type:String,
        required:true
    },
    img:{
        data:Buffer,
        contentType:String
    },
})

const imageModel=mongoose.model("images",ImageSchema);
export default imageModel;