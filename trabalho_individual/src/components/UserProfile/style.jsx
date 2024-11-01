import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-right: 20px; /* Distância do perfil até a borda direita */
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  
  margin-right: 10px;
`;

export const UserName = styled.span`
  color: #fff;
  font-size: 14px;
  margin-right: 10px;
`;

export const SettingsIcon = styled.div`
  cursor: pointer;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #141414;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const Logo = styled.img`
  width: 92px;
`;

