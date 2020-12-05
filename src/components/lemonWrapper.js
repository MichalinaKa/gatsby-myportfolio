import styled from "styled-components"
import React from "react"
import SEO from "./seo"
import SocialLinksCenter from "./socialCenter"

const MainWrapper = styled.div`
    margin: 50px auto 0; 
    background-color:${({theme}) => theme.colors.yellow}; 
    width: 300px;
    height: 300px;
    border-radius: 50% 50px;
    padding: 30px 6% 4% 6%;
    overflow: hidden;
    text-align: right;
    position: relative; 
    z-index: 11;
    h1 {
        font-size: 20px;
    }   
    p {
        line-height: 1rem;
        font-size: 16px;
    }

  ${({ theme }) => theme.media.sm} {
    margin: 0 auto ; 
    width: 500px;
    height: 500px;
    padding: 70px 10% 4% 10%;
    overflow: hidden;
    text-align: right;
    h1 {
        font-size: 25px;
    }
    p {
        line-height: 1.4rem;
    }
  }
  ${({ theme }) => theme.media.md} {
    margin: 50px auto 0; 
    width: 500px;
    height: 500px;
    padding: 50px 3% 4% 4%;
    overflow: hidden;
    text-align: right;
    h1 {
        font-size: 35px;
    }
  }



`

const Lemon1 = styled.div`
  ${({ theme }) => theme.media.lg} {
    margin: -10px auto 0; 
    background-color:${({theme}) => theme.colors.yellow}; 
    width: 100px;
    height: 100px;
    left: 20%;
    border-radius: 10px 50%;
    position:fixed;
    overflow: hidden;
    text-align: right;

   
  }
`
const Lemon2 = styled.div`
  ${({ theme }) => theme.media.lg} {
    background-color:${({theme}) => theme.colors.yellow}; 
    width: 150px;
    height: 150px;
    left: 80%;
    top: 50%;
    border-radius: 50% 10px;
    position:fixed;
    overflow: hidden;
    text-align: right;

   
  }
    

`

const Lemon3 = styled.div`
  ${({ theme }) => theme.media.lg} {
    background-color:${({theme}) => theme.colors.yellow}; 
    width: 70px;
    height: 70px;
    left: 60%;
    top: 80%;
    border-radius: 10px 50%;
    position:fixed;
    overflow: hidden;
    text-align: right;

   
  }


`

const Lemon4 = styled.div`
  ${({ theme }) => theme.media.lg} {
    background-color:${({theme}) => theme.colors.yellow}; 
    width: 130px;
    height: 130px;
    left: 12%;
    top: 80%;
    border-radius: 50% 10px ;
    position:fixed;
    overflow: hidden;
    text-align: right;
   
  }
 

`

const Wrapper = ({props}) => (
  <>
    <SEO title="404: Not found" />
    <Lemon1/>
    <Lemon2/>
    <Lemon3/>
    <Lemon4/>

    <MainWrapper>
    <h1>I believe when <br></br> life gives you <br></br>lemons, you should make lemonade.. ;)</h1>
    <p>Unfortunately this page doesn&#39;t exist yet ;) But you can know more about me here    </p>
    <SocialLinksCenter/>
    </MainWrapper>

  </>
)


export default Wrapper