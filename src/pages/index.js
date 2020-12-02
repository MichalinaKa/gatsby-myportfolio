import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Sea from "../images/sea.jpg"
import SocialLinks from "../components/social"


const BorderBox = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  padding: 150px 100px 100px 100px;
  z-index: -1;
  div {
    border-left: 2px solid ${({ theme }) => theme.colors.yellow};
    border-right: 2px solid ${({ theme }) => theme.colors.yellow};
    border-bottom: 2px solid ${({ theme }) => theme.colors.yellow};
    z-index: -2;
    width: 100%;
    height: 100%;
    ${({ theme }) => theme.media.xxl} {
      &::before {
        content: "";
        background-color: ${({ theme }) => theme.colors.yellow};
        display: block;
        position: absolute;
        top: 70px;
        right: 480px;
        width: 20%;
        height: 2px;
        z-index: -1;
      }
    }
  }
`


const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  font-family: 'Jost';
  letter-spacing: 1.5px;
  ${({ theme }) => theme.media.xl} {
    width: 50%;
    margin: 10px 0 0 650px;
  }
  &::before {
    content: "";
    background-image: url(${Sea});
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    z-index: -1;
    opacity: 1;
    box-shadow: 20px -20px 60px 10px ${({ theme }) => theme.colors.blue};

    ${({ theme }) => theme.media.lg} {
    top: 100px;
    left: 300px;
    width: 450px;
    height: 450px;
    opacity: 0.7;

    }
    ${({ theme }) => theme.media.xl} {
      top: 150px;
      left: 300px;
      width: 550px;
      height: 550px;
      background-color: ${({ theme }) => theme.colors.blue};
    }
   ${({ theme }) => theme.media.xxl} {
      top: 200px;
      left: 300px;
      width: 550px;
      height: 550px;
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }
  p {
    font-size: 30px;
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.media.lg} {
      font-size: 40px;
      line-height: 3rem;
    }
    ${({ theme }) => theme.media.xl} {
      padding-top: 100px;
      font-size: 50px;
      line-height: 5rem;
    }
  }
  span {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.violet};

    font-weight: 700;
    &.pink {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.pink};
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SocialLinks />
    <BorderBox>
      <div></div>
    </BorderBox>

    <Wrapper>

      <p>
        ~Hi! I’m <span>front-end developer</span> &
        <span className="pink"><br></br> beginner web designer </span>
        <br></br>
      </p>
      <span>
        ~ With love to details and pretty, useful designs<br></br>
      </span>
   <span>
        ~ Yoga lover and good life enthusiast<br></br>
      </span>
      <span>
        ~ I plan to spend my life with this view<br></br>
      </span>
    </Wrapper>
  </Layout>
)

export default IndexPage
