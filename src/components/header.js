import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Image from "../components/image"

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
`

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
      background-color: orange;
    }
  }
`
const LogoWrapper = styled.div`
  position: relative;
`
const StyledH1 = styled.h1`
      a {
        color: #E35C85;
        text-decoration: none;

}

`

const ImageWrapper = styled.div`
  max-width: 250px;
  text-align: end;
  margin: 0 auto;

`



const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <MenuWrapper>
      <Link to="/" activeClassName="activeItem">
        {" "}
        Home{" "}
      </Link>{" "}
      <br />
      <Link to="/about/" activeClassName="activeItem">
        {" "}
        About{" "}
      </Link>{" "}
      <br />
      <Link to="/contact/" activeClassName="activeItem">
        {" "}
        Contact{" "}
      </Link>{" "}
      <br />
      <Link to="/projects/" activeClassName="activeItem">
        {" "}
        Projects{" "}
      </Link>{" "}
      <br />
    </MenuWrapper>{" "}
    <LogoWrapper>
      <StyledH1>
        {" "}
        {/* <Link to="/">
              {siteTitle}
            </Link>       */}{" "}
        <Link to="/">michalina kamińska </Link>

      </StyledH1>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
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
