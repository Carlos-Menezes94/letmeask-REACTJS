import { Link } from 'react-router-dom'
import logoImg from '../assets/images/logo.svg'
import IllustrationImg from '../assets/images/illustration.svg'
import { Button } from '../componentes/Button'
import '../styles/auth.scss';
import { useAuth } from '../hooks/useAuth'
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';
import { idText } from 'typescript';

export function NewRoom() {
  const { user } = useAuth()
    
    const [newRoom, setNewRoom] = useState('')

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() ==='') {
            return;
        }
    
        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })
    }
           
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
                <form onSubmit={handleCreateRoom}>
                    <input
                        type="text"
                        placeholder="Nome da sala" 
                        onChange={event => setNewRoom(event.target.value)}
                        value={newRoom}
                        />
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
