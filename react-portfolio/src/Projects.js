import React from "react";
import PROJECTS from './data/projects';
import Project from "./Project";

function Projects() {
    return (
        <div>
            <h2>Highlighted Projects</h2>
            <div>
                {
                    PROJECTS.map(PROJECT => {
                        return (
                            <div key={PROJECT.id} project={PROJECT}>
                                {PROJECT.title}</div>
                        );
                    })
                }
            </div>
        </div>

    );
}

export default Projects;
