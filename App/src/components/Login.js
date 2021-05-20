import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Content>
                <ImageOne src="/images/cta-logo-one.svg" />
                <SignUpButtton>GET ALL THERE</SignUpButtton>
                <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</Description>
                <ImageTwo src="/images/cta-logo-two.png" />
            </Content>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        background-image: url("/images/login-background.jpg");
        position: absolute;
        content:"";
        top:0;
        left:0;
        right:0;
        bottom:0;
        opacity: 0.7;
        z-index:-1;
    }
`
const Content = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    margin-bottom: 10vw;    
    width:90%;
    box-sizing:border-box;
    display:flex;
    align-items:center;
    // justify-content:center;
    flex-direction: column;
    text-align:center;
    margin-top: 80px;

`
const ImageOne = styled.img`
    max-width: 600px;
    margin-bottom: 10px;
    min-height: 1px;
    display:block;
    width:100%;   
`

const SignUpButtton = styled.a`
    font-weight: bold;
    color:#f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 14px 0;
    border: 1px solid transparent;
    border-radius: 10px;

    &:hover{
        background-color: #0483ee;
    }
`
const Description = styled.p`
    color: hsa(0 0%, 95.3%, 1);
    font-size:12px;
    margin 0 0  24px;
    line-height: 1.5;
    letter-spacing:1.5px;
`
const ImageTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`
export default Login
