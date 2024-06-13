    // Sample Data
    const catchingStats = [
        { Player: 'Janna', 'Total Catches': 7, 'Boundary Catches': 4, 'Infield Catches': 3, 'Dropped Catches': 2, 'Missed Catches': 1 },
        { Player: 'Oscar', 'Total Catches': 2, 'Boundary Catches': 1, 'Infield Catches': 1, 'Dropped Catches': 1, 'Missed Catches': 0 },
        { Player: 'Weera', 'Total Catches': 3, 'Boundary Catches': 3, 'Infield Catches': 0, 'Dropped Catches': 1, 'Missed Catches': 0 },
        { Player: 'Tikka', 'Total Catches': 4, 'Boundary Catches': 2, 'Infield Catches': 2, 'Dropped Catches': 1, 'Missed Catches': 1 },
        { Player: 'Amila', 'Total Catches': 1, 'Boundary Catches': 1, 'Infield Catches': 0, 'Dropped Catches': 1, 'Missed Catches': 0 },
        { Player: 'Ranul', 'Total Catches': 5, 'Boundary Catches': 5, 'Infield Catches': 0, 'Dropped Catches': 3, 'Missed Catches': 1 },
        { Player: 'Vidura', 'Total Catches': 0, 'Boundary Catches': 0, 'Infield Catches': 0, 'Dropped Catches': 0, 'Missed Catches': 2 },
        { Player: 'Navin', 'Total Catches': 2, 'Boundary Catches': 0, 'Infield Catches': 2, 'Dropped Catches': 3, 'Missed Catches': 2 },
        { Player: 'Ishan', 'Total Catches': 0, 'Boundary Catches': 0, 'Infield Catches': 0, 'Dropped Catches': 0, 'Missed Catches': 0 },
        { Player: 'Pamodh', 'Total Catches': 1, 'Boundary Catches': 0, 'Infield Catches': 1, 'Dropped Catches': 2, 'Missed Catches': 0 },
        { Player: 'Fonny', 'Total Catches': 1, 'Boundary Catches': 0, 'Infield Catches': 1, 'Dropped Catches': 1, 'Missed Catches': 0 },
        { Player: 'Hasintha', 'Total Catches': 1, 'Boundary Catches': 3, 'Infield Catches': 1, 'Dropped Catches': 0, 'Missed Catches': 0 }
    ];

    const runoutFieldingStats = [
        { Player: 'Janna', 'Run Outs Assisted': 3, 'Direct Hits': 0, 'Direct Hit Run Outs': 0, 'Missed Run Outs': 2, 'Runs Conceded': 11, 'Runs Stopped': 2, 'Net Runs Saved': -9 },
        { Player: 'Oscar', 'Run Outs Assisted': 2, 'Direct Hits': 0, 'Direct Hit Run Outs': 1, 'Missed Run Outs': 0, 'Runs Conceded': 6, 'Runs Stopped': 0, 'Net Runs Saved': -6 },
        { Player: 'Weera', 'Run Outs Assisted': 0, 'Direct Hits': 0, 'Direct Hit Run Outs': 1, 'Missed Run Outs': 1, 'Runs Conceded': 6, 'Runs Stopped': 5, 'Net Runs Saved': -1 },
        { Player: 'Tikka', 'Run Outs Assisted': 0, 'Direct Hits': 2, 'Direct Hit Run Outs': 1, 'Missed Run Outs': 1, 'Runs Conceded': 4, 'Runs Stopped': 6, 'Net Runs Saved': 2 },
        { Player: 'Amila', 'Run Outs Assisted': 0, 'Direct Hits': 0, 'Direct Hit Run Outs': 0, 'Missed Run Outs': 0, 'Runs Conceded': 2, 'Runs Stopped': 0, 'Net Runs Saved': -2 },
        { Player: 'Ranul', 'Run Outs Assisted': 1, 'Direct Hits': 1, 'Direct Hit Run Outs': 0, 'Missed Run Outs': 2, 'Runs Conceded': 1, 'Runs Stopped': 1, 'Net Runs Saved': 0 },
        { Player: 'Vidura', 'Run Outs Assisted': 1, 'Direct Hits': 0, 'Direct Hit Run Outs': 0, 'Missed Run Outs': 0, 'Runs Conceded': 1, 'Runs Stopped': 0, 'Net Runs Saved': -1 },
        { Player: 'Navin', 'Run Outs Assisted': 0, 'Direct Hits': 4, 'Direct Hit Run Outs': 1, 'Missed Run Outs': 1, 'Runs Conceded': 1, 'Runs Stopped': 6, 'Net Runs Saved': 5 },
        { Player: 'Ishan', 'Run Outs Assisted': 0, 'Direct Hits': 0, 'Direct Hit Run Outs': 0, 'Missed Run Outs': 0, 'Runs Conceded': 2, 'Runs Stopped': 1, 'Net Runs Saved': -1 },
        { Player: 'Pamodh', 'Run Outs Assisted': 1, 'Direct Hits': 0, 'Direct Hit Run Outs': 0, 'Missed Run Outs': 0, 'Runs Conceded': 1, 'Runs Stopped': 3, 'Net Runs Saved': 2 },
        { Player: 'Fonny', 'Run Outs Assisted': 1, 'Direct Hits': 0, 'Direct Hit Run Outs': 0, 'Missed Run Outs': 0, 'Runs Conceded': 3, 'Runs Stopped': 1, 'Net Runs Saved': -2 },
        { Player: 'Hasintha', 'Run Outs Assisted': 0, 'Direct Hits': 0, 'Direct Hit Run Outs': 1, 'Missed Run Outs': 0, 'Runs Conceded': 3, 'Runs Stopped': 1, 'Net Runs Saved': -2 }
    ];

    const rankingFieldingMetrics = [
        { Player: 'Janna', 'Fielding Score': 3.57, 'Catching Skill': 7.56, 'Run Out Skill': 0.33, 'Runs Saved/Game': -1 },
        { Player: 'Oscar', 'Fielding Score': 1.38, 'Catching Skill': 1.7, 'Run Out Skill': 1.2, 'Runs Saved/Game': -0.6 },
        { Player: 'Weera', 'Fielding Score': 1.53, 'Catching Skill': 2.7, 'Run Out Skill': 0.3, 'Runs Saved/Game': -0.1 },
        { Player: 'Tikka', 'Fielding Score': 2.5, 'Catching Skill': 3.5, 'Run Out Skill': 0.9, 'Runs Saved/Game': 0.2 },
        { Player: 'Ranul', 'Fielding Score': 2.4, 'Catching Skill': 3.9, 'Run Out Skill': 0.6, 'Runs Saved/Game': 0 },
        { Player: 'Amila', 'Fielding Score': 0.36, 'Catching Skill': 1, 'Run Out Skill': 0, 'Runs Saved/Game': -0.29 },
        { Player: 'Vidura', 'Fielding Score': -0.07, 'Catching Skill': -0.57, 'Run Out Skill': 0.43, 'Runs Saved/Game': -0.14 },
        { Player: 'Navin', 'Fielding Score': 1.63, 'Catching Skill': 0.7, 'Run Out Skill': 1.5, 'Runs Saved/Game': 0.5 },
        { Player: 'Ishan', 'Fielding Score': -0.17, 'Catching Skill': 0, 'Run Out Skill': 0, 'Runs Saved/Game': -0.33 },
        { Player: 'Pamodh', 'Fielding Score': 0.64, 'Catching Skill': 0.5, 'Run Out Skill': 0.375, 'Runs Saved/Game': 0.25 },
        { Player: 'Fonny', 'Fielding Score': 1.73, 'Catching Skill': 1.4, 'Run Out Skill': 1.8, 'Runs Saved/Game': -0.4 },
        { Player: 'Hasintha', 'Fielding Score': 2.72, 'Catching Skill': 3.3, 'Run Out Skill': 2, 'Runs Saved/Game': -0.67 }
    ];

document.addEventListener('DOMContentLoaded', function() {
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
            header.style.cursor = 'pointer';
            header.addEventListener('click', () => {
                const isNumeric = !isNaN(header.textContent);
                sortTable(tableId, index, isNumeric);
            });
        });
    }

    // Populate the tables with data
    populateTable('catching-stats-table', catchingStats);
    populateTable('runout-fielding-stats-table', runoutFieldingStats);
    populateTable('ranking-metrics-table', rankingFieldingMetrics);

    // Make headers sortable
    makeHeadersSortable('catching-stats-table');
    makeHeadersSortable('runout-fielding-stats-table');
    makeHeadersSortable('ranking-metrics-table');
});
