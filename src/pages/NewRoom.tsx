import IllustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../componentes/Button'

import '../styles/auth.scss';


export function NewRoom() {

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
                    <h2>Criar uma nova sala</h2>
                    <form>
                    <input
                        type="text"
                        placeholder="Nome da sala" />
                    <Button type="submit">
                        Criar salas
                    </Button>

                    <p>Quer entrar em uma sala existente? <a href="/#">clique aqui</a>
                    </p>
                </form>
            </div>
        </main>
    </div>
    )
}