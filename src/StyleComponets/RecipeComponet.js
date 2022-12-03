import styled from 'styled-components';

export const PlaceholderContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Placeholder = styled.p`
font-size: 24px;
font-weight: 500;
margin: 15px;
`

export const ListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 20px;
padding: 55px 30px;
justify-content: space-evenly;  

`

export const RecipeCard = styled.div`
display: flex;
flex-direction: column;
border-radius: 5px;
width: 460px;
box-shadow: 0 3px 10px 0 #aaa;
background-color: rgb(233, 241, 248);
`
export const RecipeImage = styled.img`
height:281px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
`
export const RecipeName = styled.span`
font-size: 24px;
margin: 20px 0px;
font-weight: bold;
color: black;

`


export const InfoLiItem = styled.li`
`

export const RecipeDetails = styled.div`
align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.7) 0 3px 5px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 18px;
  font-weight: 500;
  justify-content: center;
  justify-self: center;
  line-height: 1.25;
  margin: 25px;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
  background-color: #C6795A ;
  width: 80%;
  


&:hover,
&:focus {

  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

&:hover {
  transform: translateY(-1px);
}

&:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
}
`
export const MouseIcon = styled.img`
width:25px;
padding-left: 10px;
`





