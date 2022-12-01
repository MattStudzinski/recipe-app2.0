import React from 'react';
import styled from 'styled-components';
import { AppName, Container, AppIcon, Header, Search, SearchIcon, SearchInput } from '../StyleComponets/HeaderComponet';

import { ListContainer,RecipeCard,RecipeImage,RecipeIngredients,LinktoRecipe,RecipeName } from '../StyleComponets/RecipeComponet';


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




const AppContainer = () => {
    return (
        <Container>
            <Header>
                <AppName>
                    <AppIcon src='/Hamburger.svg' alt='hamburger'/>Recipe Finder
                </AppName>
                    <Search>
                        <SearchIcon src='/Searchicon.svg' alt='search icon'/>
                        <SearchInput placeholder='Search recipe'></SearchInput>
                    </Search>
            </Header>
            <ListContainer>
            <RecipeCards/>
            <RecipeCards/>
            </ListContainer>
        </Container>
    );
};

export default AppContainer;

//  <RecipeListContainer>
//<RecipeCard/>
//<RecipeCard/>
//</RecipeListContainer>