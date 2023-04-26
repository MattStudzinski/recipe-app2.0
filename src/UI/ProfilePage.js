import React from 'react';
import { PageContainer, BannerContainer, Bannerdeco, ListContainer, TitleContainer, Picture,Name,MealsEaten,FavoritesContainer,Title, } from '../StyleComponets/ProfileComponet';
import axios from 'axios';
import { useState } from 'react';
import { RecipeCard } from '../StyleComponets/RecipeComponet';


const Cards = (props) => {
    console.log('props', props)
    const {recipe} = props

    return (
        <RecipeCard>
            <h1>bbbb</h1>
        </RecipeCard>
    )
}


const ProfilePage = () => {

    const [recipeList, updateRecipeList] = useState([])

    axios.get('https://recipeapp223a.herokuapp.com/recipes')
    .then( res => {
        console.log(res.data)
    })
    return (
        <PageContainer>
            <BannerContainer>
                <Bannerdeco src='./banner.png' alt='decor image'></Bannerdeco>
            </BannerContainer>


            <TitleContainer>
                <Picture src='./fork.svg' alt='hamburger'></Picture>
                <Name>Jerri Martin</Name>
                <MealsEaten>24</MealsEaten>
            </TitleContainer>


            <FavoritesContainer>
                <Title>title</Title>
                <ListContainer>
            
            {recipeList.map((recipe) => (
                    <Cards recipe = {recipe.recipe}/>
                    ))}:
                    
            
                    
            </ListContainer>
            </FavoritesContainer>


        </PageContainer>
    );
};



export default ProfilePage;