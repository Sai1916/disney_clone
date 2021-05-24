/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import ViewIcons from './ViewIcons';
import Trending from './Trending';
import db from '../firebase';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';
import Upcoming from './Upcoming';
import NowPlaying from './NowPlaying';
import TopRated from './TopRated';
import Popular from './Popular';
import TVTopRated from './TVTopRated';
import TVAiringToday from './TVAiringToday';
import { selectUserName } from "../features/user/userSlice";

function Home() {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);

    let populars =[];
    let trendings =[];
    let upcomings =[];
    let now_playings =[];
    let topRateds =[];
    let tv_airing_todays =[];
    let tv_topRateds =[];
     
                        useEffect(() => {
                            db.collection("movies").onSnapshot((snapshot) => {
                              snapshot.docs.map((doc) => {
                                console.log(populars);
                                switch (doc.data().type) {
                                  case "popular":
                                    // eslint-disable-next-line react-hooks/exhaustive-deps
                                    populars = [...populars, { id: doc.id, ...doc.data() }];
                                    break;
                        
                                  case "now_playing":
                                    now_playings = [...now_playings, { id: doc.id, ...doc.data() }];
                                    break;
                        
                                  case "trending":
                                    trendings = [...trendings, { id: doc.id, ...doc.data() }];
                                    break;
                        
                                  case "upcoming":
                                    upcomings = [...upcomings, { id: doc.id, ...doc.data() }];
                                    break;
                                  case "top_rated":
                                    topRateds = [...topRateds, { id: doc.id, ...doc.data() }];
                                    break;  
                                    case "tv_top_rated":
                                        tv_topRateds = [...tv_topRateds, { id: doc.id, ...doc.data() }];
                                        break;
                                        case "tv_airing_today":
                                            tv_airing_todays = [...tv_airing_todays, { id: doc.id, ...doc.data() }];
                                            break;           
                                   default: console.log("done"); 
                                }
                                return "done";
                            });
                        
                              dispatch(
                                setMovies({
                                  popular: populars,
                                  trending: trendings,
                                  upcoming: upcomings,
                                  now_playing: now_playings,
                                  tv_airing_today: tv_airing_todays,
                                  top_rated: topRateds,
                                  tv_top_rated: tv_topRateds,
                                })
                              );
                            })
                          },[userName]);

    return (
        <Container>
            <ImageSlider />
            <ViewIcons />
            <Popular title="Popular" />
            <Trending title="Trending" />
            <Upcoming title="Upcoming" />
            <TVTopRated title="TV TopRated" />
            <NowPlaying title="Now Playing"/>
            <TopRated title="Top Rated" />
            <TVAiringToday title="TV Airing Today"/>
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
