import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"

const MainBurgerWrapper = styled.div`

`
const MenuIcon = styled.div`
    margin-top: 20px;
    position: fixed;
    left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* width: 2rem; */
    height: 2rem;
    background-color: transparent;
    border: none;
    translate:1px;
    cursor: pointer;
    z-index: 10;

    div {
        width: 3rem;
        height: 0.4rem;
        /* margin-bottom: 5px; */
        transform-origin: 10px;
        background-color: ${({ theme }) => theme.colors.black};
        position: relative;
        border-radius: 10px;
        :first-child {
            transform: ${({nav}) => nav ? 'rotate(45deg)' : 'rotate(0)'}

        }  
        :nth-child(2) {
            opacity: ${({nav}) => nav ? '0' : '1'}

        }  
        :nth-child(3) {
            transform: ${({nav}) => nav ? 'rotate(-45deg)' : 'rotate(0)'}

        } 
    }
  ${({ theme }) => theme.media.lg} {
        display: none;
  }

`

const MenuLinks = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    text-align: left;
    height: 100%;
    width: 100%;
    background-color: rgba(255,255,255,0.9);
    transition: opacity 200ms;
    opacity: ${({nav}) => nav ? "1" : "0" };
    z-index: 0;
    z-index: ${({nav}) => nav ? "9" : "0" };


    ul {
        list-style-type: none;
    }
    li {
        margin-top: 1rem;
    }
    a {
        text-decoration: none;
        text-transform: uppercase;
        color:  ${({ theme }) => theme.colors.pink};
        transition: color 300ms;
        font-size: 35px;
    }

  ${({ theme }) => theme.media.lg} {
        display: none;
  }
`

function BurgerMenu(){
const [nav, showNav] = useState(false)

return (
  <MainBurgerWrapper >
    <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
        <div/>
        <div/>
        <div/>
    </MenuIcon>
    <MenuLinks nav={nav} >
        <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/about">About</Link> </li>
            <li> <Link to="/projects">Projects</Link> </li>
            <li><Link to="/contact">Contact</Link> </li>
        </ul>
    </MenuLinks>
  </MainBurgerWrapper>
)





}


export default BurgerMenu