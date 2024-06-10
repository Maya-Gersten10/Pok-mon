import React, { useState } from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ContactInfo from '../ContactInfo/ContactInfo';
import './UserCard.css';

const UserCard = ({ user }) => {
  const [displayProfileInfo, setDisplayProfileInfo] = useState(true);

  const toggleInfo = () => {
    setDisplayProfileInfo(!displayProfileInfo);
  };

  return (
    <div className="user-card">
      <button onClick={toggleInfo}>
        {displayProfileInfo ? 'Show Contact Info' : 'Show Profile Info'}
      </button>
      {displayProfileInfo ? (
        <ProfileInfo
          avatar={user.avatar}
          name={user.name}
          username={user.username}
        />
      ) : (
        <ContactInfo
          address={user.address}
          company={user.company}
          email={user.email}
          phone={user.phone}
          website={user.website}
        />
      )}
    </div>
  );
};

export default UserCard;