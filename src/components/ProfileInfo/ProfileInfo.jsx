import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = ({ avatar, name, username }) => {
  return (
    <div className="profile-info">
      <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
      <h2>{name}</h2>
      <p>@{username}</p>
    </div>
  );
};

export default ProfileInfo;