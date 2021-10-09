import React from 'react';
import styled from 'styled-components';

function Story() {
    return (
        <StoryContent>
            <Contents>
                <ImageDiv>
                    <StoryImage src={"images/story.jpg"} />
                </ImageDiv>
                <TextDiv>
                    <h1>Our Story</h1>
                    <p>At Star Restaurant, we offer distinctive cuisine in an informal, friendly setting. 
                        Our restaurant enjoys a reputation for impeccable service, elegant Asian-style décor, and exquisite
                        Afghan-Indo food. Dining at our restaurant is like visiting Indonesia without 
                        leaving your hometown–an exciting blend of authentic Afghan-Indo food, culture, and atmosphere awaits.</p>
                    <button className="btn">Know More About Us</button>
                </TextDiv>
            </Contents>
        </StoryContent>
    )
}

export default Story

const StoryContent = styled.div`
    background: url(images/backgroundbg.jpg) center center / cover no-repeat;
    padding: 2rem;

`
const Contents = styled.div`
    display: flex;
    @media (max-width: 1090px){
        flex-direction: column-reverse;
    }
`
const ImageDiv = styled.div`
    margin-right: 2rem;
    overflow: hidden;
    @media (max-width: 650px){
        margin: 0;
        width: 100%;
    }
`
const StoryImage = styled.img`
    transition: all 450ms ease-in;
    &:hover{
        transform: scale(1.1);
    }
    @media (max-width: 650px){
        width: 100%;
    }
`
const TextDiv = styled.div`
    flex: 6;
    @media (max-width: 1090px){
        margin-bottom: 2rem;
    }
    @media (max-width: 650px){
        text-align:center;
    }
    h1{
        text-transform: uppercase;
        color: red;
        font-weight: 500;
        position: relative;
        &:before{
            content: "";
            position: absolute;
            border: 2px solid #000;
            left: 0;
            right: 0;
            bottom: -1.5rem;
            width: 5rem;
            @media (max-width: 650px){
                margin: 0 auto;
            }
        }
    }
    p{
        margin-top: 3rem;
        font-size: 1.4rem;
    }
    .btn{
        margin-top: 1rem;
        padding: 1rem 1.5rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        border: none;
        background-color:black;
        color: white;
        &:hover{
            background-color: red;
            color: white;
        }
    }
`