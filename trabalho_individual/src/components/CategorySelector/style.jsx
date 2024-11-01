import React, { useState } from 'react';
import CategorySelector from './CategorySelector';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
   
  };

  return (
    <Container>
      <SidebarMenu />
      <MainContent>
        <Header>
          <Logo src={logo} alt="Netflix Logo" />
       
          <UserProfile name="Larissa" />
        </Header>

        <CategorySelector onCategoryChange={handleCategoryChange} />
        
      </MainContent>
    </Container>
  );
};

export default Home;
