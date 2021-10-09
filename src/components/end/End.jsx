import React from 'react';
import styled from 'styled-components';

function End() {
    return (
        <Foot>
            <FootLogo src="/images/logo2.png" />
            <h1>Copyright © 2021 Star Restaurants. All Rights Reserved. <br />
                Website designed by Milad Amiri</h1>
                <a href="#">Order Online With Milad Amiri</a>
        </Foot>
    )
}

export default End

const Foot = styled.div`
    background-color: black;
    position: relative;
    padding-bottom: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1{
        color:white;
        width: 30rem;
        font-size: 1rem;
        text-align:center;
        font-weight: 400;
        padding-top: 10rem;
        @media(max-width: 480px){
             width: 90%;
        }
    }

    a{
        margin-top: 2rem;
        padding: 1rem 2rem;
        border-radius: 50px;
        border:none;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        background-color:white;
        text-decoration: none ;
        color: black;
        &:hover{
            background-color:red;
            color:white;
        }
    }
`
const FootLogo = styled.img`
    position: absolute;
    width:18rem; 
    top: 1.5rem;
    left:50%;
    transform: translate(-50%,-50%);
`