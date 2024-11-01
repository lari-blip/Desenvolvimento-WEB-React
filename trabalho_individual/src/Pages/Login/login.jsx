import { useState } from "react"; 
import {
  Container,
  Overlay,
  ContentForms,
  Title,
  Input,
  SignInButton,
  PasscodeButton,
  Support,
  Remember,
  HelpLink,
  SignUpContainer,
  SignUpText,
  SignUpLink,
  ImgLogo,
} from "./style";

import logo from '../../assets/netflix.png';


const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Login:", { username, password });
    // Redirecionar para a página inicial (home) se necessário
  };

  const handleUsePasscode = () => {
    // Lógica para usar o passcode
    console.log("Usando passcode...");
  };

  return (
    <Container>
      <ImgLogo src={logo} alt="Logo Netflix" />
      <Overlay />
      <ContentForms>
        <Title>Sign in</Title>
        
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email ou phone number"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Support>
            <Remember>
              <input type="checkbox" />
              Remember-me
            </Remember>
            <HelpLink href="#">Need help?</HelpLink>
          </Support>

          <SignInButton type="submit">Sign in</SignInButton> <p>OU</p>
          <PasscodeButton type="button" onClick={handleUsePasscode}>Use passcode</PasscodeButton>

          <h6>Esqueceu a senha?</h6>

        

          <SignUpContainer>
            <SignUpText>New to Netflix?</SignUpText>
            <SignUpLink href="#"><h4>Sign up now</h4></SignUpLink>
          </SignUpContainer>

          
          
        </form>
      </ContentForms>
    </Container>
  );
};

export default Login;
