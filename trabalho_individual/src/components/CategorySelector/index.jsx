import React from 'react';
import { CategoryContainer, CategoryButton } from './style';

const categories = ['All', 'Action', 'Drama', 'Comedy', 'Horror', 'Romance'];

const CategorySelector = ({ onCategoryChange }) => (
  <CategoryContainer>
    {categories.map((category, index) => (
      <CategoryButton key={index} onClick={() => onCategoryChange(category)}>
        {category}
      </CategoryButton>
    ))}
  </CategoryContainer>
);

export default CategorySelector;
