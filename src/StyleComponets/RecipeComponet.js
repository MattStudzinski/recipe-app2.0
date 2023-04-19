import styled from 'styled-components';

// constians recipe cards
export const ListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 20px;
padding: 55px 30px;
justify-content: space-evenly;  

`

// puts everything below recipe image in a container
export const ArticleContainer = styled.div`
padding:0 32px  ;
`

// card for recipes
export const RecipeCard = styled.div`
display: flex;
flex-direction: column;
border-radius: 5px;
width: 460px;
box-shadow: 0 3px 10px 0 #aaa;
background-color: rgb(233, 241, 248);
`

// image
export const RecipeImage = styled.img`
height:281px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
`
// goes around recipe title
export const TitleWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 9px 0 5px;
border-bottom: solid black 1px;
`

// name on card
export const RecipeName = styled.span`
font-size: 24px;
margin: 20px 0px;
font-weight: bold;
color: black;
`

export const AddButton = styled.button`
background-color: green;
max-height: 35px;
`

// THIS IS WHERE THE ICONS AND CALORIES,MINUTES, AND SERVINGS ARE STORED


// holds list of minutes, servings, and ingredient count
export const InfoList = styled.ul`
display: flex;
    list-style: none;
    padding: 22px 0 16px;
    margin: 0;
    justify-content: space-between;
`
export const InfoLiItem = styled.li`
display: list-item;
`
export const InfoIcon = styled.img`
width: 20px;
height: 20px;
`

export const InfoValue = styled.span`
font-size: 24px;
font-weight: 600px;
vertical-align: bottom;
margin-left: 8.5px;
color: #5AA7C6;
`

export const InfoTitle = styled.div`
font-size: 21px;
font-weight: 500;
`






