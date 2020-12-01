import React from "react"
import { Link } from "gatsby"


const ProjectsContainer = ({ title, path, description, author }) => (

    <section>
        <Link to={path}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{author}</p>
            <p>See more</p>
        </Link>

</section>




)

export default ProjectsContainer;