import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { AppName, Container, AppIcon, Header, Search, SearchIcon, SearchInput } from '../StyleComponets/HeaderComponet';

import { ListContainer,RecipeCard,RecipeImage,LinktoRecipe,RecipeName, RecipeDetails, MouseIcon } from '../StyleComponets/RecipeComponet';


const APP_ID ='bb0a04fb'
const APP_KEY = process.env.REACT_APP_API_KEY









const ArticleContainer = styled.div`
padding:0 32px  ;
`
const TitleWrapper = styled.div`
display: flex;
padding: 9px 0 5px;
border-bottom: solid black 1px;
`



const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
flex-wrap: wrap;
width: 100%;
`
const InfoList = styled.ul`
display: flex;
    list-style: none;
    padding: 22px 0 16px;
    margin: 0;
    justify-content: space-between;
`
const InfoLiItem = styled.li`
display: list-item;
`
const InfoIcon = styled.img`
width: 20px;
height: 20px;
`

const InfoValue = styled.span`
font-size: 24px;
font-weight: 600px;
vertical-align: bottom;
margin-left: 8.5px;
color: #5AA7C6;
`

const InfoTitle = styled.div`
font-size: 21px;
font-weight: 500;
`
const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
`

const RecipeDetailsName = styled.p`

`

const RecipeDetailsCalories = styled.p`

`

const IngredientsContainer = styled.ul`

`

const Ingredients = styled.li`
padding: 3px;
list-style: url("/food.svg");

::marker{
    font-size:30px;
    
}
`

const RecipeCards = (props) => {
    console.log('props', props)
    const {recipeObj} =props
    const [show, setShow] = useState(false)
    const stringCal = recipeObj.calories.toString()
    console.log(stringCal)
    return (
        <RecipeCard>
            <RecipeImage src={recipeObj.image}></RecipeImage>
            <ArticleContainer>
            <TitleWrapper>
            <RecipeName>{recipeObj.label.length > 27 ? recipeObj.label.slice(0, 27) + "..." : recipeObj.label}</RecipeName>
            </TitleWrapper>


            <InfoList>
                <InfoLiItem>
                    <InfoIcon src='/clock.svg'/>
                    <InfoValue>{recipeObj.totalTime}</InfoValue>
                    <InfoTitle>Minutes</InfoTitle>
                </InfoLiItem>

                <InfoLiItem>
                    <InfoIcon src='/book.svg'/>
                    <InfoValue>{recipeObj.ingredientLines.length}</InfoValue>
                    <InfoTitle>Ingredients</InfoTitle>
                </InfoLiItem>
            
                <InfoLiItem>
                    <InfoIcon src='/man.svg'/>
                    <InfoValue>{recipeObj.yield}</InfoValue>
                    <InfoTitle>Serving</InfoTitle>
                </InfoLiItem>
            
            </InfoList>
            <ButtonContainer>
            <RecipeDetails onClick={() => setShow(!show)}>More Details<MouseIcon src='/mouse.svg'/></RecipeDetails>
            
            
            
            {show && <DetailsContainer>
                
                <RecipeDetailsName>{recipeObj.label} </RecipeDetailsName>
             
             <RecipeDetailsCalories>Calories: {stringCal.length > 5 ? stringCal.slice(0,6) + '' : stringCal}</RecipeDetailsCalories>
             
             
             <IngredientsContainer>
                {recipeObj.ingredients.map((ingredient,index) => (
                    <Ingredients key={index}>{ingredient.text}</Ingredients>
                ))}
             </IngredientsContainer>
             </DetailsContainer>}
            <RecipeDetails style={{backgroundcolor: "blue"}} onClick={() => window.open(recipeObj.url)}>Let's Get Cooking!<MouseIcon src='mouse.svg'/></RecipeDetails>
            </ButtonContainer>
            </ArticleContainer>
        </RecipeCard>
    );
};



const AppContainer = () => {
    const [timeoutID, updateTimoutID] = useState()
    const [recipeList, updateRecipeList] = useState([])

    const fetchRecipe = async(searchString) =>{
        const response = await Axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}&to=50`
        )
        console.log(response)
        updateRecipeList(response.data.hits) 
    }

    const onTextChange = (event) => {
        clearTimeout(timeoutID)
        const timeout = setTimeout(()=> fetchRecipe(event.target.value), 2500)
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
            {recipeList.map((recipeObj) => 
                    <RecipeCards recipeObj = {recipeObj.recipe}/>)}
            </ListContainer>
        </Container>
    );
};

export default AppContainer;
