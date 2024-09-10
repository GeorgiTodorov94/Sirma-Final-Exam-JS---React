import { useEffect, useState } from "react";
import { useData } from "../../utilities/dataContext";

export default function SearchFilter() {
    const [searchTerm, setSearchTerm] = useState('');
    const [stageFilter, setStageFilter] = useState('');
    const { teams, matches } = useData();

    const handleSearch = () => {
        const filteredMatches = matches.data.filter((match) => {
            const teamA = teams.data.find((team) => team.ID === match.ATeamID);
            const teamB = teams.data.find((team) => team.ID === match.BTeamID);

            const matchesSearchTerm =
                teamA?.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                teamB?.Name.toLowerCase().includes(searchTerm.toLowerCase());

            // const matchesStage = stageFilter === '' || object[group].toLowerCase() || stageFilter.toLowerCase()
            //  need to figure this out... probbly going to export an object with the groups and their respective teams
            // and render them upon click or navigate to the group dynamically with same as in Finals.jsx

            return matchesSearchTerm;
        });
    }
    useEffect(() => {
        console.log(searchTerm)
    }, [searchTerm])


    return (
        <div className="search-filter-container">
            <input
                type="text"
                placeholder="Search by team name or group..."
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