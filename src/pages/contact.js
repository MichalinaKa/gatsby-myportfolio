import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialLinks from "../components/social"
import styled from "styled-components"

const ContactWrapper = styled.div`
  width: 550px;
  height: 550px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.pink};
  margin: 100px auto 0px;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  position: relative;
  box-shadow: 1px -2px 19px 16px #e35c85;
  animation-name: changeColors1;
  animation-duration: 10s;
  @keyframes changeColors1 {
    0% {
      background-color: ${({ theme }) => theme.colors.dirtyPink};
      box-shadow: 1px -2px 19px 16px #e3dcde;
      width: 0px;
      height: 0px;
    }
    30% {
      background-color: ${({ theme }) => theme.colors.pink};
      box-shadow: 1px -2px 19px 16px #e35c85;
    }
    40% {
      background-color: ${({ theme }) => theme.colors.yellow};
      box-shadow: 1px -2px 19px 16px #fdffba;
    }
    80% {
      background-color: ${({ theme }) => theme.colors.pink};
      box-shadow: 1px -2px 19px 16px #e35c85;
    }
    85% {
      background-color: ${({ theme }) => theme.colors.pink};
      box-shadow: 1px -2px 19px 16px #e35c85;
    }
    100% {
      background-color: ${({ theme }) => theme.colors.pink};
      box-shadow: 1px -2px 19px 16px #e35c85;
    }
  }
`

const H1 = styled.h1`
      color: ${({ theme }) => theme.colors.yellow};
      font-size: 120px;
      position: absolute;
      left: -250px;
      top: -50px;
      animation-name: changeColors2;
      font-family: 'Jost';
      animation-duration: 10s;
      @keyframes changeColors2
      {
        0% { color: ${({ theme }) => theme.colors.dirtyPink};   font-size: 2px;;}
        30% { color: ${({ theme }) => theme.colors.yellow}}
        40% { color: ${({ theme }) => theme.colors.pink} }
        80% { color: ${({ theme }) => theme.colors.yellow} }
        85% { color: ${({ theme }) => theme.colors.yellow}}
        100% { color: ${({ theme }) => theme.colors.yellow}}
        }
`

const H2 = styled.h2`
      color: ${({ theme }) => theme.colors.white};
      font-size: 40px;
      line-height: 3rem;;
      position: relative;
      text-align: center;
      animation-name: fadeIn3;
      animation-duration: 10s;
      top: 170px;
      font-family: "MajorMono";
      letter-spacing: 1.6px;

      @keyframes fadeIn3
      {
        0% { opacity: 0; font-size: 0;}
        90% { opacity: 0; }
        100% { opacity: 1;font-size: 40px;}
      }
`
const H3 = styled.h3`
      color: ${({ theme }) => theme.colors.yellow};
      font-size: 25px;
      position: relative;
      text-align: center;
      animation-name: fadeIn4;
      animation-duration: 10s;
      font-family: 'Jost';
      top: 170px;

      @keyframes fadeIn4
      {
        0% { opacity: 0; font-size: 0; }
        90% { opacity: 0; font-size: 0;}
        100% { opacity: 1 }
      }
 `

const Box = styled.div`
  width: 200px;
  height: 200px;
  margin-left: 40px;
  border-radius: 50%;
  position: absolute;
  left: 77%;
  top: 60%;
  animation-name: changeColors;
  animation-duration: 10s;
  /* animation-iteration-count: 4; */
`

const Box1 = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  left: 14%;
  top: 20%;
  animation-name: changeColors;
  animation-duration: 13s;
  animation-iteration-count: 2;
`

const Box2 = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  opacity: 0.7;
  position: absolute;
  left: 20%;
  top: 70%;
  animation-name: changeColors;
  animation-duration: 8s;
  animation-iteration-count: 2;
`


const Box3 = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  opacity: 0.7;
  position: absolute;
  left: 54%;
  top: -2px;
  animation-name: changeColors;
  animation-duration: 6s;
  animation-iteration-count: 2;

  @keyframes changeColors {
    0% {
      background-color: ${({ theme }) => theme.colors.dirtyPink};
      box-shadow: 1px -2px 19px 16px #e3dcde;
      top: 80%;
      left: 50%;
    }
    30% {
      background-color: ${({ theme }) => theme.colors.pink};
      box-shadow: 1px -2px 19px 16px #e35c85;
    }
    40% {
      background-color: ${({ theme }) => theme.colors.pink};
      box-shadow: 1px -2px 19px 16px #e35c85;
    }
    60% {
      background-color: ${({ theme }) => theme.colors.yellow};
      box-shadow: 1px -2px 19px 16px #fdffba;
    }
    80% {
      background-color: ${({ theme }) => theme.colors.yellow};
      box-shadow: 1px -2px 19px 16px #fdffba;
    }
    90% {
      background-color: ${({ theme }) => theme.colors.dirtyPink};
      box-shadow: 1px -2px 19px 16px #e3dcde;
    }
  }
`

const ContactPage = () => (
<>
  <Layout>
    <SEO title="Contact - Michalina Kaminska" />
    <Box />
    <Box1 />
    <Box2 />
    <Box3 />
    <SocialLinks />
    <ContactWrapper >
      <H1> Let 's talk</H1>{" "}
      <H2>Currently living in Gliwice, Poland. <br></br>Open for work. </H2>
       <H3> kaminskaa.michalina @gmail.com </H3>
      <H2> <a href="../../kaminska_11.2020.pdf" > CV </a></H2>
    </ContactWrapper>
    </Layout>
</>

)

export default ContactPage