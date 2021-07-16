import { Link } from 'react-router-dom'
import { useContext } from 'react'


import logoImg from '../assets/images/logo.svg'
import IllustrationImg from '../assets/images/illustration.svg'
import { Button } from '../componentes/Button'

import '../styles/auth.scss';
import { AuthContext } from '../App'


export function NewRoom() {
    const { user } = useContext(AuthContext);

           
    return (
        <div id="page-auth">
            <aside>
                <img src={IllustrationImg} alt="Illustração simbolizando perguntas e respostas" />
                <h1>{user?.name}</h1>
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire suas dúvidas da sua sua audiência em tempo-real</p>
            </aside>


            <main>

                <div className="main-content">
                        <img src={logoImg} alt="Letmeask" />
                        <h1>{user?.name}</h1>
                        
                        <h2>Criar uma nova sala</h2>
                <form>
                    <input
                        type="text"
                        placeholder="Nome da sala" />
                    <Button type="submit">
                        Criar sala
                    </Button>
                </form>
                <p>
                    Quer entrar em uma sala existente? <Link to="/">Clique aqui!</Link>
                </p>
            </div>
            </main>
        </div>
    )}
