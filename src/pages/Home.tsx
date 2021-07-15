import IllustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

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
                <div>

                    <button>
                        <img src={googleIconImg} alt="logo" />
                    </button>
                    <img src={logoImg} alt="Letmeask" />
                    Crie sua sala com o Google
                </div>
                <div> ou enre em uma sala</div>
                <form>
                    <input
                        type="text"
                        placeholder="Digite o codigo da sala" />
                    <button type="submit">
                        Entrar na sala
                    </button>
                </form>


            </main>
        </div>
    )
}