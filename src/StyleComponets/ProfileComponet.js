import styled from "styled-components"

export const PageContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
`

export const BannerContainer = styled.div `
 width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
`

export const Bannerdeco = styled.img`
width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
`

export const TitleContainer = styled.div`
text-align: center;
    max-width: 45rem;
    width: 90%;
    margin-top: -13rem;
    position: relative;
    color: white;
    border-radius: 14px;
    padding: 1rem;
    box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
`

export const Picture = styled.img`
height: 150px;
width: 150px;
margin-top: 60px;

`

export const Name = styled.div`
color: black;
`

export const MealsEaten = styled.div`
color: black;
`

export const FavoritesContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 10%;
box-shadow: 1px 1px 1px 1px rgba(0,0,0,.5);
width: 80%;
align-items: center;
`

export const Title = styled.div`
margin: 25px;
`
export const ListContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
width: 100%;
`

export const Card = styled.div`

`