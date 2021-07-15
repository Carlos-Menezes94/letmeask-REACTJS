import IllustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../componentes/Button'

import '../styles/auth.scss';


export function Home() {

    return (
        <div id="page-auth">
            <aside>
                <img src={IllustrationImg} alt="Illustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire suas dúvidas da sua sua audiência em tempo-real</p>
            </aside>


            <main>
                <div className="main-content">
                        <img src={logoImg} alt="Letmeask" />
                    <button className="create-room">
                    <img src={googleIconImg} alt="logo do Google"/>
                    Crie sua sala com o Google
                </button>                
                
                <div className="separator"> ou entre em uma sala</div>
                <form>
                    <input
                        type="text"
                        placeholder="Digite o codigo da sala" />
                    <Button type="submit">
                        Entrar na sala
                    </Button>
                </form>
            
            </div>
            </main>
        </div>
    )
}