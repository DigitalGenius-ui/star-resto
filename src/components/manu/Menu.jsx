import React from 'react';
import styled from 'styled-components';

function Menu() {
    return (
        <MenuContents>
            <h1>Our Menu</h1>
            <p>Star is the ideal location for whatever the occasion; a casual get together, a special 
                occasion or group dining. We are equipped with the very best 
                equipments for outdoors and our massive production line enables us to produce food for up to 
                2000 people.</p>
            <button>Check Our Full Menu</button>
        </MenuContents>
    )
}

export default Menu

const MenuContents = styled.div`
    text-align: center;
    padding: 5rem 0;
    background: url(/images/food1.jpg) left  / cover no-repeat;
    background-position: -8rem;
    background-size: 30%;
    h1{
        text-align: center;
        position: relative;
        color:red;
        &:before{
            content: '';
            position: absolute;
            right: 0;
            left: 0;
            bottom: -1rem;
            border: 2px solid #000;
            width: 6rem;
            margin: 0 auto;
        }
    }
    p{
        width: 45rem;
        margin: 0 auto;
        padding-top: 3rem;
        font-size: 1.5rem;
        line-height: 2rem;
        @media(max-width:810px){
            font-size: 1.3rem;
            width: 90%;
        }
    }
    button{
        margin-top: 4rem;
        padding: 1rem 3rem;
        font-size: 1.1rem;
        cursor: pointer;
        border: none;
        background-color:black;
        color:white;
        &:hover{
            background-color: red;
        }
    }
`