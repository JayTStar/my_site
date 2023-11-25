import { useState } from "react";

export default function Projects(props: Readonly<{title: string; image: string; description: string; languages: string; technologies: string;}>){
    const [projectState, setProjectState] = useState ('closed');

    function handleClick(){
        if(projectState === 'closed'){
            setProjectState('open');
        }
        else{
            setProjectState('closed');
        }
    }
    return(
        <div className={`project ${projectState}`}>
                <div className="img">{props.image}</div>
                <p className="title">{props.title}</p>
                <p className="button" onClick={() => handleClick()}>{(projectState === "closed")? "Ver mais": "Ver menos"}</p>
        </div>
    )
}