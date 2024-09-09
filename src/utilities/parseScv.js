import { useEffect, useState } from "react";

const parseCSV = (text) => {
    const rows = text.trim().split('\n');
    const headers = rows[0].trim().split(',');

    return rows.slice(1).map(row => {
        // console.log(row.trim())
        const values = row.trim().split(',');

        return headers.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
        }, {});
    });
};

export const useCSVData = (filename) => {
    const [data, setData] = useState([]);

    useEffect(() => {

        fetch(`/csv/${filename}`)
            .then(response => response.text())
            .then(text => setData(parseCSV(text)))
    }, [filename]);

    return data;
}

// export const matches = useCSVData('matches.csv');
// export const teams = useCSVData('teams.csv');
// export const players = useCSVData('teams.csv');
// export const records = useCSVData('teams.csv');

// export const scvDataObject = {
//     matches,
//     teams,
//     players,
//     records,
// }