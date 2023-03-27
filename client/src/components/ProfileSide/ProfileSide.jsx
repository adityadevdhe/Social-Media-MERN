import React from 'react'
import Search from '../Search/Search';
import './Profile.css';
import ProfileCard from '../ProfileCard/ProfileCard';
import FollowersCard from '../FollowersCard/FollowersCard';

const ProfileSide = () => {
  return (
    <div className='profile '>
        <Search/>
        <ProfileCard location='homePage'/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileSide