import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #0a0a0a;
  color: #e5e5e5;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const Sidebar = styled.div`
  width: 120px;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 20;
  
  @media (max-width: 768px) {
    width: 80px;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 50px;
  background-color: #141414;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #141414;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

export const Logo = styled.img`
  height: 50px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 25px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const NavLink = styled.a`
 width: 100%;
 height: 100%;
 display: flex;
  color: #fffdfd;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    color: #fff;
    
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Banner = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px 80px;
  color: #fff;
  width: 100%;
  box-shadow: inset 0 -100px 100px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    height: 300px;
    padding: 20px 40px;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 4em;
  font-weight: bold;
  margin: 0;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

export const Description = styled.p`
  font-size: 1.2em;
  max-width: 60%;
  margin-top: 20px;
  margin-bottom: 30px;
  color: #ffffff;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1em;
    max-width: 80%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  z-index: 2;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const PlayButton = styled.button`
  background-color: #e50914;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 28px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  

  &:hover {
    background-color: #f40612;
    
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

export const TrailerButton = styled.button`
  background-color: rgba(109, 109, 110, 0.7);
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  padding: 12px 28px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  

  &:hover {
    background-color: rgba(109, 109, 110, 1);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

export const MovieSection = styled.section`
  padding: 30px 50px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 20px;
  color: #e5e5e5;
  

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const MovieRow = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 15px;
  padding-bottom: 20px;
`;

export const Movie = styled.div`
  flex: 0 0 auto;
  width: 200px;
  transition: transform 0.3s;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const ImgMovie = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 25px 50px;
  background-color: #1a1a1a;
  font-size: 1em;
  color: #777;
  border-top: 1px solid #333;
  width: 100%;
  

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;
