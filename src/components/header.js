import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Eyes from "../images/eyes.png"

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 50px;
  padding: 10px 50px 100px 50px;

  ${({ theme }) => theme.media.lg} {
     padding: 50px 100px 50px 100px;
    }

`

const MenuWrapper = styled.div`
  flex-basis: 50%;
  display: none;
  justify-content: space-between;
 
  ${({ theme }) => theme.media.lg} {
    display: flex;
    flex-basis: 45%;
    }

  a {
    letter-spacing: 1.4px;
    text-decoration: none;
    text-transform: uppercase;
    font-family: "MajorMono";
    color: ${({theme}) => theme.colors.violet}; 
    font-size: 22px;

    &:active {
      background-color: ${({theme}) => theme.colors.yellow};
    }

    &:visited {
      color: ${({theme}) => theme.colors.violet}; ;
    }
  }

  .activeItem {
    position: relative;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 12px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({theme}) => theme.colors.yellow};

    }
  }
`
const LogoWrapper = styled.div`
  position: fixed;
  background-image: url(${Eyes});
  background-size: 80%;
  background-repeat: no-repeat;
  top: 50px;
  left:70px;
  height: 200px;
  width: 150px;
  animation-name: fadeInEyes;
  animation-iteration-count: 100;
  animation-duration: 10s;

  ${({ theme }) => theme.media.md} {
    height: 200px;
    width: 250px;

   
  }
  ${({ theme }) => theme.media.lg} {
    height: 300px;
    width: 250px;
    right: 30px;
    left: auto;;
    top: 80px;
  }
      @keyframes fadeInEyes
      {
          0% { opacity: 0;  }
          5% { opacity: 1; }  
          10% { opacity: 0; }  
          15% { opacity: 1; }  
          20% { opacity: 0; }  
          25% { opacity: 1; }  
          30% { opacity: 1; }  
          35% { opacity: 0; }  
          40% { opacity: 1; }  
          45% { opacity: 1; }  
          50% { opacity: 1; }  
          55% { opacity: 0; }
          60% { opacity: 0; }
          65% { opacity: 0; }
          70% { opacity: 1; }
          75% { opacity: 1; }
          80% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0 }
      }
`
const StyledH1 = styled.h1`
  a {
    text-decoration: none;
    font-family: "MajorMono";
    font-style: normal;
    font-size: 20px;
    color: #fdffba;
 ${({ theme }) => theme.media.md} {
    font-size: 30px;

  }
  ${({ theme }) => theme.media.lg} {
     font-size: 30px;

  }
  ${({ theme }) => theme.media.xl} {


  }

  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <MenuWrapper>
      <Link to="/" activeClassName="activeItem">
        {" "}
        home{" "}
      </Link>{" "}
      <br />
      <Link to="/about/" activeClassName="activeItem">
        {" "}
        about{" "}
      </Link>{" "}
      <br />
      <Link to="/contact/" activeClassName="activeItem">
        {" "}
        contact{" "}
      </Link>{" "}
      <br />
      <Link to="/projects/" activeClassName="activeItem">
        {" "}
        projects{" "}
      </Link>{" "}
      <br />
    </MenuWrapper>{" "}
    <LogoWrapper> 
    </LogoWrapper>
      <StyledH1>
        <Link to="/">Michalina Kamińska</Link>
      </StyledH1>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
