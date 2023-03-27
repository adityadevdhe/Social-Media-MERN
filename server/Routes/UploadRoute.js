import express from "express";
const router=express.Router();
import multer from 'multer';
import imageModel from "../Models/imageModel.js";
import fs from 'fs';
import { getImages } from "../Controllers/imageController.js";
/*const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images');
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    },
});
const upload=multer({storage:storage});
router.post('/',upload.single("file",(req,res)=>{
    try{
        return res.status(200).json("File Uploaded Successfully")
        console.log("FIle uploaded success")
    }catch(error){
        console.log(error);
    }
}));*/
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
const upload=multer({
    storage:Storage
})
router.post("/", upload.single("file"), (req, res) => {
    const saveImage =  imageModel({
      userid:req.body.userid,
      name: req.body.name,
      img: {
        data: fs.readFileSync("public/images" +"/" +req.file.filename),
        contentType: "image/png",
      },
    });
    saveImage
      .save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send('image is saved')
  });
router.get('/',getImages);

export default router;