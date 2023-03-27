import React, { useRef, useState } from 'react';
import './PostShare.css';
import ProfileImg from '../../Imgs/profileImg.jpg';
import video from '../../Imgs/camera.png';
import location from '../../Imgs/location.png';
import photos from '../../Imgs/photos.png';
import calender from '../../Imgs/c.png';
import xmark from '../../Imgs/xmark.svg';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../Actions/uploadAction';


const PostShare = () => {
  const loading =useSelector((state)=>state.postReducer.uploading)
  const [image,setImage]=useState(null);
  const imageRef=useRef();
  const desc=useRef();
  const dispatch=useDispatch();
  const {user}=useSelector((state)=>state.authReducer.authData);

  const onImageChange=(event)=>{
    if(event.target.files && event.target.files[0])
    {
      let img=event.target.files[0];
      setImage(img);
    }
  };
 
  const handlesubmit=(e)=>{
    e.preventDefault();
    const newPost={
      userId:user._id,
      desc:desc.current.value
    }
    
    if(image)
    {
      const data=new FormData()
      const filename=Date.now() + image.name
      data.append("name",filename)
      data.append("file",image)
      data.append("userid",user._id)
      newPost.image=filename
      console.log(newPost)
      try{
        dispatch(uploadImage(data))
      }catch(error)
      {
        console.log(error)
      }
    }
    dispatch(uploadPost(newPost))
  }
  
  const serverPublic=process.env.REACT_APP_PUBLIC_FOLDER
  
  return (
    <div className='PostShare card'>
        <img src={user.coverPicture? serverPublic+ user.profilePicture:serverPublic +"defaultProfile.png"} alt="" />
        <div>
            <input ref={desc} required type="text" placeholder="What's happening " />
            <div className="postOptions">
            <div className="options" onClick={()=>imageRef.current.click()}>
              <img src={photos} alt="" />
              Photo
            </div>
            <div className="options">
              <img src={video} alt="" />
              Video
            </div>
            <div className="options">
              <img src={location} alt="" />
              Location
            </div>
            <div className="options">
              <img src={calender} alt="" />
              Schedule
            </div>
            <button className='button ps-button ' onClick={handlesubmit}disabled={loading}>
               {loading? "Uploading ... ":"Share"}
            </button>
            <div style={{display:"none"}}>
              <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
            </div>
        </div>
        {image &&//If image is present  
           <div className="previewImage">
            <img src={xmark} style={{width:'10px'}} alt="" onClick={()=>setImage(null)}/>
            <img src={URL.createObjectURL(image)} alt="" />
           </div>
        }
        </div>
        
    </div>
  )
}

export default PostShare