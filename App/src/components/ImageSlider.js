import React from 'react'
import Slider from "react-slick";
import styled  from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt=""/>
            </Wrap>
            <Wrap> 
                <img src="/images/slider-badging.jpg" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg" alt=""/> 
            </Wrap>
        </Carousel>
    )
}

const Carousel= styled(Slider)`

    ul li button{
        &:before{
            font-size:12px;
            color:white;
        }
    }

    li.slick-active button::before{
        color:white;        
    }

    .slick-list{
        overflow:visible;
    }

    button{
        z-index:1;
    }
`
const Wrap = styled.div`
    margin-top:10px;
    cursor:pointer;
    img{
        border:3px solid transparent;
        width:100%;
        height:100%;
        border-radius:16px;
        box-shadow: rgb(0 0 0 /69%) 0px 24px 30px -10px,
        rgb(0 0 0 /73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover{
            border: 3px solid rgba(249,249,249,0.8);
        }
    }
    
` 

export default ImageSlider
