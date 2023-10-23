import Header from "../../Components/Header";

import "./index.css"

export default function ProjectsScreen(){
    return(
        <>
            <main className="projects">
                <div className="project">
                    <div className="img"></div>
                    <div className="info">
                        <p className="title">Pong</p>
                        <p className="about">
                            Jogo pong feito para treinar logica de programação
                        </p>
                    </div>
                </div>
            </main>
        </>
    )
}