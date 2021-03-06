import React from "react"
import styled from "styled-components"
import Github from "../assets/icons/github.png"
import Linkedin from "../assets/icons/linkedin.png"
import Instagram from "../assets/icons/instagram.png"

const SocialWrapper = styled.div`
    width: 150px;
    height: 32px;  
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
    display:flex;
    flex-wrap: nowrap;
    align-items: stretch;
    z-index: 11;
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
        top: 0px;
        left: 50px;
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
        top: 0px;
        left: 100px;
        width: 32px;
        height: 32px;
      }
    }
`

const SocialLinksCenter = ({props}) => (
  <>
    <SocialWrapper>
      <a href="https://github.com/MichalinaKa" target="_blank" rel="noreferrer"  className="github"></a>
      <a href="https://www.linkedin.com/in/michalina-kamińska89/" target="_blank" rel="noreferrer"  className="linkedin">
      </a>
      <a href="https://www.instagram.com/michalina_ka/" target="_blank" rel="noreferrer" className="instagram"></a>
    </SocialWrapper>
  </>
)

export default SocialLinksCenter
