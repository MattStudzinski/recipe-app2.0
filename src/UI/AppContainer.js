import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { AppName, Container, AppIcon, Header, Search, SearchIcon, SearchInput } from '../StyleComponets/HeaderComponet';

import { ListContainer,RecipeCard,RecipeImage,RecipeIngredients,LinktoRecipe,RecipeName, MealType, CuisineType, TimeToCook } from '../StyleComponets/RecipeComponet';


const APP_ID ='bb0a04fb'
const APP_KEY = process.env.REACT_APP_API_KEY


const RecipeCards = (props) => {
    console.log('props', props)
    const {recipeObj} =props
    return (
        <RecipeCard>
            <RecipeImage src={recipeObj.image}/>
            <RecipeName>{recipeObj.label.length > 27 ? recipeObj.label.slice(0, 27) + "..." : recipeObj.label}</RecipeName>
            <CuisineType>Cuisine: {recipeObj.cuisineType} <MealType>{recipeObj.mealType}</MealType></CuisineType>
            <TimeToCook>Cook-time: {recipeObj.totalTime} minutes</TimeToCook>
            <RecipeIngredients>ingredients</RecipeIngredients>
            <LinktoRecipe onClick={() => window.open(recipeObj.url)}>See complete recipe</LinktoRecipe>
        </RecipeCard>
    );
};




const AppContainer = () => {
    const [timeoutID, updateTimoutID] = useState()
    const [recipeList, updateRecipeList] = useState([])

    const fetchRecipe = async(searchString) =>{
        const response = await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}&to=5`
        )
        console.log(response)
        updateRecipeList(response.data.hits) 
    }

    const onTextChange = (event) => {
        clearTimeout(timeoutID)
        const timeout = setTimeout(()=> fetchRecipe(event.target.value), 3500)
        updateTimoutID(timeout)
    }
    return (
        <Container>
            <Header>
                <AppName>
                    <AppIcon src='/fork.svg' alt='hamburger'/>Recipe Finder
                </AppName>
                    <Search>
                        <SearchIcon src='/search.svg' alt='search icon'/>
                        <SearchInput placeholder='Search recipe' onChange={onTextChange}/>
                    </Search>
            </Header>
            <ListContainer>
            {recipeList.length && 
                recipeList.map((recipeObj) => 
                    <RecipeCards recipeObj = {recipeObj.recipe}/>)}
            </ListContainer>
        </Container>
    );
};

export default AppContainer;
