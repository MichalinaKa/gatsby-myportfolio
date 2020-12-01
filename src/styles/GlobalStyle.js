import {
    createGlobalStyle
} from "styled-components"
import * as font from '../assets/fonts';


const GlobalStyle = createGlobalStyle `
/* examples of setting colors */
  :root {
 
  }

  @font-face {
    font-display: block;
    font-family: "IBMPlexMono";
    font-style: normal;
    font-weight: 400;
    src: url('${font.IBMPlexMono400}') format("woff2");
  }

  @font-face {
    font-display: block;
    font-family: "IBMPlexMono";
    font-style: normal;
    font-weight: 700;
    src: url('${font.IBMPlexMono700}') format("woff2");
  }


  @font-face {
    font-display: block;
    font-family: "GilbertBold";
    font-style: normal;
    font-weight: 400;
    src: url('${font.GilbertBold}') format("woff");
  }

  @font-face {
    font-display: block;
    font-family: "GilbertColor";
    font-style: normal;
    font-weight: 700;
    src: url('${font.GilbertColor}') format("woff");
  }


  @font-face {
    font-style: regular;
    font-family: "MajorMono";
    font-weight: 400;
    src: url('${font.MajorMono}') format("woff");
  }
  /* Set core body defaults */
  body {
    line-height: 1.5;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color:${({ theme }) => theme.colors.dirtyPink};
    font-family: 'IBMPlexMono', sans-serif;
  }


  /* Box sizing rules */
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }


  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    display: block;
    max-width: 100%;
  }

  /* Inherit fonts for inputs and buttons */
  button,
  input,
  select,
  textarea {
    font: inherit;
  }


`
export default GlobalStyle