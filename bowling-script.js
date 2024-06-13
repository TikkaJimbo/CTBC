document.addEventListener('DOMContentLoaded', function() {
    // Sample Data
    const basicBowlingStats = [
        { Player: 'Janna', 'Balls Bowled': 60, Runs: 58, Wickets: 4, ER: 5.8, SR: 15, Avg: 14.5 },
        { Player: 'Oscar', 'Balls Bowled': 56, Runs: 47, Wickets: 6, ER: 5.04, SR: 9.33, Avg: 7.83 },
        { Player: 'Weera', 'Balls Bowled': 56, Runs: 68, Wickets: 5, ER: 7.28, SR: 11.2, Avg: 13.6 },
        { Player: 'Tikka', 'Balls Bowled': 59, Runs: 74, Wickets: 4, ER: 7.53, SR: 14.75, Avg: 18.5 },
        { Player: 'Ranul', 'Balls Bowled': 45, Runs: 39, Wickets: 2, ER: 5.2, SR: 22.5, Avg: 19.5 },
        { Player: 'Vidura', 'Balls Bowled': 29, Runs: 29, Wickets: 3, ER: 6, SR: 9.67, Avg: 9.67 },
        { Player: 'Navin', 'Balls Bowled': 50, Runs: 75, Wickets: 4, ER: 9, SR: 10, Avg: 15 },
        { Player: 'Ishan', 'Balls Bowled': 13, Runs: 14, Wickets: 1, ER: 6.46, SR: 13, Avg: 14 },
        { Player: 'Pamodh', 'Balls Bowled': 42, Runs: 61, Wickets: 2, ER: 8.71, SR: 21, Avg: 30.5 },
        { Player: 'Fonny', 'Balls Bowled': 19, Runs: 44, Wickets: 0, ER: 13.9, SR:19 , Avg: 44 },
        { Player: 'Hasintha', 'Balls Bowled': 20, Runs: 20, Wickets: 5, ER: 6, SR: 4, Avg: 4 },
        { Player: 'Amila', 'Balls Bowled': 50, Runs: 63, Wickets: 2, ER: 7.56, SR: 25, Avg: 31.5 }
    ];

    const advancedBowlingStats = [
        { Player: 'Janna', 'PP Econ': 0, 'Middle Overs Econ': 4.75, 'Death Econ': 13.71, 'Dot Ball %': 40, 'SR in Death': 7, 'SR in PP': 0, 'Chances per ball(%)': 0 },
        { Player: 'Oscar', 'PP Econ': 0, 'Middle Overs Econ': 3.47, 'Death Econ': 11.45, 'Dot Ball %': 53.6, 'SR in Death': 3.67, 'SR in PP': 0, 'Chances per ball(%)': 3.57 },
        { Player: 'Weera', 'PP Econ': 0, 'Middle Overs Econ': 7.28, 'Death Econ': 0, 'Dot Ball %': 38.9, 'SR in Death': 10, 'SR in PP': 0, 'Chances per ball(%)': 12.5 },
        { Player: 'Tikka', 'PP Econ': 0, 'Middle Overs Econ': 8.32, 'Death Econ': 3.6, 'Dot Ball %': 39.39, 'SR in Death': 10, 'SR in PP': 0, 'Chances per ball(%)': 11.86 },
        { Player: 'Ranul', 'PP Econ': 0, 'Middle Overs Econ': 4.5, 'Death Econ': 36, 'Dot Ball %': 51.1, 'SR in Death': 0, 'SR in PP': 0, 'Chances per ball(%)': 8.89 },
        { Player: 'Amila', 'PP Econ': 0, 'Middle Overs Econ': 7.54, 'Death Econ': 0, 'Dot Ball %': 40, 'SR in Death': 0, 'SR in PP': 0, 'Chances per ball(%)': 10 },
        { Player: 'Vidura', 'PP Econ': 0, 'Middle Overs Econ': 5.5, 'Death Econ': 8.4, 'Dot Ball %': 51.72, 'SR in Death': 2.5, 'SR in PP': 0, 'Chances per ball(%)': 6.89 },
        { Player: 'Navin', 'PP Econ': 0, 'Middle Overs Econ': 9.25, 'Death Econ': 8.4, 'Dot Ball %': 34, 'SR in Death': 0, 'SR in PP': 0, 'Chances per ball(%)': 8 },
        { Player: 'Ishan', 'PP Econ': 0, 'Middle Overs Econ': 6.46, 'Death Econ': 0, 'Dot Ball %': 69.23, 'SR in Death': 0, 'SR in PP': 0, 'Chances per ball(%)': 4.76 },
        { Player: 'Pamodh', 'PP Econ': 0, 'Middle Overs Econ': 7.09, 'Death Econ': 10.5, 'Dot Ball %': 33.3, 'SR in Death': 0, 'SR in PP': 0, 'Chances per ball(%)': 15.79 },
        { Player: 'Fonny', 'PP Econ': 0, 'Middle Overs Econ': 13.89, 'Death Econ': 0, 'Dot Ball %': 31.57, 'SR in Death': 0, 'SR in PP': 0, 'Chances per ball(%)': 0 },
        { Player: 'Hasintha', 'PP Econ': 0, 'Middle Overs Econ': 6, 'Death Econ': 10, 'Dot Ball %': 65, 'SR in Death': 0, 'SR in PP': 0, 'Chances per ball(%)': 10 }
    ];

    const rankingBowlingMetrics = [
    { Player: 'Janna', ALS: 1.61, EE: 1.15, TL: 0.933, PIR: 0, DIR: 0.906 },
    { Player: 'Oscar', ALS: 3.18, EE: 1.77, TL: 2.53, PIR: 0, DIR: 1.12 },
    { Player: 'Weera', ALS: 2.02, EE: 0.9, TL: 2.01, PIR: 0, DIR: 0 },
    { Player: 'Tikka', ALS: 1.98, EE: 0.86, TL: 1.21, PIR: 0, DIR: 3.08 },
    { Player: 'Ranul', ALS: 1.51, EE: 1.64, TL: 0.53, PIR: 0, DIR: 0 },
    { Player: 'Amila', ALS: 0.93, EE: 0.88, TL: 0.46, PIR: 0, DIR: 0 },
    { Player: 'Vidura', ALS: 2.71, EE: 1.44, TL: 2.46, PIR: 0, DIR: 0 },
    { Player: 'Navin', ALS: 2.07, EE: 0.63, TL: 2.34, PIR: 0, DIR: 0 },
    { Player: 'Ishan', ALS: 2.23, EE: 1.78, TL: 1.42, PIR: 0, DIR: 0 },
    { Player: 'Pamodh', ALS: 1.13, EE: 0.64, TL: 0.54, PIR: 0, DIR: 1.74 },
    { Player: 'Fonny', ALS: 0.26, EE: 0.38, TL: 0, PIR: 0, DIR: 0 },
    { Player: 'Hasintha', ALS: 11.05, EE: 1.80, TL: 13.87, PIR: 0, DIR: 0.8 }
];

    // Function to populate table with data
    function populateTable(tableId, data) {
        const tableBody = document.getElementById(tableId).querySelector('tbody');
        tableBody.innerHTML = ''; // Clear existing rows
        data.forEach(item => {
            const row = document.createElement('tr');
            Object.values(item).forEach(text => {
                const cell = document.createElement('td');
                cell.textContent = text;
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    }

    function sortTable(tableId, columnIndex, isNumeric) {
        const table = document.getElementById(tableId);
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));

        const sortedRows = rows.sort((a, b) => {
            if (columnIndex === 0) return 0; // Ignore sorting for the first column
            const aValue = isNumeric ? parseFloat(a.cells[columnIndex].textContent) : a.cells[columnIndex].textContent;
            const bValue = isNumeric ? parseFloat(b.cells[columnIndex].textContent) : b.cells[columnIndex].textContent;

            return bValue - aValue; // Sort in descending order
        });

        sortedRows.forEach(row => tbody.appendChild(row));
    }

    function makeHeadersSortable(tableId) {
        const table = document.getElementById(tableId);
        const headers = table.querySelectorAll('th');

        headers.forEach((header, index) => {
            const isNumeric = !isNaN(headers[1].textContent);
            header.style.cursor = 'pointer';
            header.addEventListener('click', () => sortTable(tableId, index, isNumeric));
        });
    }

    // Populate the tables with data
    populateTable('basic-bowling-stats-table', basicBowlingStats);
    populateTable('advanced-bowling-stats-table', advancedBowlingStats);
    populateTable('ranking-bowling-metrics-table', rankingBowlingMetrics);

    // Make headers sortable
    makeHeadersSortable('basic-bowling-stats-table');
    makeHeadersSortable('advanced-bowling-stats-table');
    makeHeadersSortable('ranking-bowling-metrics-table');
});
