import styled from "styled-components"
import { Link } from 'react-router-dom';
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
width: 100%;
display: flex;
flex-direction: column;
padding: 20px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555 ;
align-items: center;
justify-content: center;
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
// Start of nav bar styles

// container for whole bar
export const NavContainer = styled.div`
display:flex;
height: 45px;

`

export const AppNameNav = styled.div`
display: flex;
width: 100%;
align-items: center;

font-size: 15px;
font-weight: bold;
`

export const AppIconNav = styled.img`
height: 36px;
width: 36px;
`

export const LinkContainer = styled.div`

display: flex;
align-items: center;
gap: 15px;
margin-right: 5px;
justify-content: flex-end;

`

export const Links = styled(Link)`
text-decoration: none;
color: #595959;
`
