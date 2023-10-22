import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Header(){
    const nav = useNavigate();

    return(
        <header>
            <ul>
                <p onClick={() => nav('/')}>Sobre</p>
                <p onClick={() => nav('/projects')}>Projetos</p>
                <p onClick={() => nav("/contacts")}>Contatos</p>
            </ul>
        </header>
    )
}