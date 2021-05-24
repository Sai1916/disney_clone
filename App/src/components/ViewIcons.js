import React from 'react'
import styled from 'styled-components'

function ViewIcons() {
    return (
        <Icons>
            <Icon src="/images/viewers-disney.png" alt="" />
            <Icon src="/images/viewers-marvel.png" alt="" />
            <Icon src="/images/viewers-national.png" alt="" />
            <Icon src="/images/viewers-pixar.png" alt="" />
            <Icon src="/images/viewers-starwars.png" alt="" />
        </Icons>
    )
}

const Icons = styled.div`
    display:grid;
    margin-top:20px;
    padding:25px 0px;
    grid-template-columns: repeat(5,minmax(0,1fr));
    grid-gap:20px;

    @media(max-width: 425px){
        display: flex;
        flex-direction: column;
    }
`
const Icon = styled.img`
    height:100%;
    width:100%;
    cursor:pointer;
    border: 2px solid rgba(249,249,249,0.2);
    border-radius:10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    &:hover{
        border: 2px solid rgba(249,249,249,0.8);
        transform:scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    }
`

export default ViewIcons
