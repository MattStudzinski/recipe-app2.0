import React from 'react';
import { PageContainer, BannerContainer, Bannerdeco, ListContainer, TitleContainer, Picture,Name,MealsEaten,FavoritesContainer,Title,Card } from '../StyleComponets/ProfileComponet';


const ProfilePage = () => {
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
                hello
                <Title>title</Title>
                <ListContainer>
                <Card>cards
                    here
                </Card>
                </ListContainer>
            </FavoritesContainer>


        </PageContainer>
    );
};

export default ProfilePage;