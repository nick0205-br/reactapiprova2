import axios from "axios";
import { useState } from "react";
import './index.css';


export default function Index() {
    const [Arr, setArr] = useState([]);
    const [Resultado, setResultado] = useState([]);

    async function calcular(){
        const resp = await axios.post(`http://localhost:5000/`, {
            
        })
        
        setResultado(resp.data.resultado);

    }

    return (
        <main>
            <h1>
                Sequência Par
            </h1>
            <div>
                Sequência: <input type='text' value={Arr} onChange={e => setArr(e.target.value)} />
            </div>
            <div>
                <button onClick={calcular}> Calcular </button>
            </div>
            <div>
                A Sequência Par é: {Resultado}
            </div>
        </main>
    )
}