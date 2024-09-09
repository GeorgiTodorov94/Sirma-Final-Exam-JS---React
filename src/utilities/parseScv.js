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
    const [data, setData] = useState(() => {

        const storedData = localStorage.getItem(filename)
        return storedData ? JSON.parse(storedData) : [];
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/csv/${filename}`);
            const text = await response.text();
            const parsedData = parseCSV(text);
            setData(parsedData);

            localStorage.setItem(filename, JSON.stringify(parsedData));
            setLoading(false);
        }

        if (!localStorage.getItem(filename)) {
            fetchData();
        } else {
            setLoading(false);
        }

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