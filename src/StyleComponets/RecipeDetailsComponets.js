import styled from "styled-components";

// around card buttons
export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
`
// actual buttons
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
// hand icon on buttons
export const MouseIcon = styled.img`
width:25px;
padding-left: 10px;
`
// continer holding "more details"
export const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
flex-wrap: wrap;
width: 100%;
`
// name in details
export const RecipeDetailsName = styled.p`
font-size: 24px;
font-weight: 500;
align-self: center;
`
// calories in more details
export const RecipeDetailsCalories = styled.p`
align-self: center;
font-size: 18px;
font-weight: 500;
`
// holds list of ingredients
export const IngredientsContainer = styled.ul`

`
// actual ingredients
export const Ingredients = styled.li`
padding: 3px;
list-style: url("/food.svg");
font-size: 18px;
font-weight: 500;

/* bullet points for list */
::marker{
    font-size:30px;
    
}
`