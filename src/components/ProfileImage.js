import React, { Component } from 'react';
import profilePic from '../images/profile.jpg';

function ProfileImage(props) {
  return <div className='profile-picture__container'>
    <img className='profile-picture' src={profilePic} alt='about' />
  </div>;
}

export default ProfileImage;
