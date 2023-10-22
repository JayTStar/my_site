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
                <div className="topics">
                    <ul onClick={() => handleClick(Topic1)}>Pessoal</ul>
                    <ul onClick={() => handleClick(Topic2)}>Acadêmico</ul>
                    <ul onClick={() => handleClick(Topic3)}>Profissional</ul>
                </div>

                <div ref={Topic1} className="topico topico1">
                    <h3>Minhda vida pessoal!</h3>
                    <p>Olá! Tudo bem?</p>
                    <p>Meu nome é Jorge Tadeu, nasci dia 27/02/2000 na cidade do Rio de Janeiro. Desde pequeno sempre fui uma pessoa muito curiosa e criativa e gostava muito de resolver problemas. Quando eu estava crescendo eu adora brincar com coisa que estimulavam minha imaginação.</p>
                    <p>Em 2003 eu entrei para o jardim de infância, no Instituto Nícia Macieira, nessa época eu morava no Méier, onde fiquei até 2010, e sempre tive uma rotina muito agitada. Sempre fui muito ativo, comecei a fazer natação desde pequeno e depois entrei no judô. Pouco depois de entrar no judô saí da natação e fui para o futsal, por causa disso sempre me mantive em movimento e com uma rotina bem cheia.</p>
                    <p>No período que fiquei no Nicia uma coisa sempre chamou a atenção nos meus professores, eu era uma criança que sempre aparentava estar distraído e sem foco, mas sempre conseguia me dar bem e entendia as matérias com certa facilidade.  Graças a isso eu ganhai alguns certificados por ter boa performance e cheguei a ser orador da minha tuma uma vez.</p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div ref={Topic2} className="topico topico2">Topico 2</div>
                <div ref={Topic3} className="topico topico3">Topico 3</div>
            </main>
        </>
    )
}