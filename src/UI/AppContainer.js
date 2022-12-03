import React, { useState } from 'react';
import Axios from 'axios';
import { AppName, Container, AppIcon, Header, Search, SearchIcon, SearchInput,Placeholder,PlaceholderContainer } from '../StyleComponets/HeaderComponet';
import {RecipeDetailsCalories,ButtonContainer, MouseIcon, DetailsContainer,RecipeDetailsName,IngredientsContainer,Ingredients,RecipeDetails} from '../StyleComponets/RecipeDetailsComponets'
import { ListContainer,RecipeCard,RecipeImage,RecipeName, InfoList,InfoLiItem,InfoIcon,InfoTitle,InfoValue,ArticleContainer,TitleWrapper } from '../StyleComponets/RecipeComponet';


const APP_ID ='bb0a04fb'
const APP_KEY = process.env.REACT_APP_API_KEY


const RecipeCards = (props) => {
    console.log('props', props)
    const {recipeObj} =props
    const [show, setShow] = useState(false)
    const stringCal = recipeObj.calories.toString()
    console.log(stringCal)
    return (
        // CSS for this area is in RecipeComponet.js
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

            {/* All CSS below this can be found in RecipeDetailsComponets.js */}
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
            <RecipeDetails onClick={() => window.open(recipeObj.url)}>Let's Get Cooking!<MouseIcon src='mouse.svg'/></RecipeDetails>
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
        // all CSS for this except ListContainer and RecipeCards(in RecipeComponet) are found in HeaderComponet.js
        <Container>
            <Header>
                <AppName>
                    <AppIcon src='/fork.svg' alt='hamburger'/>What's For Dinner
                </AppName>
                    <Search>
                        <SearchIcon src='/search.svg' alt='search icon'/>
                        <SearchInput placeholder='Search recipe' onChange={onTextChange}/>
                    </Search>
            </Header>
            <ListContainer>
            {recipeList.length ?
            recipeList.map((recipeObj) => (
                    <RecipeCards recipeObj = {recipeObj.recipe}/>
                    )):
                    <PlaceholderContainer>
                    <Placeholder>Welcome to <strong>What's For Dinner! </strong>Struggling to empty out that crowded pantry? We can help with that.</Placeholder>
                    <Placeholder> Start by typing a list of ingredients (e.g., eggs,mushroom,bacon,cheese) and your search will return recipes sharing all those ingredients!</Placeholder>
                    <Placeholder>If you just want to find a general recipe just type in the name (e.g., Chicken Noodle Soup) and the results will be, you guessed it, chicken noodle soup!</Placeholder>
                    <Placeholder>Now, <strong>lets get cooking!</strong></Placeholder>
                    </PlaceholderContainer>}
                    
            </ListContainer>
        </Container>
    );
};

export default AppContainer;
