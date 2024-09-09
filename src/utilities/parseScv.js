import { useEffect, useState } from "react";

export const parseCSV = (text) => {
    const rows = text.trim().split('\n');
    const headers = rows[0].split(',');
    return rows.slice(1).map(row => {
        const values = row.split(',');
        return headers.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
        }, {});
    })
}

export const useCSVData = (filename) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`/csv/${filename}`)
            .then(response => response.text())
            .then(text => setData(parseCSV(text)))
    }, [filename]);

    return data;
}