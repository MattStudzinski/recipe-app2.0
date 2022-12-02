import styled from 'styled-components';

export const ListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 20px;
padding: 30px;
justify-content: space-evenly;  
`

export const RecipeCard = styled.div`
display: flex;
flex-direction: column;
width: 300px;
padding: 10px;
box-shadow: 0 3px 10px 0 #aaa;
`
export const RecipeImage = styled.img`
height:200px;
`
export const RecipeName = styled.span`
font-size: 18px;
font-weight: bold;
color: black;
margin: 10px 0;
`
export const TimeToCook = styled.span`
display: flex;
margin-bottom: 12px;
font-size: 15px;
font-weight: 600;
`

export const MealType = styled.div`
margin-left: 12px;
`
export const CuisineType = styled.div`
font-size: 15px;
font-weight: 600;
margin-bottom: 12px;
display: flex;
flex-direction: row;
`
export const RecipeIngredients = styled.button`
font-size: 18px;
border: solid 1px green;
cursor: pointer;
padding: 10px 15px;
border-radius: 4px;
color: green;
text-align: center;
margin-bottom: 12px;
`
export const LinktoRecipe = styled.span`
font-size: 18px;
border: solid 1px red;
color: black;
cursor: pointer;
padding: 10px 15px;
border-radius: 4px;
color: red;
text-align: center;
`



