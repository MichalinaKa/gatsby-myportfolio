import styled from "styled-components"
import React from "react"
import SEO from "./seo"
import SocialLinksCenter from "./socialCenter"

const MainWrapper = styled.div`
    margin: 100px auto 0; 
    background-color:${({theme}) => theme.colors.yellow}; 
    width: 500px;
    height: 500px;
    border-radius: 50% 50px;
    padding: 50px 3% 4% 4%;
    overflow: hidden;
    text-align: right;


`

const Lemon1 = styled.div`
    margin: -10px auto 0; 
    background-color:${({theme}) => theme.colors.yellow}; 
    width: 100px;
    height: 100px;
    left: 20%;
    border-radius: 10px 50%;
    position:fixed;
    overflow: hidden;
    text-align: right;

`

const Lemon2 = styled.div`
    background-color:${({theme}) => theme.colors.yellow}; 
    width: 150px;
    height: 150px;
    left: 80%;
    top: 50%;
    border-radius: 50% 10px;
    position:fixed;
    overflow: hidden;
    text-align: right;

`

const Lemon3 = styled.div`
    background-color:${({theme}) => theme.colors.yellow}; 
    width: 70px;
    height: 70px;
    left: 60%;
    top: 80%;
    border-radius: 10px 50%;
    position:fixed;
    overflow: hidden;
    text-align: right;

`

const Lemon4 = styled.div`
    background-color:${({theme}) => theme.colors.yellow}; 
    width: 130px;
    height: 130px;
    left: 12%;
    top: 80%;
    border-radius: 50% 10px ;
    position:fixed;
    overflow: hidden;
    text-align: right;

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