import React from 'react';
import { PageContainer, ProfileContainer, TitleContainer, Picture,Name,MealsEaten,FavoritesContainer,Title,Card } from '../StyleComponets/ProfileComponet';


const ProfilePage = () => {
    return (
        <PageContainer>
            <ProfileContainer>
            <TitleContainer>
                <Picture></Picture>
                <Name></Name>
                <MealsEaten></MealsEaten>
            </TitleContainer>
            
            </ProfileContainer>
            <FavoritesContainer>
                <Title></Title>
                <Card></Card>
            </FavoritesContainer>
        </PageContainer>
    );
};

export default ProfilePage;