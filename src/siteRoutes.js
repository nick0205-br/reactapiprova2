
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import Home from './pages/home'
import DiadaSemana from './pages/diasemana'
import Fatorial from './pages/fatorial'
import Semaforo from './pages/semaforo'
import SequenciaPar from './pages/sequenciapar'

export default function SiteRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/diasemana' element={ <DiadaSemana /> } />
                <Route path='/fatorial' element={ <Fatorial /> } />
                <Route path='/semaforo' element={ <Semaforo /> } />
                <Route path='/sequenciapar' element={ <SequenciaPar /> } />
            </Routes>
        </BrowserRouter>
    )
}