import styled from "styled-components"
// constins whole header
export const Container = styled.div`
display:flex;
flex-direction:column;
`
// whole area that is picture
export const Header = styled.div`
color: white;
background: linear-gradient(rgba(0,0,0, 0.4), rgba(0,0,0, 0.4)), url('/HeaderPhoto2.jpg');
background-size: cover;
background-repeat: no-repeat;
background-position: center 42%;    
height: 40vh;
display: flex;
flex-direction: column;
padding: 20px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555 ;
align-items: center;
justify-content: center;
`

export const NavBar = styled.div`
display:flex;
`

// just name of app
export const AppName = styled.div`
display: flex;
align-items: center;
margin-right: 66px;
font-size: 25px;
font-weight: bold;
`
// icon to left
export const AppIcon = styled.img`
height: 36px;
width: 36px;
margin: 15px;

`
// search bar
export const Search = styled.div`
display: flex;
flex-direction: row;
background-color: white;
padding: 10px;
border-radius: 20px;
width: 50%;
`
// magnifying glass to left
export const SearchIcon = styled.img`
width: 32px;
height: 32px;
`
// input inside search bar
export const SearchInput = styled.input`
border: none;
outline: none;
vertical-align: baseline;
padding-top:3px;
margin-left: 13px;
font-size: 18px;
font-weight: bold;
width: 100%;
`

// container for homescreen text
export const PlaceholderContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
// homescreen text
export const Placeholder = styled.p`
font-size: 24px;
font-weight: 500;
margin: 15px;
`