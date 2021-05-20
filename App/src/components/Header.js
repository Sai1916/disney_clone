import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Navbar>
            <Link to='/'>
                <Logo src="/images/logo.svg" />
            </Link>
            
            <NavItems>
                <a>
                    <img src="/images/home-icon.svg" alt="home"/>
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="search"/>
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="watchlist"/>
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="original"/>
                    <span>ORIGINAL</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="movie"/>
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="series"/>
                    <span>SERIES</span>
                </a>
            </NavItems>

            <UserProfImg src="https://yt3.ggpht.com/yti/ANoDKi5Ue0fDnFC13VPdAUVVNITcgOKu488uGaOProNDEw=s88-c-k-c0x00ffffff-no-rj-mo"/>
        </Navbar>
    ) 
}

const Navbar=styled.div`
    height: 70px;
    background-color: #090b13;
    display: flex;
    position: sticky;
    align-items: center;
    padding: 0px 30px;
    overflow-x: hidden;
`
const Logo=styled.img`
    width:90px;
`
const NavItems = styled.div`
    display:flex;
    flex:1;
    margin-left:20px;
    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;
        img{
            height:25px;
        }
        span{
            font-size:14px;
            letter-spacing:1.42px;
            position:relative;

            &:after{
                content:"";
                height:2px;
                background:#5c9ee0;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform:scaleX(0);
                // transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.95) 0s;
            }
        }
        
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity:1;
            }
        }
    }
`
const UserProfImg= styled.img`
    width:30px;
    height:30px;
    border-radius:50%;
    cursor:pointer;
`

export default Header
