import { Link } from "react-router-dom";



export default function Index() {
    return (
        <main>
            <h1>
                Home
            </h1>

            <ul>
                <li> <Link to='/corprimaria'> Cor Primária </Link> </li>
                <li> <Link to='/frequencia'> Frequência </Link> </li>
                <li> <Link to='/ingresso'> Ingresso </Link> </li>
                <li> <Link to='/maiornumero'> Maior Número </Link> </li>
                
            </ul>
            
        </main>
    )
}