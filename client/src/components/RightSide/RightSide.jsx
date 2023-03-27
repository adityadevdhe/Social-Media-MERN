import React,{useState} from 'react';
import home from '../../Imgs/home.svg';
import bell from '../../Imgs/bell.svg';
import comment from '../../Imgs/comment.svg';
import settings from '../../Imgs/settings.svg';
import './RightSide.css';
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';
import { Link } from 'react-router-dom';

const RightSide = () => {
  const [modalOpened,setModalOpened]=useState(false);
  return (
    <div className='RightSide'>
        <div className="nav-icons">
            <Link to='../home'>
             <img src={home} alt="" />
            </Link>
           { /*<img src={settings} alt="" />
            <img src={bell} alt="" />
  <img src={comment} alt="" />*/}
        </div>
        {/*<TrendCard/>*/}
        <button className='button button-r'onClick={()=>{setModalOpened(true)}}>
       
          Share
          </button>
          <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
    </div>
  )
}

export default RightSide