import React from 'react';
import './ProfileLeft.css';
import Search from '../Search/Search';
import FollowersCard from '../FollowersCard/FollowersCard';
import InfoCard from '../InfoCard/InfoCard';

const ProfileLeft = () => {
  return (
    <div className='ProfileSide'>
        <Search/>
        <InfoCard/>
        <FollowersCard/>

    </div>
  )
}

export default ProfileLeft