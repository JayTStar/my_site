import "./index.css";
import { useNavigate } from "react-router-dom";
import logo from "../../Logo.jpg"

export default function Header(){
    const nav = useNavigate();

    return(
        <header>
            <ul>
                <p onClick={() => nav('/')}>Home</p>
                <p onClick={() => nav('/about')}>Sobre</p>
                <p onClick={() => nav('/projects')}>Projetos</p>
                <p onClick={() => nav("/contacts")}>Contatos</p>
            </ul>
        </header>
    )
}