import styled from "styled-components"

export const Container = styled.div`
display:flex;
flex-direction:column;
`
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
export const AppName = styled.div`
display: flex;
align-items: center;
margin-right: 66px;

`

export const AppIcon = styled.img`
height: 36px;
width: 36px;
margin: 15px;

`

export const Search = styled.div`
display: flex;
flex-direction: row;
background-color: white;
padding: 10px;
border-radius: 6px;
width: 50%;
`

export const SearchIcon = styled.img`
width: 32px;
height: 32px;
`

export const SearchInput = styled.input`
border: none;
outline: none;
margin-left: 15px;
font-size: 18px;
font-weight: bold;
width: 100%;
`

// linear-gradient(rgba(124, 86, 17, 0.6), rgba(64, 26, 17, 0.6)), url('/HeaderPhoto2.jpg');