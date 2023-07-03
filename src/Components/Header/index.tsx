import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Header(){
    const nav = useNavigate();

    return(
        <header>
            <div className="top">
                <p>Title</p>
            </div>
            <div className="bottom">
                <ul>
                    <p onClick={() => nav('/')}>Home</p>
                    <p onClick={() => nav('/about')}>Sobre</p>
                    <p onClick={() => nav('/projects')}>Projetos</p>
                    <p onClick={() => nav("/contacts")}>Contatos</p>
                </ul>
            </div>
        </header>
    )
}