import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import url from './axios'
import { Link } from 'react-router-dom'
// import Details from './Details'
import db  from '../firebase'
// import firebaseApp from '../firebase'
import { useSelector } from 'react-redux'
import { selectMovies } from '../features/movie/movieSlice'

function Movie({ fetchUrl, title }) {

    const movies = useSelector(selectMovies)

    console.log(movies)

    const base_url="https://image.tmdb.org/t/p/original";

    const [res,setRes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await url.get(fetchUrl);
            const value = request.data.results;
            setRes(value);
            return request;
        }
        fetchData(); 

    },[fetchUrl])


        // res.map((movie) => (
        //     db.collection(`movies ${title}`).onSnapshot((snapshot) => {
        //         snapshot.docs.map((doc) => {
        //             if(!doc.exists){
                        
        //             }
        //         })
        //     })


        res && res.map(movie => (
            db.collection(`movies ${title}`).add({ 
                id: movie.id,   
                name: movie.name || movie.original_name,
                description: movie.overview,
                backdrop_path: movie.backdrop_path,
                poster_path: movie.poster_path,
                date: movie.release_date || movie.first_air_date
            })
            .then((movie) => {
                console.log("Document written with ID: ", movie.id);
                db.collection(`movies ${title}`).doc({movie}).update({
                    id: movie.id
                });
                // return {id: movie.id, ...movie}
            })
            .catch(err => {
                console.log(err)
            })
        ))
            

        console.log("movies",res)

        // useEffect(() => {
        //     out = db.collection(`movies ${title}`).get();
        //     setOut(out.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        // },[out])

        // console.log(out)


    return (
        <MovieRow>
            <Title>
                {title}
            </Title>
            <Items>

                    {
                    res.map(movie => (
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
        object-fit: contain;
        padding: 5px;
        height: 100%;
        transition: transform 450ms;
        border-radius:10px;
        cursor: pointer;

        :hover{
            transform: scale(1.02)
        }
    }

`
const Item = styled.div`

`

export default Movie
