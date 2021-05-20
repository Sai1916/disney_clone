import React from 'react'
import styled from 'styled-components'
import Movie from './Movie'
import requests from './requests'

function Movies() {
    return (
        <Container>
            
            <Movie fetchUrl={requests.popular} title="Popular"/>
            <Movie fetchUrl={requests.trending} title="Trending"/> 
            <Movie fetchUrl={requests.topRated} title="Top Rated"/> 
            <Movie fetchUrl={requests.tv_airing_today} title="TV Airing Today"/>
            <Movie fetchUrl={requests.tv_topRated} title="TV Top Rated"/>

        </Container>
    )
}

const Container = styled.div`
    margin: 10px;
`
// const Items = styled.div`
//     display:grid;
//     grid-gap:30px;
//     grid-template-columns: repeat(4,minmax(0,1fr));
// `
// const Item = styled.div`
//     border-radius:10px;
//     cursor:pointer;
//     overflow:hidden;
//     border:2px solid rgba(249,249,249,0.1);
//     box-shadow: rgb(0 0 0 /69%) 0px 24px 30px -10px,
//     rgb(0 0 0 /73%) 0px 16px 10px -10px;
//     transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;    

//     img{
//         width:100%;
//         height:100%;
//         object-fit:cover;
//     }
//     &:hover{
//         border: 2px solid rgba(249,249,249,0.8);
//         transform:scale(1.05);
//         box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
//         rgb(0 0 0 / 72%) 0px 30px 22px -10px;
//     }
// `
export default Movies
