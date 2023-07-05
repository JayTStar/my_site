import "./index.css";
import Header from "../../Components/Header";
import { BsInstagram, BsGithub, BsLinkedin, BsWhatsapp, BsFillEnvelopeFill} from "react-icons/bs";

export default function ContactsScreen(){
    return(
        <>
            <Header/>
            <main>
                <h2>
                    Aqui estão minhas redes sociais! Sinta-se a vontade para entrar em contato comigo.
                </h2>
                <ul>
                    <a href="https://www.linkedin.com/in/jorge-tadeu-soares-batalha/" target="_blank" className="social linkedin">
                        <div className="flip-icon-inner">
                            <BsLinkedin className={"linkedin_icon side1"} size={"50px"}/>
                            <img className="side2" src="https://media.licdn.com/dms/image/C4D03AQFnEPtge5FKVw/profile-displayphoto-shrink_800_800/0/1660085753030?e=1694044800&v=beta&t=knpD_-kiiBvtQiydVMIc-QjGb1mp-nNtiRsWEkKuzjc" alt="Jorge's profile picture" /> 
                        </div>
                        
                        {/* <div>
                            <p>Jorge Tadeu Soares Batalha <span>(ele,dele)</span></p>
                            <p>Desenvolvedor WEB Full-stack</p>
                            <p>+ de 500 conexões</p>
                        </div>  */}
                    </a>
                    
                    <a href="https://www.instagram.com/jaytstar" target="_blank" className="social instagram">
                        <div className="flip-icon-inner">
                            <BsInstagram className={"instagram_icon side1"} size={"50px"}/>
                            <img className="side2" src="https://instagram.fsdu17-1.fna.fbcdn.net/v/t51.2885-19/354818835_1001604137678781_7333640112683736932_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsdu17-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=HBqECfpJFDUAX83huyH&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCOV_fBb4br57qVroE_vCuPYU8qBIiYnfYWy9P9OKdu0w&oe=64A8D06F&_nc_sid=ee9879" alt="Jay's profile picture" />
                        </div>
                        
                        {/* <div className="social_info">
                            
                            <p>@jaytstar</p>
                        </div> */}
                    </a>

                    <a href="https://github.com/JayTStar" target="_blank" className="social github">
                        <div className="flip-icon-inner">
                            <BsGithub className={"github_icon"} size={"50px"}/>
                            <img className="side2" src="https://avatars.githubusercontent.com/u/91640043?v=4" alt="Jay's profile picture" />
                        </div>
                        
                        {/* <div className="social_info">
                            <p>JayTStar</p>
                        </div> */}
                    </a>

                    {/* <a href="" target="_blank" className="social whatsapp">
                        <BsWhatsapp className={"whatsapp_icon"} size={"50px"}/>
                    </a>

                    <a href="" target="_blank" className="social email">
                        <BsFillEnvelopeFill className={"email_icon"} size={"50px"}/>
                    </a> */}
                </ul>
            </main>
        </>
    )
}