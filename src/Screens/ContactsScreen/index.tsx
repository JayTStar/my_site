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
                        <BsLinkedin className={"linkedin_icon"} size={"50px"}/>
                        <div className="social_info">
                            <img src="https://media.licdn.com/dms/image/C4D03AQFnEPtge5FKVw/profile-displayphoto-shrink_800_800/0/1660085753030?e=1694044800&v=beta&t=knpD_-kiiBvtQiydVMIc-QjGb1mp-nNtiRsWEkKuzjc" alt="Jorge's profile picture" />
                            <p>Jorge Tadeu Soares Batalha</p>
                        </div>
                    </a>
                    
                    <a href="https://www.instagram.com/jaytstar" target="_blank" className="social instagram">
                        <BsInstagram className={"instagram_icon"} size={"50px"}/>
                        <div className="social_info">
                            <img src="https://instagram.fsdu17-1.fna.fbcdn.net/v/t51.2885-19/354818835_1001604137678781_7333640112683736932_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsdu17-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=GA34JuQdPGMAX_Y2HxX&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDsdsJP17KEuX7PvnZOqAqGhuTuDRKjrrgToEihd1xdqQ&oe=64A8D06F&_nc_sid=ee9879" alt="Jay's profile picture" />
                            <p>@jaytstar</p>
                        </div>
                    </a>

                    <a href="https://github.com/JayTStar" target="_blank" className="social github">
                        <BsGithub className={"github_icon"} size={"50px"}/>
                        <div className="social_info">
                            <img src="https://avatars.githubusercontent.com/u/91640043?v=4" alt="Jay's profile picture" />
                            <p>JayTStar</p>
                        </div>
                    </a>

                    <a href="" target="_blank" className="social whatsapp">
                        <BsWhatsapp className={"whatsapp_icon"} size={"50px"}/>
                    </a>

                    <a href="" target="_blank" className="social email">
                        <BsFillEnvelopeFill className={"email_icon"} size={"50px"}/>
                    </a>
                </ul>
            </main>
        </>
    )
}