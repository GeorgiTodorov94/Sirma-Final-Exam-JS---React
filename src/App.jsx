
import Homepage from './Components/homepage/Homepage'
import { Routes, Route } from 'react-router'
import "./global.css"
import Matches from './Components/matches/Matches'
import MatchDetails from './Components/details/MatchDetails'
import TeamDetails from './Components/details/TeamDetails'
import FetchAndProvideData from './utilities/dataContext'
import Header from './Components/header/Header'
import Footer from './Components/footer/Footer'
import Finals from './Components/finals/Finals'
function App() {
    return (

        <FetchAndProvideData>
            <Header />
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/matches' element={<Matches />}></Route>
                <Route path='/team-details/:teamID' element={<TeamDetails />}></Route>
                <Route path='/match-details/:matchID' element={<MatchDetails />}></Route>
                <Route path='/finals' element={<Finals />}></Route>
            </Routes >
            <Footer />
        </FetchAndProvideData>
    );
};

export default App
