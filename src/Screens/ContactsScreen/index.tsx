import "./index.css";
import "./mobile.css";
import { BsInstagram, BsGithub, BsLinkedin, BsWhatsapp, BsFillEnvelopeFill} from "react-icons/bs";

import linkedin from "../../Media/linkedin_profile.jpeg";
import instagram from "../../Media/instagram_profile.jpeg";


export default function ContactsScreen(){
    return(
        <>
            <main>
                <h2>
                    Aqui estão minhas redes sociais! Sinta-se a vontade para entrar em contato comigo.
                </h2>
                <ul className="socials_list">
                    <a href="https://www.linkedin.com/in/jorge-tadeu-soares-batalha/" target="_blank" className="social linkedin">
                        <div className="flip-icon-inner">
                            <BsLinkedin className={"linkedin_icon side1"} size={"50px"}/>
                            <img className="side2" src={linkedin} /> 
                        </div>
                        
                        <div className="social_info">
                            <p>Jorge Tadeu Soares Batalha <span>(ele,dele)</span></p>
                            <p>Desenvolvedor WEB Full-stack</p>
                            <p>+ de 500 conexões</p>
                        </div>
                    </a>
                    
                    <a href="https://www.instagram.com/jaytstar" target="_blank" className="social instagram">
                        <div className="flip-icon-inner">
                            <BsInstagram className={"instagram_icon side1"} size={"50px"}/>
                            <img className="side2" src={instagram} alt="Jay's profile picture" />
                        </div>
                        
                        <div className="social_info">
                            <p>@jaytstar</p>
                        </div>
                    </a>

                    <a href="https://github.com/JayTStar" target="_blank" className="social github">
                        <div className="flip-icon-inner">
                            <BsGithub className={"github_icon"} size={"50px"}/>
                            <img className="side2" src="https://avatars.githubusercontent.com/u/91640043?v=4" alt="Jay's profile picture" />
                        </div>
                        
                        <div className="social_info">
                            <p>JayTStar</p>
                        </div>
                    </a>

                    <a href="https://wa.me/21982532159" target="_blank" className="social whatsapp">
                        <div className="flip-icon-inner">
                            <BsWhatsapp className={"whatsapp_icon"} size={"50px"}/>
                            <img className="side2" src="https://pps.whatsapp.net/v/t61.24694-24/141460985_328141679403131_3775683904573580212_n.jpg?ccb=11-4&oh=01_AdRdaJjAdJA0L8QpWvtH75LddH3ngNyymWhjEEv7j3TsTQ&oe=64BE41C2" alt="Jay's profile picture" />
                        </div>
                        
                        <div className="social_info">
                            <p>Número: +55 (21)98253-2159</p>
                        </div>
                    </a>

                    <a href="mailto:jsbatalha.dev@gmail.com" target="_blank" className="social email">
                        <BsFillEnvelopeFill className={"email_icon"} size={"50px"}/>

                        <div className="social_info">
                            <p>E-mail: jsbatalha.dev@gmail.com</p>
                        </div>
                    </a>
                </ul>
            </main>
        </>
    )
}