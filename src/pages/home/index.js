import { Link } from "react-router-dom";
import './index.css';


export default function Index() {
    return (
        <main>
            <h1>
                Home
            </h1>

            <ul>
                <li> <Link to='/semaforo'> Semáforo </Link> </li>
                <li> <Link to='/sequenciapar'> Sequencia Par </Link> </li>
                <li> <Link to='/fatorial'> Fatorial </Link> </li>
                <li> <Link to='/diasemana'> Dia da Semana </Link> </li>
                
            </ul>
            
        </main>
    )
}