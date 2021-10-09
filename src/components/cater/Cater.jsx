import React from 'react';
import styled from 'styled-components';

function Cater() {
    return (
        <Catering>
            <h1>CATERING FOR ALL OCCASIONS – STAR CATERS</h1>
            <CateringImg>
                <FirstImage />
                <SecondImage />
                <ThirthImage />
            </CateringImg>
            <button>Click Here For The Packages</button>
        </Catering>
    )
}

export default Cater

const Catering = styled.div`
    background:linear-gradient(rgba(0, 0, 0, 0.411), rgba(0, 0, 0, 0.397)), url(https://images.squarespace-cdn.com/content/v1/5c0ed9a3f93fd4e41d0dcd82/1554384014944-IC20AT9ZIK3C50R87K7C/WBC_4469.jpg?format=1000w) center center/ cover no-repeat;
    padding: 2rem;
    text-align: center;
    padding-bottom: 6rem;
    h1{
        text-align: center;
        color: white;
        padding-top: 3rem;
        position: relative;
        @media(max-width:400px){
        font-size: 1.5rem;
        font-weight: 500;
        }
        &:before{
            content: '';
            position: absolute;
            right: 0;
            left: 0;
            bottom: -2rem;
            border: 2px solid #fff;
            width: 6rem;
            margin: 0 auto;
        }
    }
    button{
        margin-top: 2rem;
        padding: 1rem 2rem;
        cursor: pointer;
        background-color: antiquewhite;
        border:none;
        font-size: 1rem;
        font-weight: 600;
        &:hover{
            background-color: red;
            color:white;
        }
        @media(max-width:300px){
            font-size:0.9rem;
        }

    }

`

const CateringImg = styled.div`
    width:90%;
    margin:0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr) );
    gap: 1rem;
    margin-top: 5rem;
    @media(max-width:400px){
        margin-right: 4rem;
    }
`
const FirstImage = styled.div`
    width: 100%;
    height: 16rem;
    object-fit: cover;
    border: 2px solid #fff;
    background: url(images/food.jpg) center center / cover no-repeat;
    @media(max-width:768px){
        height: 13rem;
    }
`

const SecondImage = styled(FirstImage)`
    background: url(https://www.wallpapertip.com/wmimgs/50-504402_food-wallpaper-kitchen-food-wallpaper-hd-food-desktop.jpg) center center / cover no-repeat;
`

const ThirthImage = styled(FirstImage)`
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbOQdZ2itulvky-ot-r5uvRXfCAUXCfgOnm3ycGX74S0gj59kuCFsM-5feA_a8NIrkc-8&usqp=CAU) center center / cover no-repeat;
`