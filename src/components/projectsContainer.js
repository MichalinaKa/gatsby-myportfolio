import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

const StyledImg = styled.div`
    width: 300px;
    height: 250px;
    img {
        width: 100%;
        object-fit: cover;
        height: auto;
}
`


const ProjectsContainer = ({ title, path, description, author, featuredImage }) => (
    <section>
        <Link to={path}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{author}</p>
            <StyledImg>
                <img src={featuredImage} alt="gatsby - tutaj powinno być zdjęcie" />

            </StyledImg>

            <p>See more</p>

        </Link>

    </section>

)

export default ProjectsContainer;