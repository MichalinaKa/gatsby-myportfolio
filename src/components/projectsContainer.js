import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"



const ProjectsMain = styled.div`
  display: grid;
  position: relative;
  margin: 150px 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImgWrapper = styled.div`
  /* position: relative; */
  width: 600px;
  height: 400px;
  &.portfolio--first {
    .gatsby-image-wrapper {
      box-shadow: 2px 2px 40px 14px rgba(255, 255, 255, 0.51);
      width: 100%;
      height: 70%;
      position: absolute;
      object-fit: contain;
      left: 70%;
      top: -100px;
    }
  }
  &.avesso--first {
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: contain;
      left: -30%;
      top: -30%;
      box-shadow: 2px 2px 40px 14px rgba(255, 255, 255, 0.51);
    }
  }
  &.wedding--first {
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: contain;
      left: 70%;
      top: 40%;
      box-shadow: 2px 2px 40px 14px rgba(255, 255, 255, 0.51);
    }
  }
  &.amesa--first {
    .gatsby-image-wrapper {
      width: 100%;
      height: 80%;
      position: absolute;
      object-fit: contain;
      left: -30%;
      top: -20%;
      box-shadow: 2px 20px 40px 14px rgba(255, 255, 255, 0.51);
    }
  }
`

const Portfolio = styled.section`
    width: 900px;
    height: 500px;
    margin-bottom: 200px;
    border: 20px solid ${({ theme }) => theme.colors.pink};
    position: relative;

    }
    h1 {
      position: absolute; 
      right: 30%;   
      color: ${({ theme }) => theme.colors.white};
      top:0px;
      left: -150px;
      z-index: 1;
      font-size: 80px;
      }
`

const Avesso = styled.section`
  width: 900px;
  height: 500px;
  margin-bottom: 300px;
  border: 20px solid ${({ theme }) => theme.colors.black};
  position: relative;

  h1 {
    position: absolute;
    right: 30%;
    color: ${({ theme }) => theme.colors.white};
    top: -50px;
    right: -50px;

    z-index: 1;
    font-size: 100px;
  }
`
const Wedding = styled.section`
    width: 900px;
    height: 500px;
    margin-bottom: 200px;
    border: 20px solid ${({ theme }) => theme.colors.pink};
    position: relative;
    }
    h1 {
      position: absolute;
      color: ${({ theme }) => theme.colors.white};
      top:-12%;
      left: 40%;
      z-index: 1;
      font-size: 80px;
      }
`

const Amesa = styled.section`
    width: 900px;
    height: 500px;
    margin-bottom: 100px;
    border: 20px solid ${({ theme }) => theme.colors.blueNormal};
    position: relative;

    }
    h1 {
      position: absolute; 
      left: 40%;   
      color: ${({ theme }) => theme.colors.white};
      top:0px;
      z-index: 1;
      font-size: 80px;

      }
`

const Description = styled.p`
  position: absolute;
  top: 140px;
  left: -70px;
  width: 60%;
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  font-size: 18px;
    font-family: 'Jost';
  color: ${({ theme }) => theme.colors.black};
  span {
    letter-spacing: 2px;
    font-family: "MajorMono";
    display: block;
    padding: 10px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.dirtyPink};
    background-color: ${({ theme }) => theme.colors.dirtyPink};
  }
  &.avesso {
    left: 40%;
    top: 30%;
    width: 80%;
  }
  &.amesa {
    left: 20%;
    top: 60%;
  }
  &.wedding {
    left: -10%;
    top: 10%;
    width: 40%;
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
          <h1>Portfolio </h1>
          <Description className="portfolio">
            <p>
                First portfolio website, not ideal but made with 
            </p>
            <span> AdobeXD ~ Gatsby ~ styled-components ~ Graphql </span>
          </Description>

          <ImgWrapper className="portfolio--first">
            <Img fluid={data.portfolio.childImageSharp.fluid} />
          </ImgWrapper>
        </Portfolio>
        <Avesso>
          <h1>Avesso</h1>
          <ImgWrapper className="avesso--first">
            <Img fluid={data.avesso.childImageSharp.fluid} />
          </ImgWrapper>
          <Description className="avesso">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              atque aspernatur ducimus temporibus dolorem aliquid id, cumque
              eligendi quas fugit reiciendis ipsa. Provident repellat, earum
              placeat nam consequatur reiciendis maiores.
            </p>
            <a href="http://avesso.virose.pt">ckeck website </a>
            <span> AdobeXD ~ Gatsby ~ styled-components ~ Graphql </span>
          </Description>
        </Avesso>
        <Wedding>
          <h1>Wedding website</h1>
          <ImgWrapper className="wedding--first">
            <Img fluid={data.wedding.childImageSharp.fluid} />
          </ImgWrapper>
          <Description className="wedding">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate aut dicta assumenda iusto at, quisquam, quibusdam
              accusamus dignissimos vel commodi quasi sit, perferendis amet!
              Dolorum natus dignissimos a provident deserunt.
            </p>
            <a href="../../wedding-website.pdf"> CV </a>
            <span> AdobeXD ~ html ~ css ~ js </span>
          </Description>
        </Wedding>

        <Amesa>
          <h1>Amesa woocommerce</h1>
          <ImgWrapper className="amesa--first">
            <Img fluid={data.amesa.childImageSharp.fluid} />
          </ImgWrapper>
          <Description className="amesa">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate aut dicta assumenda iusto at, quisquam, quibusdam
              accusamus dignissimos vel commodi quasi sit, perferendis amet!
              Dolorum natus dignissimos a provident deserunt.
            </p>
            <a href="../../wedding-website.pdf"> CV </a>
            <span> AdobeXD ~ html ~ css ~ js ~ wordpress ~ woocommerce </span>
          </Description>
        </Amesa>

        <div></div>
      </ProjectsMain>
    </section>
  )
}

export default ProjectsContainer
