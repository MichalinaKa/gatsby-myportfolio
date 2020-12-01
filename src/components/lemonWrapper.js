import styled from "styled-components"
import React from "react"
import SEO from "./Seo"
import SocialLinksCenter from "./SocialCenter"

const MainWrapper = styled.div`
    margin: -100px auto 0; 
    background-color:${({theme}) => theme.colors.yellow}; 
    width: 500px;
    height: 500px;
    border-radius: 50% 50px;
    padding: 50px 3% 4% 4%;
    overflow: hidden;
    text-align: right;

`

const Wrapper = ({props}) => (
  <>
    <SEO title="404: Not found" />
    <MainWrapper>
    <h1>I believe when <br></br> life gives you <br></br>lemons, you should make lemonade.. ;)</h1>
    <p>Unfortunately this page doesn&#39;t exist yet ;) But you can know more about me here    </p>
    <SocialLinksCenter/>
    </MainWrapper>

  </>
)


export default Wrapper