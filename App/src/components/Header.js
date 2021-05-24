import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { useEffect } from 'react';


function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user)
        setUser(user);
        history.push("/home");
      }
    });
  });

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

    return (
        <Navbar>
            <Link to='/home'>
                <Logo src="/images/logo.svg" />
            </Link>

            {!userName ? (
                <Login onClick={handleAuth}>Login</Login>
            ) : (
                <>
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
                    <SignOut>
                        <UserProfImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={handleAuth}>Sign out</span>
                        </DropDown>
                    </SignOut>
                </>
            )}
        </Navbar>
    ) 
}

const Navbar=styled.div`
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    position: sticky;
    align-items: center;
    padding: 0px 36px;
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

        // @media (max-width: 600px){
        //   display: none;
        // }

        @media (max-width: 768px){
            a{

              img{
                height: 14px;
              }
            }
            span{
              display: none;
            }
        }

        @media (max-width: 560px){
          display: none;
        }
    }
`
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`

const UserProfImg= styled.img`
  height: 100%;

  @media (max-width: 768px){
    height: 70%;
  }
`

const DropDown = styled.div`
  position: absolute;
  top: 25px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 6px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserProfImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;

    @media (max-width: 768px){
      height: 80%;
      width: 80%;
    }
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`


export default Header
