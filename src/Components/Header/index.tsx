import "./index.css";

export default function Header(){
    return(
        <header>
            <div className="top">
                <p>Title</p>
            </div>
            <div className="bottom">
                <ul>
                    <p>Home</p>
                    <p>Sobre</p>
                    <p>Projetos</p>
                    <p>Contatos</p>
                </ul>
            </div>
        </header>
    )
}