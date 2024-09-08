
import Homepage from './Components/homepage/Homepage'
import { Routes, Route } from 'react-router'
import "./App.css"

function App() {

    return (
        <Routes>
            <Route path='/' element={<Homepage />}></Route>
        </Routes >
    )
}

export default App
