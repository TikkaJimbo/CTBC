document.addEventListener('DOMContentLoaded', function() {
    // Sample Data
    const basicBowlingStats = [
        { Player: 'Janna', 'Balls Bowled': 30, Runs: 22, Wickets: 2, ER: 4.4, SR: 15, Avg: 11 },
        { Player: 'Oscar', 'Balls Bowled': 35, Runs: 21, Wickets: 3, ER: 3.6, SR: 11.67, Avg: 7 },
        { Player: 'Weera', 'Balls Bowled': 35, Runs: 33, Wickets: 4, ER: 5.65, SR: 8.75, Avg: 5.65 },
        { Player: 'Tikka', 'Balls Bowled': 33, Runs: 40, Wickets: 3, ER: 7.27, SR: 11, Avg: 13.3 },
        { Player: 'Ranul', 'Balls Bowled': 21, Runs: 17, Wickets: 1, ER: 4.85, SR: 21, Avg: 17 },
        { Player: 'Vidura', 'Balls Bowled': 12, Runs: 6, Wickets: 1, ER: 3, SR: 12, Avg: 6 },
        { Player: 'Navin', 'Balls Bowled': 35, Runs: 48, Wickets: 4, ER: 8.22, SR: 8.75, Avg: 12 },
        { Player: 'Ishan', 'Balls Bowled': 13, Runs: 14, Wickets: 1, ER: 6.46, SR: 13, Avg: 14 },
        { Player: 'Pamodh', 'Balls Bowled': 15, Runs: 23, Wickets: 0, ER: 9.2, SR: 0, Avg: 0 },
        { Player: 'Hasintha', 'Balls Bowled': 20, Runs: 20, Wickets: 5, ER: 6, SR: 4, Avg: 4 },
        { Player: 'Amila', 'Balls Bowled': 12, Runs: 10, Wickets: 2, ER: 5, SR: 6, Avg: 5 }
    ];

    const advancedBowlingStats = [
        { Player: 'Janna', 'PP Econ': 0, 'Middle Overs Econ': 4.4, 'Death Econ': 0, 'Dot Ball %': 46.7, 'SR in Death': 0, 'SR in PP': 0, 'Chances per ball(%)': 0 },
        { Player: 'Oscar', 'PP Econ': 0, 'Middle Overs Econ': 4, 'Death Econ': 1.2, 'Dot Ball %': 54.28, 'SR in Death': 2.5, 'SR in PP': 0, 'Chances per ball(%)': 2.8 },
        { Player: 'Weera', 'PP Econ': 0, 'Middle Overs Econ': 5.66, 'Death Econ': 0, 'Dot Ball %': 48.57, 'SR in Death': 0, 'SR in PP': 0, 'Chances per ball(%)': 8.57 },
        { Player: 'Tikka', 'PP Econ': 0, 'Middle Overs Econ': 8.86, 'Death Econ': 3.6, 'Dot Ball %': 39.39, 'SR in Death': 10, 'SR in PP': 0, 'Chances per ball(%)': 12.12 },
        { Player: 'Ranul', 'PP Econ': 0, 'Middle Overs Econ': 3.3, 'Death Econ': 36, 'Dot Ball %': 47.61, 'SR in Death': 0, 'SR in PP': 0, 'Chances per ball(%)': 14.28 },
        { Player: 'Amila', 'PP Econ': 0, 'Middle Overs Econ': 3, 'Death Econ': 0, 'Dot Ball %': 50, 'SR in Death': 0, 'SR in PP': 0, 'Chances per ball(%)': 16.67 },
        { Player: 'Vidura', 'PP Econ': 0, 'Middle Overs Econ': 4, 'Death Econ': 1.2, 'Dot Ball %': 54.28, 'SR in Death': 2.5, 'SR in PP': 0, 'Chances per ball(%)': 16.67 },
        { Player: 'Navin', 'PP Econ': 0, 'Middle Overs Econ': 8.1, 'Death Econ': 8.4, 'Dot Ball %': 28.57, 'SR in Death': 0, 'SR in PP': 0, 'Chances per ball(%)': 11.42 },
        { Player: 'Ishan', 'PP Econ': 0, 'Middle Overs Econ': 6.46, 'Death Econ': 0, 'Dot Ball %': 69.23, 'SR in Death': 0, 'SR in PP': 0, 'Chances per ball(%)': 7.69 },
        { Player: 'Pamodh', 'PP Econ': 0, 'Middle Overs Econ': 3.33, 'Death Econ': 0, 'Dot Ball %': 33.3, 'SR in Death': 0, 'SR in PP': 0, 'Chances per ball(%)': 0 },
        { Player: 'Hasintha', 'PP Econ': 0, 'Middle Overs Econ': 6, 'Death Econ': 10, 'Dot Ball %': 65, 'SR in Death': 0, 'SR in PP': 0, 'Chances per ball(%)': 10 }
    ];

    const rankingBowlingMetrics = [
    { Player: 'Janna', ALS: 1.08, EE: 1.78, TL: 0.933, PIR: 0, DIR: 0 },
    { Player: 'Oscar', ALS: 3.05, EE: 2.51, TL: 1.61, PIR: 0, DIR: 14 },
    { Player: 'Weera', ALS: 1.78, EE: 1.43, TL: 3.03, PIR: 0, DIR: 0 },
    { Player: 'Tikka', ALS: 1.40, EE: 0.90, TL: 2.06, PIR: 0, DIR: 2.22 },
    { Player: 'Ranul', ALS: 0.92, EE: 1.63, TL: 0.68, PIR: 0, DIR: 0 },
    { Player: 'Amila', ALS: 3.22, EE: 1.38, TL: 6.66, PIR: 0, DIR: 0 },
    { Player: 'Vidura', ALS: 1.86, EE: 2.77, TL: 1.87, PIR: 0, DIR: 0 },
    { Player: 'Navin', ALS: 1.48, EE: 0.57, TL: 3.13, PIR: 0, DIR: 0 },
    { Player: 'Ishan', ALS: 1.28, EE: 1.78, TL: 1.42, PIR: 0, DIR: 0 },
    { Player: 'Pamodh', ALS: 0.24, EE: 0.60, TL: 0, PIR: 0, DIR: 0 },
    { Player: 'Hasintha', ALS: 6.35, EE: 1.80, TL: 13.87, PIR: 0, DIR: 0.8 }
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
