import React from 'react';
import { PageContainer, BannerContainer, Bannerdeco, ListContainer, TitleContainer, Picture,Name,MealsEaten,FavoritesContainer,Title,Card } from '../StyleComponets/ProfileComponet';
import axios from 'axios';

const ProfilePage = () => {

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
                <Card>cards
                    here
                </Card>
                <Card>cards
                    here
                </Card>
                <Card>cards
                    here
                </Card>
                <Card>cards
                    here
                </Card>
                </ListContainer>
            </FavoritesContainer>


        </PageContainer>
    );
};

export default ProfilePage;