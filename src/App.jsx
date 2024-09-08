
import Homepage from './Components/homepage/Homepage'
import { Routes, Route } from 'react-router'
import "./App.css"
import Matches from './Components/matches/Matches'

function App() {

    return (
        <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/matches' element={<Matches />}></Route>
        </Routes >
    )
}

export default App
