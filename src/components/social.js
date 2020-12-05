import React from "react"
import styled from "styled-components"
import Github from "../assets/icons/github.png"
import Linkedin from "../assets/icons/linkedin.png"
import Instagram from "../assets/icons/instagram.png"

const SocialWrapper = styled.div`
    width: 52px;
    height: 200px;  
    position: absolute;
    top:70%;  
    left: 10px;;
    display:flex;
    align-items: stretch;
    padding-top: 30px;
   ${({ theme }) => theme.media.sm} {
        top:60%;  
        left: 30px;
    }
   ${({ theme }) => theme.media.sm} {
        top:60%;  
        left: 30px;
    }
    ${({ theme }) => theme.media.md} {
        top:60%;  
        left: 40px;
    }
    ${({ theme }) => theme.media.lg} {
        top:60%;  
        left: 85px;;
    }
    ${({ theme }) => theme.media.xl} {
        background-color: ${({ theme }) => theme.colors.dirtyPink};
      
    }
    a {
    position: relative;

  
}
    .github {
        &::before {
        content: "";
        background-image: url(${Github});
        background-size: contain;
        background-repeat: no-repeat;
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 32px;
        height: 32px;
  }
    }
    .linkedin {
        &::before {
        content: "";
        background-image: url(${Linkedin});
        background-size: contain;
        background-repeat: no-repeat;
        display: block;
        position: absolute;
        top: 50px;
        left: 0px;
        width: 32px;
        height: 32px;
  }
    }
    .instagram {
        &::before {
        content: "";
        background-image: url(${Instagram});
        background-size: contain;
        background-repeat: no-repeat;
        display: block;
        position: absolute;
        top: 100px;
        left: 0px;
        width: 32px;
        height: 32px;
  }
    }
    

`

const SocialLinks = ({props}) => (
  <>
    <SocialWrapper>
      <a href="https://github.com/MichalinaKa" target="_blank" rel="noreferrer" className="github"></a>
      <a href="https://www.linkedin.com/in/michalina-kamińska89/" rel="noreferrer" target="_blank" className="linkedin">
      </a>
      <a href="https://www.instagram.com/michalina_ka/" rel="noreferrer" target="_blank" className="instagram"></a>
    </SocialWrapper>
  </>
)

export default SocialLinks
