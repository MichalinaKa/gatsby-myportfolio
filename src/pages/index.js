import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Sea from "../images/sea.jpg"
import SocialLinks from "../components/social"


const BorderBox = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: -1;
  padding: 20px 20px 20px 20px;
  overflow: scroll;

  ${({ theme }) => theme.media.sm} {
      padding: 100px 30px 30px 30px;
  }
  ${({ theme }) => theme.media.md} {
      padding: 100px 50px 50px 50px;
  }

  ${({ theme }) => theme.media.lg} {
      padding: 150px 100px 100px 100px;
  }

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
  width: 80%;
  margin: 0 auto;
  font-family: 'Jost';
  letter-spacing: 1.5px;
  text-align: center;
  ${({ theme }) => theme.media.ssm} {
    width: 75%;
  }
  ${({ theme }) => theme.media.md} {
    width: 50%;
  }
  ${({ theme }) => theme.media.lg} {
    width: 50%;
    margin: 0 auto;
  }
  ${({ theme }) => theme.media.xl} {
    width: 50%;
    margin: 10px 0 0 450px;

  }
  ${({ theme }) => theme.media.xxl} {
    width: 50%;
    margin: 10px 0 0 550px;
  }
  &::before {
    content: "";
    background-image: url(${Sea});
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    z-index: -1;
    opacity: 0.2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 20px -20px 60px 10px ${({ theme }) => theme.colors.blue};
    
    ${({ theme }) => theme.media.ssm} {
          width: 300px;
          height: 300px;
      
    }
     ${({ theme }) => theme.media.sm} {
          width: 450px;
          height: 450px;
          opacity: 0.4;

     
    }
    ${({ theme }) => theme.media.md} {
          width: 450px;
          height: 450px;
          opacity: 0.6;


    }
    ${({ theme }) => theme.media.lg} {
        width: 350px;
        height: 350px;
        margin: 0 auto;
        width: 450px;
        height: 450px;
        opacity: 0.7;
    }

    ${({ theme }) => theme.media.xl} {
        top: 50%;
        left: 300px;
        width: 550px;
        height: 550px;
        transform: translate(0%,-50%);
        background-color: ${({ theme }) => theme.colors.blue};
    }

    ${({ theme }) => theme.media.xxl} {
        left: 300px;
        width: 550px;
        height: 550px;
        background-color: ${({ theme }) => theme.colors.blue};
      }
    }
  
  span {
      color: ${({ theme }) => theme.colors.violet};
      font-weight: 700;
    
    ${({ theme }) => theme.media.md} {
        background-color: ${({ theme }) => theme.colors.yellow};
    }

    &.pink {
        background-color: transparent;
        color: ${({ theme }) => theme.colors.pink};
    }
  }
`

const About = styled.p`
    font-size: 30px;
    line-height: 2.5rem;
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
      <About>
        ~Hi! I’m <span>front-end developer</span> &
        <span className="pink"><br></br> beginner web designer </span>
        <br></br>
      </About>
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
