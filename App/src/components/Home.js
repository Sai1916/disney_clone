import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import ViewIcons from './ViewIcons'
import db from '../firebase'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'

function Home() {

    const dispatch = useDispatch()

    useEffect(() => {
        db.collection('movies Popular').onSnapshot((snapshot) => {
            let movies = snapshot.docs.map((doc) => {
                return {id: doc.id, ...doc.data()}
            })
            dispatch(setMovies(movies))
        })
    })

    return (
        <Container>
            <ImageSlider />
            <ViewIcons />
            <Movies />
        </Container>
    )
}

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x:hidden;

    &:before{
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content:"";
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
    }
`

export default Home
