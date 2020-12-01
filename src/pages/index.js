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
  ${({ theme }) => theme.media.xl} {
    width: 60%;
    margin: 10px 0 0 450px;
  }
  &::before {
    content: "";
    background-image: url(${Sea});
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    top: 200px;
    left: 300px;
    width: 500px;
    height: 400px;
    z-index: -1;
    opacity: 0.2;
    box-shadow: 16px -12px 50px -4px #cff6ff;
    box-shadow: 16px -20px 50px 20px rgba(192, 228, 237, 0.7);

    ${({ theme }) => theme.media.xl} {
      top: 250px;
      left: 300px;
      width: 700px;
      height: 500px;
    }
  }
  p {
    font-size: 30px;
    line-height: 2rem;
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.media.xl} {
      font-size: 40px;
      line-height: 3rem;
    }
    ${({ theme }) => theme.media.xl} {
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
        ~I’m aspiring <span>front-end developer</span> &{" "}
        <span class="pink"> beginner web designer </span>
        <br></br>
      </p>
      <span>
        ~With love to details and pretty, useful designs<br></br>
      </span>
    </Wrapper>
  </Layout>
)

export default IndexPage
