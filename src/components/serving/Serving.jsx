import React from 'react';
import styled from 'styled-components';

function Serving() {
    return (
        <Container>
            <h1>We Are Now Serving Authentic Afghan-Indo Food</h1>
            <button className="btn">Book Your Order</button>
        </Container>
    )
}

export default Serving

const Container = styled.div`
    padding: 3rem 3rem;
    display:flex;
    align-items: center;
    background: url(/images/background.jpg) center center/ cover no-repeat;
    margin-top: -0.5rem;
    @media(max-width:1060px){
        flex-direction: column;
        align-items: flex-start;
        padding: 2rem 1.5rem;
    }

    @media(max-width:480px){
        align-items: center;
    }
        h1{
            color:white;
            font-size: 2rem;
            margin-right: 3rem;
            font-weight: 500;
            @media(max-width:1060px){
                padding-bottom: 1rem;
                width:100%;
                margin: 0;
            }
            @media(max-width:480px){
                text-align:center;
                font-size: 1.9rem;
            }
        }
        button{
            padding: 1rem 1.8rem;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            background-color: antiquewhite;
            border:none;
            &:hover{
                background-color: red;
                color:white;
            }
        }
`
