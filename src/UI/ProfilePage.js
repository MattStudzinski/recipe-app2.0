import React from 'react';
import { PageContainer, BannerContainer, Bannerdeco, ListContainer, TitleContainer, Picture,Name,MealsEaten,FavoritesContainer,Title, } from '../StyleComponets/ProfileComponet';
import axios from 'axios';
import { useState } from 'react';
import { RecipeCard } from '../StyleComponets/RecipeComponet';


const Cards = (props) => {
    console.log('props', props)
    const {recipeobj} = props
    console.log('hello')
    return (
       <Title></Title>
    )
}


const ProfilePage = () => {

    const [recipeList, updateRecipeList] = useState([])

    // axios.get('https://recipeapp223a.herokuapp.com/recipes')
    // .then( res => {
    //     console.log(res.data)
    //     updateRecipeList(res.data.hits)
    // })
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
            recipeList.map((recipeobj) => (
                    <Cards recipeobj = {recipeobj.recipe}/>
                    ))}:
                    
            
                    
            </ListContainer>
            </FavoritesContainer>


        </PageContainer>
    );
};



export default ProfilePage;