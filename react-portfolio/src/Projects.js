import React, { Component } from "react";
import PROJECTS from "./data/projects";
import Project from "./Project";

class Projects extends Component {
  rennder() {
    return (
      <div>
        <h2>Highlighted Projects</h2>
        <div>
          {PROJECTS.map((PROJECT) => (
            <Project key={PROJECT.id} project={PROJECT} />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
