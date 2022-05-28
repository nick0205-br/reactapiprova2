import axios from "axios";
import { useState } from "react";
import './index.css';


export default function Index() {
    const [cor, setCor] = useState('');
    const [resposta, setResposta] = useState('');

    async function verificarSemaforo(){
        const resp = await axios.get(`http://localhost:5000/semaforo/:cor` + cor);
        setResposta(resp.data.semaforo);
    }
    return (
        <main>
            <h1>
                Semáforo
            </h1> 
            <div>
                Cor: <input type='text' value={cor} onChange={e => setCor(e.target.value)}/>
            </div>
            <div>
                <button onClick={verificarSemaforo}> Verificar </button>
            </div>
            <div>
                Pode Passar? {resposta}
            </div>
        </main>
    )
}