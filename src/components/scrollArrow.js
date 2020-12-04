/* eslint-disable no-undef */

import React, { useState } from "react"
import styled from "styled-components"
import ArrowDown from "../images/long-arrow-down.svg"

const ScrollInfo = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 0.875rem; //14px
  line-height: 1;
  letter-spacing: 0.1rem; //1.6px
  color: ${({ theme }) => theme.colors.black};
  writing-mode: tb;
  position: fixed;
  width: 10vw;
  right: 0rem;
  top: 18.75rem; //300px
  display: inline-block;
  align-items: center;
  height: 1.25rem; //20px
  padding: 0 1.875rem; //0 30px
  align-items: flex-start;
  z-index: 1000;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;
  transform: translateY(0);

  &:after {
    content: url(${ArrowDown});
    position: absolute;
    top: 5rem;;
    right: 40px;
    transition: all 0.2s ease-in-out;
    transform-origin: 50% 50%;
    animation-iteration-count: infinite;
    animation-duration: 3s;
    animation: scroll-down 6s ease infinite;
  }

  @keyframes scroll-down {
    0% {
      transform: translateY(0);
    }
    5.55556% {
      transform: translateY(0);
    }
    11.11111% {
      transform: translateY(0);
    }
    22.22222% {
      transform: translateY(-15px);
    }
    27.77778% {
      transform: translateY(0);
    }
    33.33333% {
      transform: translateY(-15px);
    }
    44.44444% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }
`

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(true)
  const checkScrollTop = () => {
    if (window.pageYOffset >= document.body.clientHeight - 1400) {
      setShowScroll(false)
    } else {
      setShowScroll(true)
    }
  }

  // eslint-disable-next-line no-unused-expressions
  typeof window !== "undefined" &&
    window.addEventListener("scroll", checkScrollTop)
  return (
    <>
      <ScrollInfo style={{ height: 40, display: showScroll ? "flex" : "none" }}>
        more projects
      </ScrollInfo>
    </>
  )
}

export default ScrollArrow
