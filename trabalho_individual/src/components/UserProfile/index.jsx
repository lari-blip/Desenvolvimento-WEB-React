import React from 'react';
import { ProfileContainer, ProfileImage, UserName, SettingsIcon } from './style';
import userImage from '../../assets/image.jpeg'; 
import { FaCog } from 'react-icons/fa';

const UserProfile = ({ name }) => (
  <ProfileContainer>
    <ProfileImage src={userImage} alt="User Profile" />
    <UserName>{name}</UserName>
    <SettingsIcon>
      <FaCog size={18} color="#fff" />
    </SettingsIcon>
  </ProfileContainer>
);

export default UserProfile;
