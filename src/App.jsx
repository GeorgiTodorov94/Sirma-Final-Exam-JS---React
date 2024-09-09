
import Homepage from './Components/homepage/Homepage'
import { Routes, Route } from 'react-router'
import "./App.css"
import Matches from './Components/matches/Matches'
import MatchDetails from './Components/details/MatchDetails'
import TeamDetails from './Components/details/TeamDetails'
import FetchAndProvideData from './utilities/dataContext'

function App() {

    return (
        <FetchAndProvideData>
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/matches' element={<Matches />}></Route>
                <Route path='/team-details/:teamID' element={<TeamDetails />}></Route>
                <Route path='/match-details/:matchID' element={<MatchDetails />}></Route>
            </Routes >
        </FetchAndProvideData>

    )
}

export default App
