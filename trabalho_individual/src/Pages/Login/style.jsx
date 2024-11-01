import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100%;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ContentForms = styled.div`
  padding: 60px 40px;
  z-index: 10;
  position: relative;
  max-width: 300px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 32px;
  color: #fff;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  color: #ffffff;
  background-color:transparent;
  border: 2px solid #666161;
  border-radius: 4px;
  padding-left: 15px;
  margin-bottom: 15px;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffffff;
  }

  &:focus {
    background-color: #444;
    border: 1px solid #e50914;
  }
`;

export const SignInButton = styled.button`
  height: 40px;
  width: 100%;
  color: #fff;
  background-color: #ff000d;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  border: none;
  margin-bottom: 15px;
  margin-top: 20px;
  
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: #ff000d;
    cursor: pointer;
  }
`;

export const PasscodeButton = styled.button`
  height: 40px;
  width: 100%;
  //color: #ffffff;
  background-color:transparent;
  border: 2px solid #666161;
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
  margin-top: 20px;
  margin-bottom: 15px;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: rgba(229, 9, 20, 0.1);
    cursor: pointer;
    
  }
`;

export const Support = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #b3b3b3;
  font-size: 13px;
  width: 100%;
  margin: 15px 0 20px;
  
`;

export const Remember = styled.label`
  display: flex;
  align-items: center;
  color: #737373;
  cursor: pointer;

  & > input {
    margin-right: 8px;
    accent-color: #737373;
  }
`;

export const HelpLink = styled.a`
  text-decoration: none;
  color: #737373;

  &:hover {
    text-decoration: underline;
  }
`;

export const ImgFac = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #b3b3b3;
  margin-top: 20px;
`;

export const SignUpText = styled.span`
  font-size: 14px;
`;

export const SignUpLink = styled.a`
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ImgLogo = styled.img`
  height: 45px;
  width: auto;
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
`;
