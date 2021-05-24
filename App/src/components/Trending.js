import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTrending } from '../features/movie/movieSlice'

 
function Trending({ title }) {

    const trending = useSelector(selectTrending);

    console.log("trending movies",trending)

    const base_url="https://image.tmdb.org/t/p/original";
    
    return (
        <MovieRow>
            <Title>
                {title}
            </Title>
            <Items>
                {
                    trending && trending.map((movie) => (
                        <Link to={`/details/${movie.id}`}>
                            <Item key={movie.id}>
                                <img src={`${base_url}${movie.poster_path}`} alt=""/>
                            </Item>
                        </Link>
                    ))  
                }            
            </Items>
            
        </MovieRow>
    )
}
const MovieRow = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.p`
    font-weight: bold;
    font-size: 20px;
`
const Items = styled.div`
    display:flex;
    overflow-x: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar{
        display: none;
    }

    img{
        width: 140px;
        obJect-fit: contain;
        padding: 5px;
        height: 100%;
        transition: transform 450ms;
        border-radius:10px;
        cursor: pointer;

        :hover{
            transform: scale(1.02)
        }

        @media (max-width: 425px){
            width: 100px;
            height: 100%;
        }
    }

`
const Item = styled.div`

`

export default Trending
