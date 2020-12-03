import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const ProjectsMain = styled.div`
  position: relative;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;

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

const ImgWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  object-fit: contain;
  width: 100%;
  height:250px;

  ${({ theme }) => theme.media.sm} {
    height: 350px;
  }
  ${({ theme }) => theme.media.md} {
    height: 500px;
  }

  ${({ theme }) => theme.media.lg} {
    height: 600px;
  }
  &.portfolio--first {

    .gatsby-image-wrapper {
        margin: 0 auto;
        position: absolute;
        box-shadow: 2px 2px 40px 14px rgba(255, 255, 255, 0.51);
        width: 100%;
        height: 100%;
        left: 0;
        object-fit: contain;
      ${({ theme }) => theme.media.md} {
        left: 70%;
        top: -100px;
        position: absolute;
        box-shadow: 2px 2px 40px 14px rgba(255, 255, 255, 0.51);
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  &.avesso--first {
    .gatsby-image-wrapper {
      ${({ theme }) => theme.media.md} {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: contain;
        left: -30%;
        top: -30%;
        box-shadow: 2px 2px 40px 14px rgba(255, 255, 255, 0.51);
      }
    }
  }

  &.wedding--first {
    .gatsby-image-wrapper {
      ${({ theme }) => theme.media.md} {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: contain;
        left: 70%;
        top: 40%;
        box-shadow: 2px 2px 40px 14px rgba(255, 255, 255, 0.51);
      }
    }
  }
  &.amesa--first {
    .gatsby-image-wrapper {
      ${({ theme }) => theme.media.md} {
        width: 100%;
        height: 80%;
        position: absolute;
        object-fit: contain;
        left: -30%;
        top: -20%;
        box-shadow: 2px 20px 40px 14px rgba(255, 255, 255, 0.51);
      }
    }
  }
`

const Portfolio = styled.section`
    width:100%;
    height: auto;

  ${({ theme }) => theme.media.md} {
    width: 900px;
    height: 500px;
    margin-bottom: 200px;
    border: 20px solid ${({ theme }) => theme.colors.pink};
    position: relative;
  }

  h1 {
    ${({ theme }) => theme.media.md} {
      position: absolute;
      right: 30%;
      color: ${({ theme }) => theme.colors.white};
      top: 0px;
      left: -150px;
      z-index: 1;
      font-size: 80px;
    }
  }
`

const Avesso = styled.section`
  width:100%;

  ${({ theme }) => theme.media.md} {
    width: 900px;
    height: 500px;
    margin-bottom: 300px;
    border: 20px solid ${({ theme }) => theme.colors.black};
    position: relative;
  }
  h1 {
    ${({ theme }) => theme.media.md} {
      position: absolute;
      right: 30%;
      color: ${({ theme }) => theme.colors.white};
      top: -50px;
      right: -50px;
      z-index: 1;
      font-size: 100px;
    }
  }
`
const Wedding = styled.section`
width:100%;

  ${({ theme }) => theme.media.md} {
    width: 900px;
    height: 500px;
    margin-bottom: 200px;
    border: 20px solid ${({ theme }) => theme.colors.pink};
    position: relative;
  }

  h1 {
    ${({ theme }) => theme.media.md} {
      position: absolute;
      color: ${({ theme }) => theme.colors.white};
      top: -12%;
      left: 40%;
      z-index: 1;
      font-size: 80px;
    }
  }
`

const Amesa = styled.section`
width:100%;

  ${({ theme }) => theme.media.md} {
    width: 900px;
    height: 500px;
    margin-bottom: 100px;
    border: 20px solid ${({ theme }) => theme.colors.blueNormal};
    position: relative;
  }

  h1 {
    ${({ theme }) => theme.media.md} {
      position: absolute;
      left: 40%;
      color: ${({ theme }) => theme.colors.white};
      top: 0px;
      z-index: 1;
      font-size: 80px;
    }
  }
`

const Description = styled.div`
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  font-family: "Jost";
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.media.md} {
    position: absolute;
    padding: 40px;
  }

  span {
    width: 100%;
    letter-spacing: 2px;
    font-family: "MajorMono";
    padding: 10px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.dirtyPink};
    background-color: ${({ theme }) => theme.colors.dirtyPink};
    ${({ theme }) => theme.media.md} {
      display: block;
    }
  }

  &.avesso {
width: 100%;
    ${({ theme }) => theme.media.md} {
      left: 40%;
      top: 30%;
      /* width: 80%; */
    }
  }
  &.amesa {
    ${({ theme }) => theme.media.md} {
      left: 20%;
      top: 60%;
    }
  }
  &.wedding {
    ${({ theme }) => theme.media.md} {
      left: 10%;
      top: 10%;
      /* width: 40%; */
    }
  }
`

const ProjectsContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      portfolio: file(relativePath: { eq: "portfolio.png" }) {
        id
        childImageSharp {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
        }
      }
      avesso: file(relativePath: { eq: "avesso.png" }) {
        id
        childImageSharp {
          fluid {
            base64
            tracedSVG
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
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
        }
      }
      amesa: file(relativePath: { eq: "amesa.png" }) {
        id
        childImageSharp {
          fluid {
            base64
            tracedSVG
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
        <Portfolio>
          <h1> Portfolio </h1>{" "}
          <Description className="portfolio">
            <p>First portfolio website, not ideal but made with </p>{" "}
            <span> AdobeXD~Gatsby~styled - components~Graphql </span>{" "}
          </Description>
          <ImgWrapper className="portfolio--first">
            <Img fluid={data.portfolio.childImageSharp.fluid} />{" "}
          </ImgWrapper>{" "}
        </Portfolio>{" "}
        <Avesso>
          <h1> Avesso </h1>{" "}
          <ImgWrapper className="avesso--first">
            <Img fluid={data.avesso.childImageSharp.fluid} />{" "}
          </ImgWrapper>{" "}
          <Description className="avesso">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Corporis
              atque aspernatur ducimus temporibus dolorem aliquid id, cumque
              eligendi quas fugit reiciendis ipsa.Provident repellat, earum
              placeat nam consequatur reiciendis maiores.{" "}
            </p>{" "}
            <a href="http://avesso.virose.pt"> ckeck website </a>{" "}
            <span> AdobeXD~Gatsby~styled - components~Graphql </span>{" "}
          </Description>{" "}
        </Avesso>{" "}
        <Wedding>
          <h1> Wedding website </h1>{" "}
          <ImgWrapper className="wedding--first">
            <Img fluid={data.wedding.childImageSharp.fluid} />{" "}
          </ImgWrapper>{" "}
          <Description className="wedding">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate
              aut dicta assumenda iusto at, quisquam, quibusdam accusamus
              dignissimos vel commodi quasi sit, perferendis amet! Dolorum natus
              dignissimos a provident deserunt.{" "}
            </p>{" "}
            <a href="../../wedding-website.pdf"> CV </a>{" "}
            <span> AdobeXD~html~css~js </span>{" "}
          </Description>{" "}
        </Wedding>
        <Amesa>
          <h1> Amesa woocommerce </h1>
          <ImgWrapper className="amesa--first">
            <Img fluid={data.amesa.childImageSharp.fluid} />
          </ImgWrapper>
          <Description className="amesa">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Cupiditate
              aut dicta assumenda iusto at, quisquam, quibusdam accusamus
              dignissimos vel commodi quasi sit, perferendis amet! Dolorum natus
              dignissimos a provident deserunt.{" "}
            </p>{" "}
            <a href="../../wedding-website.pdf"> CV </a>{" "}
            <span> AdobeXD ~ html ~ css ~ js ~ wordpress ~ woocommerce </span>
          </Description>{" "}
        </Amesa>

      </ProjectsMain>{" "}
    </section>
  )
}

export default ProjectsContainer
