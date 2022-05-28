import { useState } from "react";

import axios from "axios";
import './index.css';

export default function Index() {
    const [numero, setNumero] = useState(0);
    const [ resposta, setResposta] = useState('');

    async function verificarDiaSemana(){
       const resp = await axios.get(`http://localhost:5000/diadasemana/`)
       setResposta(resp.data.diasemana);
    }

    return (
        <main>
            <h1>
                Dia da Semana
            </h1>
            <div>
                Digite um número entre 0 e 6: <input type='text' value={numero} onChange={e => setNumero(e.target.value)}/>
            </div>
            <div>
                <button onClick={verificarDiaSemana}> Veriicar Dia da Semana </button>
            </div>
            <div>
                Dia da Semana: {resposta}
            </div>
        </main>
    )
}