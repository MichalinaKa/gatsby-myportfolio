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
      /* display: block; */
      width: 32px;
      height: 32px;
}
    height: 50px;
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
     ${({ theme }) => theme.media.lg} {
      }
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
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
        }
      }
      avesso: file(relativePath: { eq: "avesso-project.png" }) {
        id
        childImageSharp {
         fluid(maxHeight: 500, maxWidth: 800, quality: 100) {
            base64
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
        }
      }
      wedding: file(relativePath: { eq: "wedding-ceremony.png" }) {
        id
        childImageSharp {
          fluid(maxHeight: 500, maxWidth: 800, quality: 100) {
            base64
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
        }
      }
      amesa: file(relativePath: { eq: "amesa-project.png" }) {
        id
        childImageSharp {
           fluid(maxHeight: 500, maxWidth: 800, quality: 100) {
            base64
            srcWebp
            srcSetWebp
            originalImg
            originalName
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
            <p>First portfolio website, not ideal but made with Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus accusamus consectetur a. Dolorum quis alias distinctio recusandae accusamus sit doloribus itaque repellat quisquam laboriosam. Aperiam iusto libero molestias officiis!</p>{" "}
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
            <Img fluid={data.portfolio.childImageSharp.fluid} />{" "}
          </ImgWrapper>{" "}

        </Portfolio>{" "}
        
        <Avesso>
          <h1> Avesso </h1>{" "}

          <Description className="avesso">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis
              atque aspernatur ducimus temporibus dolorem aliquid id, cumque
              eligendi quas fugit reiciendis ipsa.Provident repellat, earum
              placeat nam consequatur reiciendis maiores.{" "}
            </p>{" "}
            <IconsWrapper>
              <li>
                <a href="https://github.com/MichalinaKa/Avesso_version1"><GithubLink> </GithubLink></a>

              </li>
              <li>
                <a href="http://avesso.virose.pt"> <Eye> </Eye></a>
              </li>
            </IconsWrapper>

            <span>AdobeXD ~ Gatsby ~ styled-components ~ Graphql</span>{" "}
          </Description>{" "}

          <ImgWrapper className="avesso--first">
            <Img fluid={data.avesso.childImageSharp.fluid} />{" "}
          </ImgWrapper>{" "}
        </Avesso>{" "}
       
         <Wedding>
          <h1> Wedding website </h1>{" "}
          <Description className="wedding">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate
              aut dicta assumenda iusto at, quisquam, quibusdam accusamus
              dignissimos vel commodi quasi sit, perferendis amet! Dolorum natus
              dignissimos a provident deserunt.{" "}
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
            <Img fluid={data.wedding.childImageSharp.fluid} />{" "}
          </ImgWrapper>{" "}
        </Wedding>
       
         <Amesa>
          <h1> Amesa </h1>

          <Description className="amesa">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate
              aut dicta assumenda iusto at, quisquam, quibusdam accusamus
              dignissimos vel commodi quasi sit, perferendis amet! Dolorum natus
              dignissimos a provident deserunt.{" "}
            </p>{" "}

            <IconsWrapper>
              <li>
                <a href="https://github.com/MichalinaKa/amesa_sklep"><GithubLink> </GithubLink></a>

              </li>
              <li>
                <a href="http://amesa.pl" > <Eye> </Eye></a>
              </li>
            </IconsWrapper>

            <span>AdobeXD ~ html ~ css ~ js ~ wordpress ~ woocommerce</span>
          </Description>
          <ImgWrapper className="amesa--first">
            <Img fluid={data.amesa.childImageSharp.fluid} />
          </ImgWrapper>
        </Amesa>

      </ProjectsMain>{" "}
    </section>
  )
}

export default ProjectsContainer
