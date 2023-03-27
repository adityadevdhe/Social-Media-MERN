import imageModel from "../Models/imageModel.js";
export const getImages=async(req,res)=>{
    const id=req.params.id;
    try{
        const image=await imageModel.find();
        res.status(200).json(image);
    }catch(error){
        res.status(500).json(error);
    }

}