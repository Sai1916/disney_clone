import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase';

function Details() {

    const { id } = useParams();
    console.log(id)

    const [res,setRes] = useState();

    const base_url="https://image.tmdb.org/t/p/original";

    useEffect(() => {
        db.collection('movies')
        .doc(id)
        .get()
        .then((doc) => {
            if(doc.exists){
                setRes(doc.data())
            }
            else{
                console.log("no such document")
            }
        })
        .catch(err => {
            console.log(err)
        })
    },[id])

    console.log("movie details", res)

    return (
        <Container>
            {res && (
                <>
                    <BackgroundImage>
                        <img src={`${base_url}${res.backdrop_path}`} alt="bgimg" />
                    </BackgroundImage>
                    <Title>
                        <img src={`${base_url}${res.poster_path}`} alt="titleimg"/>
                    </Title>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" alt="" />
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" alt="" />
                            <span>TRAILER</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="/images/group-icon.png" alt="" />
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>
                        {res.date}
                    </SubTitle>
                    <Description>
                    {res.description}
                    </Description>
                </>
            )}
        </Container>
    )
}

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    color: '#fff';
`
const BackgroundImage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
    }
`
const Title = styled.div`
    height: 30vh;
    min-height: 200px;
    width: 140px;
    height: 100%;
    margin: 20px;
    
    
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        border: 0.2px solid white;
        border-radius: 8px;
    }
`
const Controls = styled.div`
    display: flex;
    align-items:center;
    
`
const PlayButton = styled.button`
    border-radius: 6px;
    font-size: 16px;
    display:flex;
    align-items:center;
    height: 50px;
    background-color: rgb(249,249,249);
    border: none;
    padding: 0 24px;
    margin-right:18px;
    letter-spacing: 1.6px;
    cursor: pointer;

    &:hover{
        background: rgb(198,198,198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.4);
    border: 1 solid rgb(249,249,249);
    color: rgb(249,249,249);
    
`
const AddButton = styled.button`
    width:44px;
    height: 44px;
    display: flex;
    align-items:center;
    margin-right: 16px;
    justify-content:center;
    border-radius:50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor:pointer;

    span{
        font-size: 26px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
    color: rgb(249,249,249);
    font-size: 16px;
    min-height: 20px;
    margin-top: 26px;
    color: '#fff'
`
const Description = styled.div`
    line-height: 1.5;
    font-size: 18px;
    margin-top: 16px;
    color: rgb(249,249,249);
`
export default Details
