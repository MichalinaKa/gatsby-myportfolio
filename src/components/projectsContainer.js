import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import Github from "../assets/icons/github.png"
import EyeIcon from "../assets/icons/eye.png"
import PDFwedding from "../../static/wedding-website.pdf"

const ProjectsMain = styled.div`
  position: relative;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  z-index: 1;

  ${({ theme }) => theme.media.sm} {
  }

  ${({ theme }) => theme.media.md} {
  }

  ${({ theme }) => theme.media.lg} {
  }

  ${({ theme }) => theme.media.xxl} {
    margin: 150px 100px 0;
  }
`

const IconsWrapper = styled.ul`
  display: flex;
  width: 60px;
  justify-content: space-between;

`

const GithubLink = styled.div`
    position: relative;
    width: 32px;
    height: 32px;
    a {
        padding: 5px;
        width: 32px;
        height: 32px;
}
      :before {
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
`

const Eye = styled.div`
    position: relative;
    height: 50px;
    z-index: 11;

    a {
        width: 32px;
        height: 32px;
        z-index: 11;
}
      :before {
        content: "";
        background-image: url(${EyeIcon});
        background-size: contain;
        background-repeat: no-repeat;
        display: block;
        position: absolute;
        top: -5px;
        left: 0px;
        width: 40px;
        height: 40px;
  }
`

const ImgWrapper = styled.div`
  margin: 0 auto 30px;;
  width: 100%;
  height:300px;

  ${({ theme }) => theme.media.sm} {
      height: 400px;
  }
  ${({ theme }) => theme.media.md} {
      height: 400px;
  }

  ${({ theme }) => theme.media.lg} {
      height: 500px;
      width:700px;
  }

  &.portfolio--first {
    .gatsby-image-wrapper {
        box-shadow: 2px 2px 40px 14px rgba(255, 255, 255, 0.51);
        margin: 50px auto 0;
        width: 90%;
        height: 100%;
        left: 0;
        object-fit: contain;
        opacity: 0.5;
 
      ${({ theme }) => theme.media.lg} {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: contain;
        opacity: 1;
        box-shadow: 2px 2px 40px 14px rgba(255, 255, 255, 0.71);
      }
    }
  }

  &.avesso--first {
    .gatsby-image-wrapper {
        box-shadow: 2px 2px 40px 14px rgba(255, 255, 255, 0.51);
        margin: 50px auto 0;
        width: 90%;
        height: 100%;
        left: 0;
        object-fit: contain;
        opacity: 0.5;

  
      ${({ theme }) => theme.media.lg} {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: contain;
        opacity: 1;
        box-shadow: 2px 2px 40px 14px rgba(255, 255, 255, 0.71);
      }
    }
  }

  &.wedding--first {
    .gatsby-image-wrapper {
        box-shadow: 2px 2px 40px 14px rgba(255, 255, 255, 0.51);
        margin: 50px auto 0;
        width: 90%;
        height: 100%;
        left: 0;
        object-fit: contain;
        opacity: 0.5;

      ${({ theme }) => theme.media.lg} {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: contain;
        opacity: 1;
        box-shadow: 2px 2px 40px 14px rgba(255, 255, 255, 0.71);
      }
    }
  }

  &.amesa--first {
      .gatsby-image-wrapper {
            box-shadow: 2px 2px 40px 14px rgba(255, 255, 255, 0.51);
            margin: 50px auto 0;
            width: 90%;
            height: 100%;
            left: 0;
            object-fit: contain;
            opacity: 0.5;

      ${({ theme }) => theme.media.lg} {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: contain;
        opacity: 1;
        box-shadow: 2px 2px 40px 14px rgba(255, 255, 255, 0.71);
      }
      }
    }
`

const Portfolio = styled.section`
    width:95%;
    height: auto;
    margin: 0 auto 100px;
    position: relative;
    border: 5px solid ${({ theme }) => theme.colors.pink};

    ${({ theme }) => theme.media.lg} {
      width: 70%;
      border: 10px solid ${({ theme }) => theme.colors.pink};
  }

  h1 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 50px;
      padding: 40px;
    ${({ theme }) => theme.media.sm} {
        font-size: 50px;
    }
    ${({ theme }) => theme.media.md} {
        font-size: 60px;
    }
    ${({ theme }) => theme.media.lg} {
      position: absolute;
      top: -50px;
      left: -150px;
      z-index: 1;
      font-size: 80px;
    }
    ${({ theme }) => theme.media.xl} {
      font-size: 90px;
    }
   ${({ theme }) => theme.media.xl} {
      font-size: 100px;
    }
  }
`

const Avesso = styled.section`
    width:95%;
    height: auto;
    margin: 0 auto 100px;
    position: relative;
    border: 5px solid ${({ theme }) => theme.colors.black};
    
${({ theme }) => theme.media.lg} {
      width: 70%;
      border: 10px solid ${({ theme }) => theme.colors.black};
  }
  h1 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 50px;
      padding: 40px;
    ${({ theme }) => theme.media.sm} {
        font-size: 50px;
    }
    ${({ theme }) => theme.media.md} {
        font-size: 60px;
    }
    ${({ theme }) => theme.media.lg} {
      position: absolute;
      top: -50px;
      right: -150px;
      font-size: 80px;
    }
   ${({ theme }) => theme.media.xl} {
      font-size: 90px;
    }
   ${({ theme }) => theme.media.xl} {
      font-size: 100px;
    }}
  }
`

const Wedding = styled.section`
    width:95%;
    height: auto;
    margin: 0 auto 100px;
    position: relative;
    border: 5px solid ${({ theme }) => theme.colors.pink};

    ${({ theme }) => theme.media.lg} {
      width: 70%;
      border: 10px solid ${({ theme }) => theme.colors.pink};
  }
  h1 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 50px;
      padding: 40px;
    ${({ theme }) => theme.media.sm} {
        font-size: 50px;
    }
    ${({ theme }) => theme.media.md} {
        font-size: 60px;
    }
    ${({ theme }) => theme.media.lg} {
       position: absolute;
      top: -50px;
      left: -150px;
      z-index: 1;
      font-size: 80px;
    }
   ${({ theme }) => theme.media.xl} {
      font-size: 90px;
    }
   ${({ theme }) => theme.media.xl} {
      font-size: 100px;
    }
  }
`

const Amesa = styled.section`
    width:95%;
    height: auto;
    margin: 0 auto 100px;
    position: relative;
    border: 5px solid ${({ theme }) => theme.colors.blueNormal};


    ${({ theme }) => theme.media.lg} {
      width: 70%;
      border: 10px solid ${({ theme }) => theme.colors.blueNormal};
  }

  h1 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 50px;
      padding: 40px;
    ${({ theme }) => theme.media.sm} {
        font-size: 50px;
    }
    ${({ theme }) => theme.media.md} {
        font-size: 60px;
    }
    ${({ theme }) => theme.media.lg} {
      position: absolute;
      top: -50px;
      right: -150px;
      z-index: 1;
      font-size: 80px;
    }
   ${({ theme }) => theme.media.xl} {
      font-size: 90px;
    }
   ${({ theme }) => theme.media.xl} {
      font-size: 100px;
    }
  }
`

const Description = styled.div`
  width: 100%;
  padding: 20px 60px 20px;
  font-size: 18px;
  text-align: justify;
  font-family: "Jost";
  color: ${({ theme }) => theme.colors.black};
 
  ${({ theme }) => theme.media.lg} {
      padding: 150px 60px 20px;
  }

  span {
    font-size: 16px;
    width: 100%;;
    letter-spacing: 1.5px;
    font-family: "MajorMono";
    padding: 10px;
    font-weight: 700;
    display: flex;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.pink};

   
    ${({ theme }) => theme.media.md} {
      letter-spacing: 2px;
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.pink};
      border: 2px solid ${({ theme }) => theme.colors.pink};
    }
  }

  &.portfolio {
    margin: 0 auto;
    width: 100%;
    z-index: 1;

    ${({ theme }) => theme.media.sm} {
    width: 90%;
      }
    ${({ theme }) => theme.media.md} {
      width: 70%
    }
    ${({ theme }) => theme.media.lg} {
      margin: 0 auto;
      width: 70%;
    }


    span {
      background-color: ${({ theme }) => theme.colors.pink};
      ${({ theme }) => theme.media.md} {
        background-color: ${({ theme }) => theme.colors.pink};
        border: 2px solid ${({ theme }) => theme.colors.pink};
      }
    }
  }
  &.avesso {
    margin: 0 auto;
    width: 100%;
    z-index: 1;
    ${({ theme }) => theme.media.sm} {
    width: 90%;
      }
    ${({ theme }) => theme.media.md} {
      width: 70%
    }

    ${({ theme }) => theme.media.lg} {
      margin: 0 auto;
      width: 70%;
    }
span {
      background-color: ${({ theme }) => theme.colors.black};
      ${({ theme }) => theme.media.md} {
        border: 2px solid ${({ theme }) => theme.colors.black};
      }
    }
  }
  &.amesa {
     margin: 0 auto;
     width: 100%;
     z-index: 1;
     ${({ theme }) => theme.media.sm} {
     width: 90%;
      }
     ${({ theme }) => theme.media.md} {
      width: 70%
     }

    ${({ theme }) => theme.media.lg} {
      margin: 0 auto;
      width: 70%;
    }

span {
      background-color: ${({ theme }) => theme.colors.blueNormal};
      ${({ theme }) => theme.media.md} {
        background-color: ${({ theme }) => theme.colors.blueNormal};
        border: 2px solid ${({ theme }) => theme.colors.blue};
      }
    }
  }
  &.wedding {
      margin: 0 auto;
      width: 100%;
      z-index: 1;
      ${({ theme }) => theme.media.sm} {
      width: 90%;
        }
      ${({ theme }) => theme.media.md} {
        width: 70%
      }
    ${({ theme }) => theme.media.lg} {
      margin: 0 auto;
      width: 70%;
    }

span {
      background-color: ${({ theme }) => theme.colors.pink};
      ${({ theme }) => theme.media.md} {
        background-color: ${({ theme }) => theme.colors.pink};
        border: 2px solid ${({ theme }) => theme.colors.pink};
      }
    }
  }
`

const ProjectsContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      portfolio: file(relativePath: { eq: "portfolio-project.png" }) {
        id
        childImageSharp {
          fluid(maxHeight: 500, maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avesso: file(relativePath: { eq: "avesso-project.png" }) {
        id
        childImageSharp {
         fluid(maxHeight: 500, maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid

          }
        }
      }
      wedding: file(relativePath: { eq: "wedding-ceremony.png" }) {
        id
        childImageSharp {
          fluid(maxHeight: 500, maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid

          }
        }
      }
      amesa: file(relativePath: { eq: "amesa-project.png" }) {
        id
        childImageSharp {
           fluid(maxHeight: 500, maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid

          }
        }
      }
    }
  `)


  return (
    <section>
      <ProjectsMain>

        <Portfolio id="top">
          <h1> Portfolio </h1>{" "}
          <Description className="portfolio">
            <h3>My first portfolio website</h3>
            <h4>DURATION: 1 week (time after work)</h4>
            <p>Portfolio website, made with Gatsby and styled-components. Like other projects, designed in AdobeXD. Realized with mobile first approach.</p>
            <IconsWrapper>
              <li>
                <a href="https://github.com/MichalinaKa/gatsby-myportfolio"><GithubLink> </GithubLink></a>
              </li>
              <li>
                <a href="https://gatsby-myportfolio.michalinaka.vercel.app/"> <Eye> </Eye></a>
              </li>
            </IconsWrapper>

            <span>AdobeXD ~ Gatsby ~ styled-components ~ Graphql</span>{" "}
          </Description>

          <ImgWrapper className="portfolio--first">
            <Img fluid={data.portfolio.childImageSharp.fluid} alt="Gatsby portfolio"/>
          </ImgWrapper>{" "}

        </Portfolio>{" "}
        
        <Avesso>
          <h1> Avesso </h1>{" "}

          <Description className="avesso">
            <h3>Online exhibition</h3>
            <h4>DURATION: 3 weeks (8 hours per day)</h4>
            <p>
           STORY: In march 2020, time of Covid-19, a friend of mine who is a Ph.D student at University of Arts in Porto asked me for some help in creating  a website for an online exhibition. Worldwide situation made impossible any kind of live meeting, but nothing could affect our motivation!</p>
          <p>This project was developed as follows. 1 step: project expectations, 2 step: set the main points for the design, 3 step: first design, 4 step: technology was chosen, 5 step: MAKE EVERYTHING REAL :) </p>
            <p>The main challenge in that project was the technology, considering that my only approach to Gatsby on that time  was on an online course at eduweb.pl. I had to learn while working on that website, but in just 3 weeks magic happened!</p>
            <IconsWrapper>
              <li>
                <a href="https://github.com/MichalinaKa/Avesso_version1"><GithubLink> </GithubLink></a>
              </li>
              <li>
                <a href="http://avesso.virose.pt"> <Eye> </Eye></a>
              </li>
            </IconsWrapper> 
            <span>AdobeXD ~ Gatsby ~ styled-components ~ Graphql</span>{" "}
          </Description>
          <ImgWrapper className="avesso--first">
            <Img fluid={data.avesso.childImageSharp.fluid} alt="avesso online exhibition"/>
          </ImgWrapper>{" "}
        </Avesso>{" "}
       
         <Wedding>
          <h1> Wedding website </h1>
          <Description className="wedding">
            <h4>DURATION: 2 months (from time to time)</h4>
            <p>
             My own wedding website first made for our ceremony in 2020. 
            </p>
          
            <p>I started this project on May 2019. On the beginning I felt unable to face it all by myself, also because a lot of things were problematic for me. But despite of all I did it, and it's been a so important achievement for me! And it will be always a pleasure to come back to it for make some required improvements or changes.</p>
            <p>Unfortunately, because of current pandemy we had to postpone the event, so that's why the website now is off. A good moment indeed to plan some changes, for example to rewrite it in Gatsby.</p>
            <p>
            Here in attachement pdf version and code on Github.
            </p>
            <IconsWrapper>
              <li>
                <a href="https://github.com/MichalinaKa/wedding-website"><GithubLink> </GithubLink></a>
              </li>
              <li>
                <a href={PDFwedding} download> <Eye> </Eye></a>
              </li>
            </IconsWrapper>

            <span>AdobeXD ~ html ~ css ~ js</span>{" "}
          </Description>{" "}
          <ImgWrapper className="wedding--first">
            <Img fluid={data.wedding.childImageSharp.fluid} alt="wedding html css"/>
          </ImgWrapper>{" "}
        </Wedding>
       
         <Amesa>
          <h1> Amesa </h1>
          <Description className="amesa">
            <h3>Online shop</h3>
            <h4>DURATION: 2 months till now (2-3 hours per day, made in cooperation with friend)</h4>{" "}
            <p>
             Project in progress. Making from the beginning to the end. 
            </p>
            <p>
              Steps: <br></br>1. Searching ideas for the new shop. <br></br>2. Fixing style (colors, patterns, main theme, important elements). <br></br>3. Design made in AdobeXD. <br></br>4. Work, work, work.... ;) 
            </p><br></br>
            <p>
            </p>
            <IconsWrapper>
              {/* <li>
                <a href="https://github.com/MichalinaKa/amesa_sklep"><GithubLink> </GithubLink></a>
              </li> */}
              <li>
                <a href="http://misza.test.gradiamdigital.pl" > <Eye> </Eye></a>
              </li>
            </IconsWrapper>
            <span>AdobeXD ~ html ~ css ~ js ~ wordpress ~ woocommerce</span>
          </Description>
          <ImgWrapper className="amesa--first">
            <Img fluid={data.amesa.childImageSharp.fluid} alt="woocommerce amesa"/>
          </ImgWrapper>
        </Amesa>

      </ProjectsMain>
    </section>
  )
}

export default ProjectsContainer
