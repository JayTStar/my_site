import "./index.css";
import json from "../../projects.json";

import Projects from "./Project";

export default function ProjectsScreen(){

    const projects = json.projects;

    function renderProjects(){
        return(
            projects.map((e) => {return <Projects title={e.title} image={e.image} description={e.description} languages={e.languages} technologies={e.technologies}/>})
        )
    }

    const render = renderProjects();

    return(
        <main className="projects">
            {render}
        </main>
    )
}