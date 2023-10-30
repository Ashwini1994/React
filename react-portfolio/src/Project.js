import React from "react";
import Projects from "./Projects";
import PROJECTS from './data/projects';

function Project({ project }) {

    console.log(project);
    return (
        <div>
            {project}
        </div>
    );
}

export default Project;
