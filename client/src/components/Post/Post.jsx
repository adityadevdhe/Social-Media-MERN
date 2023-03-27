import React, { useState } from 'react';
import './Post.css';
import like from '../../Imgs/like.svg';
import dislike from '../../Imgs/dislike.svg';
import comment from '../../Imgs/comment.svg';
import share from '../../Imgs/share.svg';
import { useSelector } from 'react-redux';
import { likePost } from '../../Api/PostRequest';
import { getImage } from '../../Api/UploadRequest';

const Post = ({data}) => {
  const {user}=useSelector((state)=>state.authReducer.authData)
  const[liked,setLiked]=useState(data.likes.includes(user._id));
  const [likes,setLikes]=useState(data.likes.length);
  const [imgdata,setImgdata]=useState([]);

  const handleLike=()=>{
    setLiked((prev)=>!prev)
    likePost(data._id,user._id)
    liked? setLikes((prev)=>prev - 1):setLikes((prev)=>prev + 1)
  }
  



  return (
    <div className='post'>
        <img src={data.image? process.env.REACT_APP_PUBLIC_FOLDER + data.image:""} alt="" />
        <div className="postReact">
          <img src={liked?like:dislike} alt="" style={{cursor:"pointer"}} onClick={handleLike}/>
          <img src={comment} alt="" />
          <img src={share} alt="" />
        </div>
        <span style={{color:"var(--gray)",fontSize:'12px'}}>{likes} likes</span>
        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post