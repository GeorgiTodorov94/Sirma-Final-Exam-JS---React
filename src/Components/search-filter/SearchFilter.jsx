import '../../styling/searchFilter.css'

import { useEffect, useState } from "react";
import { useData } from "../../utilities/dataContext";
import { useNavigate, useParams } from "react-router";

export default function SearchFilter({ allMatches, allTeams, onFilter }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [stageFilter, setStageFilter] = useState('');
    const { teams, matches } = useData();
    const navigate = useNavigate();


    const handleSearch = () => {
        const filteredMatches = allMatches.filter((match) => {
            const teamA = allTeams.find((team) => team.ID === match.ATeamID);
            const teamB = allTeams.find((team) => team.ID === match.BTeamID);

            // need to create a useForm Hook and create a better Form for searching

            const matchesSearchTerm =
                teamA?.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                teamB?.Name.toLowerCase().includes(searchTerm.toLowerCase());

            // This is basic Idea of a search filter
            //  need to figure this out... probbly going to export an object with the groups and their respective teams
            // and render them upon click or navigate to the group dynamically with same as in Finals.jsx

            const matchesStage = stageFilter === '' || stageFilter.toLowerCase();
            // Continue with this in an hour.

            // navigate(`/match-details/${match.ID}`);
            return matchesSearchTerm & matchesStage;
        });
        onFilter(filteredMatches);
    }
    useEffect(() => {
        console.log(searchTerm);
        // console.log(stageFilter);
    }, [searchTerm]);
    console.log(displayedMatches)



    return (
        <div className="search-filter-container">
            <input
                type="text"
                placeholder="Enter Your Desires Here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
                value={stageFilter}
                onChange={(e) => setStageFilter(e.target.value)}
            >
                <option value="">All Stages</option>
                <option value="Group">Group Stage</option>
                <option value="Quarterfinals">Quarterfinals</option>
                <option value="Semifinals">Semifinals</option>
                <option value="Final">Final</option>
            </select>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};