import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <FooterPart>
            <FooterFlex>
                <Form>
                <h1>Have a Message Here ?</h1>
                <form >
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Number" />
                    <textarea  cols="30" rows="5" placeholder="Your Message"></textarea>
                    <button>Send Inquiry</button>
                </form>
            </Form>
            <Nav>
                <ul>
                    <li>Contact Us</li>
                    <li>2215 US Highway 1 South, North Brunswick, NJ 08902</li>
                    <li><span>Call Us At</span></li>
                    <li><span>P :</span> 732.398.9022</li>
                    <li><span>M:</span> 917.518.4331</li>
                    <li><span>M:</span> 347.784.9269</li>
                    <li><span>Fax:</span> 732.658 3700</li>
                    <li><span>Email:</span> gurupalace@hotmail.com</li>
                </ul>
                <ul>
                    <li>Quick Links</li>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Banquet Facility</li>
                    <li>Gallery</li>
                    <li>Catering</li>
                    <li>Events</li>
                    <li>Contact Us</li>
                </ul>
                <ul>
                    <li>Hours of operation</li>
                    <li><span>6 DAYS OPEN</span></li>
                    <li>Monday, Wednesday-Friday :</li>
                    <li>11AM To 3PM</li>
                    <li>Monday, Wednesday-Friday :</li>
                    <li>5PM To 9:30PM</li>
                    <li>Saturday-Sunday : 10AM To</li>
                    <li>9:30PM</li>
                    <li>Tuesday: Closed</li>
                </ul>
            </Nav>
            </FooterFlex>
        </FooterPart>
    )
}

export default Footer

const FooterPart = styled.div`
    background-color: rgb(248, 233, 204);
    padding-top: 3rem;
    padding-bottom: 5rem;
    `
const FooterFlex = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    @media(max-width: 1115px){
        flex-direction: column;
    }
`

const Form = styled.div`
    margin-right: 1.5rem;
    h1{
        padding-bottom: 1rem;
        font-size: 1.4rem;
    }
    form{
        display: flex;
        flex-direction: column;
        input{
            padding: .7rem .5rem ;
            margin: .5rem 0;
            outline: none;
        }
        textarea{
            margin-top: 0.5rem;
            padding: 1rem 0.5rem;
            outline: none;
        }
        button{
            width:10rem;
            padding: 1rem;
            margin-top: 1rem;
            font-size: 1rem;
            font-weight: 600;
            background-color: rgba(0, 0, 0, 0.438);
            border: none;
            color:white;
            cursor: pointer;
            &:hover{
                background-color:red;
            }
        }
    }
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    flex: 9;
    @media(max-width: 1050px){
        flex-direction: column;
        margin-top: 2rem;
    }
    ul{
        width: 70%;
        li{
            font-size: 1.1rem;
            line-height: 2rem;
            list-style: none;
            :first-child{
                font-size: 1.4rem;
                font-weight: 700;
                padding-top: 0.2rem;
                padding-bottom: 1rem;
                @media(max-width: 1050px){
                    padding-bottom: 0.5rem;
                    padding-top:1rem;
                }
            }
            span{
                color: red;
            }
        }
        

    }
`