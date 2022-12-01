import React from 'react';
import "./Appcontainer.css"
import Header from '../Header/Header.js';
import RecipeListContainer from './RecipeListContainer'
import { RecipeCard } from '../StyleComponets/RecipeComponet';
const AppContainer = () => {
    return (
        <section className='container'>
            <Header/>
            <RecipeListContainer>
                <RecipeCard/>
                <RecipeCard/>
            </RecipeListContainer>
        </section>
    );
};

export default AppContainer;