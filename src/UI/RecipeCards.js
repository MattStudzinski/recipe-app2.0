import React from 'react';
import styled from 'styled-components';
import { RecipeCard,RecipeImage,RecipeIngredients,LinktoRecipe,RecipeName } from '../StyleComponets/RecipeComponet';

const RecipeCards = () => {
    return (
        <RecipeCard>
            <RecipeImage src='hamburger.svg'/>
            <RecipeName>beans</RecipeName>
            <RecipeIngredients>ingredients</RecipeIngredients>
            <LinktoRecipe>See complete recipe</LinktoRecipe>
        </RecipeCard>
    );
};

export default RecipeCards;