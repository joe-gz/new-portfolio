import React, { Component } from 'react';
import profilePic from '../../images/profile.jpg';

function ProfileImage(props) {
  return <div className='introduction-pic-container'>
    <img className='introduction-pic' src={profilePic} alt='about' />
  </div>;
}

export default ProfileImage;
