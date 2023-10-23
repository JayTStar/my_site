import { MutableRefObject, useRef } from "react";
import "./index.css";

export default function AboutScreen(){

    const Topic1 = useRef(null);
    const Topic2 = useRef(null);
    const Topic3 = useRef(null);

    function handleClick(ref: any){
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }
    return(
        <>
            <main>
                <p>Em breve você poderá ver mais sobre mim</p>
            </main>
        </>
    )
}