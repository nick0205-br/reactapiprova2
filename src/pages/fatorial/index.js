import { useState } from "react";
import axios from "axios";
import './index.css';


export default function Index() {
    const [numero, setNumero] = useState(0);
    const [resposta, setResposta] = useState('')

    async function verificarFatorial(){
        const resp = await axios.post(`http://localhost:5000/fatorial`, numero)
        setResposta(resp.data.fatorial);
     }

    return (
        <main>
            <h1>
                Fatorial
            </h1>
            <div>
                Número: <input type='text' value={numero} onChange={e => setNumero(Number(e.target.value))} />
            </div>
            <div>
                <buton onClick={verificarFatorial}> Veriicar </buton>
            </div>
            <div>
                Maior Número é: {resposta}
            </div>
        </main>
    )
}