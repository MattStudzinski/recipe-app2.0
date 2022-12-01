import React from 'react';
import styled from 'styled-components';
import { ListContainer,RecipeCard,RecipeImage,RecipeName,RecipeIngredients,LinktoRecipe } from '../StyleComponets/RecipeComponet';




const ReecipeListContainer = () => {
    return (
        <ListContainer>
        <RecipeCard>
            <RecipeImage className='recipe-image' src='hamburger.svg'/>
            <RecipeName className='recipe-name'>beans</RecipeName>
            <RecipeIngredients className='recipe-ingredients'>ingredients</RecipeIngredients>
            <LinktoRecipe className='link-to-recipe'>See complete recipe</LinktoRecipe>
        </RecipeCard>
        
        </ListContainer>
    );
};

export default ReecipeListContainer;