import React from 'react';
import { PageContainer, BannerContainer, Bannerdeco, ListContainer, TitleContainer, CardContainer, Picture,Name,MealsEaten,FavoritesContainer,Title, } from '../StyleComponets/ProfileComponet';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { RecipeCard } from '../StyleComponets/RecipeComponet';




const ProfilePage = () => {

    const [recipeList, updateRecipeList] = useState([])

    useEffect(() => {
        fetchRecipiesn()
    }, [])

    const fetchRecipiesn= () => {axios.get('https://recipeapp223a.herokuapp.com/recipes')
    .then( res => {
        console.log(res.data)
        updateRecipeList(res.data)
    })}
    
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
            
            {
            
            recipeList.map((recipeList) => (
                
                    <Cards recipeList = {recipeList}/>
                 ))}:
                    
            
            </ListContainer>
            </FavoritesContainer>


        </PageContainer>
    );
};

const Cards = (recipeList) => {
    console.log('props', recipeList)
    

    return (
        <CardContainer>
       <Title>{recipeList.recipeList.label}</Title>
       <Title>{recipeList.recipeList.totalTime}</Title>
       <Title>{recipeList.recipeList.ingredientstotal}</Title>
       
       <Title>{recipeList.recipeList.url}</Title>
       <Title>{recipeList.recipeList.yield}</Title>
       
       <div>
       {recipeList.recipeList.ingredients.map((ingredient,index) => (
                    <Title key={index}>{ingredient.text}</Title>
                ))}
        </div>
       </CardContainer>
    )
}


export default ProfilePage;