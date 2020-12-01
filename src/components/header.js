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
  padding: 50px 100px 50px 100px;
`

const MenuWrapper = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.media.md} {
    flex-basis: 50%;
    }
  ${({ theme }) => theme.media.lg} {
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
  position: relative;
  background-image: url(${Eyes});
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: 50px 10px;
  height: 250px;

`
const StyledH1 = styled.h1`
  a {
    color: #e35c85;
    color: black;
    text-decoration: none;
    font-family: "MajorMono";
    font-style: normal;
    /* text-transform: uppercase; */
    font-size: 35px;
    color: #fdffba;

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
      <StyledH1>
        <Link to="/">Michalina Kamińska</Link>
      </StyledH1>
    </LogoWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
