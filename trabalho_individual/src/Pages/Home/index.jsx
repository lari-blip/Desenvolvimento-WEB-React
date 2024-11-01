import React from 'react'; 
import {
  Container,
  Sidebar,
  MainContent,
  Header,
  Logo,
  Nav,
  NavLink,
  Banner,
  BannerImage,
  Title,
  Description,
  ButtonContainer,
  PlayButton,
  TrailerButton,
  MovieSection,
  SectionTitle,
  MovieRow,
  Movie,
  ImgMovie,
  Footer
} from './style';



import logo from '../../assets/netflix.png';
import bannerImage from '../../assets/image.jpg'; 
import movie1 from '../../assets/movie1.png';
import movie2 from '../../assets/movie2.jpg';
import movie3 from '../../assets/movie3.png';
import movie4 from '../../assets/movie4.png';
import movie5 from '../../assets/movie5.jpg';
import movie6 from '../../assets/movie6.png';
import movie7 from '../../assets/movie7.jpg';
import movie8 from '../../assets/movie8.png';
import movie9 from '../../assets/movie9.jpg';
import movie10 from '../../assets/movie10.jpg';
import movie11 from '../../assets/movie11.jpg';
import movie12 from '../../assets/movie12.jpg';
import movie13 from '../../assets/movie13.jpg';
import movie14 from '../../assets/movie14.jpg';
import movie15 from '../../assets/movie15.jpg';
import movie16 from '../../assets/movie16.jpg';
import movie17 from '../../assets/movie17.jpg';
import movie18 from '../../assets/movie18.jpg';
import movie19 from '../../assets/movie19.jpg';
import movie20 from '../../assets/movie20.jpg';
import movie21 from '../../assets/movie21.jpg';
import movie22 from '../../assets/movie22.jpg';
import movie23 from '../../assets/movie23.jpg';
import movie24 from '../../assets/movie24.jpg';
import movie25 from '../../assets/movie25.jpg';
import movie26 from '../../assets/movie26.jpg';
import movie27 from '../../assets/movie27.png';
import movie28 from '../../assets/movie28.jpg';
import movie29 from '../../assets/movie29.jpg';
import movie30 from '../../assets/movie30.jpg';
import movie31 from '../../assets/movie31.jpg';


import UserProfile from '../../components/UserProfile';




const Home = () => {
  return (
    <Container>
 

      <MainContent>
        <Header>

       

          <Logo src={logo} alt="Netflix Logo" />
          <Nav>
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">Series</NavLink>
            <NavLink href="#">Films</NavLink>
            <NavLink href="#">New & Popular</NavLink>
            <NavLink href="#">My List</NavLink>

          
            <UserProfile name="Larissa Teodoro" />
          </Nav>
        </Header>

        <Banner>
          <BannerImage src={bannerImage} alt="Banner" />
          <Title>Grey's Anatomy</Title>
          <Description>
            Intern (and eventual resident) Meredith Grey finds herself caught up 
            in personal and professional passions with fellow doctors at a Seattle hospital. 
            Watch trailers & learn more..
          </Description>
          <ButtonContainer>
            <PlayButton>Play</PlayButton>
            <TrailerButton>Watch Trailer</TrailerButton>
          </ButtonContainer>
        </Banner>

        <MovieSection>
          <SectionTitle>Original Series</SectionTitle>
          <MovieRow>
            <Movie><ImgMovie src={movie1} alt="Movie 1" /></Movie>
            <Movie><ImgMovie src={movie2} alt="Movie 2" /></Movie>
            <Movie><ImgMovie src={movie3} alt="Movie 3" /></Movie>
            <Movie><ImgMovie src={movie9} alt="Movie 9" /></Movie>
            <Movie><ImgMovie src={movie10} alt="Movie 10" /></Movie>
            <Movie><ImgMovie src={movie11} alt="Movie 11" /></Movie>
            <Movie><ImgMovie src={movie12} alt="Movie 12" /></Movie>
            <Movie><ImgMovie src={movie13} alt="Movie 13" /></Movie>
          </MovieRow>
        </MovieSection>

        <MovieSection>
          <SectionTitle>Original films</SectionTitle>
          <MovieRow>
            <Movie><ImgMovie src={movie4} alt="Movie 4" /></Movie>
            <Movie><ImgMovie src={movie5} alt="Movie 5" /></Movie>
            <Movie><ImgMovie src={movie6} alt="Movie 6" /></Movie>
            <Movie><ImgMovie src={movie7} alt="Movie 7" /></Movie>
            <Movie><ImgMovie src={movie8} alt="Movie 8" /></Movie>
            <Movie><ImgMovie src={movie14} alt="Movie 14" /></Movie>
            <Movie><ImgMovie src={movie15} alt="Movie 15" /></Movie>
            <Movie><ImgMovie src={movie16} alt="Movie 16" /></Movie>

          </MovieRow>
        </MovieSection>

        <MovieSection>
          <SectionTitle>Romance</SectionTitle>
          <MovieRow>
            <Movie><ImgMovie src={movie17} alt="Movie 17" /></Movie>
            <Movie><ImgMovie src={movie18} alt="Movie 18" /></Movie>
            <Movie><ImgMovie src={movie19} alt="Movie 19" /></Movie>
            <Movie><ImgMovie src={movie7} alt="Movie 7" /></Movie>
            <Movie><ImgMovie src={movie20} alt="Movie 20" /></Movie>
            <Movie><ImgMovie src={movie21} alt="Movie 21" /></Movie>
            <Movie><ImgMovie src={movie22} alt="Movie 22" /></Movie>
            <Movie><ImgMovie src={movie23} alt="Movie 23" /></Movie>

          </MovieRow>
        </MovieSection>

        <MovieSection>
          <SectionTitle>Comedy</SectionTitle>
          <MovieRow>
            <Movie><ImgMovie src={movie24} alt="Movie 24" /></Movie>
            <Movie><ImgMovie src={movie25} alt="Movie 25" /></Movie>
            <Movie><ImgMovie src={movie26} alt="Movie 26" /></Movie>
            <Movie><ImgMovie src={movie27} alt="Movie 27" /></Movie>
            <Movie><ImgMovie src={movie28} alt="Movie 28" /></Movie>
            <Movie><ImgMovie src={movie29} alt="Movie 29" /></Movie>
            <Movie><ImgMovie src={movie30} alt="Movie 30" /></Movie>
            <Movie><ImgMovie src={movie31} alt="Movie 31" /></Movie>

          </MovieRow>
        </MovieSection>

        <Footer>
          <p>© 2024 Netflix, Inc.</p>
        </Footer>
      </MainContent>
    </Container>
  );
};

export default Home;
