import { useState } from "react"
import "./index.css"

export default function ProjectsScreen(){
    const [projectState, setProjectState] = useState ('closed')

    function handleClick(){
        if(projectState === 'closed'){
            setProjectState('open')
        }
        else{
            setProjectState('closed')
        }
    }

    return(
        <main className="projects">
            <div className={`project ${projectState}`}>
                <div className="img"></div>
                <p className="title">Pong</p>
                <button onClick={() => handleClick()}>{(projectState === "closed")? "Ver mais": "Ver menos"}</button>
            </div>
        </main>
    )
}