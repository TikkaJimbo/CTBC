document.addEventListener('DOMContentLoaded', function() {
    const basicStats = [
        { Player: 'Janna', Runs: 43, 'Balls Faced': 42, 'Not Outs': 2, Avg: 8.6, SR: 102.4, 'Dot Ball %': 40.5 },
        { Player: 'Oscar', Runs: 83, 'Balls Faced': 57, 'Not Outs': 4, Avg: 11.9, SR: 145.6, 'Dot Ball %': 47.4 },
        { Player: 'Weera', Runs: 79, 'Balls Faced': 67, 'Not Outs': 2, Avg: 9.9, SR: 118, 'Dot Ball %': 59.7 },
        { Player: 'Tikka', Runs: 66, 'Balls Faced': 49, 'Not Outs': 3, Avg: 11, SR: 134.7, 'Dot Ball %': 46.9 },
        { Player: 'Ranul', Runs: 143, 'Balls Faced': 67, 'Not Outs': 2, Avg: 23.8, SR: 213.4, 'Dot Ball %': 28.4 },
        { Player: 'Navin', Runs: 28, 'Balls Faced': 37, 'Not Outs': 1, Avg: 4, SR: 75.7, 'Dot Ball %': 48.6 },
        { Player: 'Amila', Runs: 20, 'Balls Faced': 29, 'Not Outs': 2, Avg: 5, SR: 69, 'Dot Ball %': 51.7 },
        { Player: 'Vidura', Runs: 15, 'Balls Faced': 17, 'Not Outs': 1, Avg: 3.75, SR: 88.2, 'Dot Ball %': 70.6 }, 
        { Player: 'Ishan', Runs: 0, 'Balls Faced': 4, 'Not Outs': 0, Avg: 0, SR: 0, 'Dot Ball %': 100 },
        { Player: 'Pamodh', Runs: 38, 'Balls Faced': 35, 'Not Outs': 3, Avg: 9.5, SR: 108.6, 'Dot Ball %': 51.4 },
        { Player: 'Fonny', Runs: 16, 'Balls Faced': 14, 'Not Outs': 1, Avg: 16, SR: 114.3, 'Dot Ball %': 42.9},
        { Player: 'Hasintha', Runs: 3, 'Balls Faced': 14, 'Not Outs': 1, Avg: 3, SR: 21.43, 'Dot Ball %': 78.6 }
    ];

    const advancedStats = [
        { Player: 'Janna', '% Middled': 64.3, '% Edged': 16.7, '% Missed': 11.9, '% Runs in Boundaries': 51.2, '% Boundary Balls': 9.52, 'Death Over SR': 122.2, 'PP SR': 0, 'LMS SR': 100, 'LMS Avg': 8 },
        { Player: 'Oscar', '% Middled': 57.9, '% Edged': 17.54, '% Missed': 24.6, '% Runs in Boundaries': 74.7, '% Boundary Balls': 19.29, 'Death Over SR': 250, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 },
        { Player: 'Weera', '% Middled': 54.7, '% Edged': 26.9, '% Missed': 17.9, '% Runs in Boundaries': 78.48, '% Boundary Balls': 16.41, 'Death Over SR': 209, 'PP SR': 0, 'LMS SR': 166.6, 'LMS Avg': 25 },
        { Player: 'Tikka', '% Middled': 46.9, '% Edged': 28.6, '% Missed': 24.5, '% Runs in Boundaries': 69.7, '% Boundary Balls': 16.3, 'Death Over SR': 137.5, 'PP SR': 0, 'LMS SR': 157.1, 'LMS Avg': 5.5 },
        { Player: 'Ranul', '% Middled': 70.1, '% Edged': 26.9, '% Missed': 2.99, '% Runs in Boundaries': 76.3, '% Boundary Balls': 26.6, 'Death Over SR': 273.3, 'PP SR': 0, 'LMS SR': 433.3, 'LMS Avg': 13 },
        { Player: 'Navin', '% Middled': 56.8, '% Edged': 18.9, '% Missed': 21.6, '% Runs in Boundaries': 35.7, '% Boundary Balls': 5.4, 'Death Over SR': 120, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 },
        { Player: 'Amila', '% Middled': 44.8, '% Edged': 34.48, '% Missed': 20.7, '% Runs in Boundaries': 30, '% Boundary Balls': 3.45, 'Death Over SR': 0, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 },
        { Player: 'Vidura', '% Middled': 58.8, '% Edged': 23.5, '% Missed': 17.6, '% Runs in Boundaries': 80, '% Boundary Balls': 11.8, 'Death Over SR': 25, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 },
        { Player: 'Ishan', '% Middled': 50, '% Edged': 25, '% Missed': 25, '% Runs in Boundaries': 0, '% Boundary Balls': 0, 'Death Over SR': 0, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 },
        { Player: 'Pamodh', '% Middled': 68.6, '% Edged': 36.8, '% Missed': 14.3, '% Runs in Boundaries': 63.2, '% Boundary Balls': 11.4, 'Death Over SR': 112.5, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 },
        { Player: 'Fonny', '% Middled': 57.14, '% Edged': 21.4, '% Missed': 14.3, '% Runs in Boundaries': 62.5, '% Boundary Balls': 7.14, 'Death Over SR': 200, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 },
        { Player: 'Hasintha', '% Middled': 35.71, '% Edged': 7.14, '% Missed': 57.14, '% Runs in Boundaries': 0, '% Boundary Balls': 0, 'Death Over SR': 0, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 }
    ];

    const rankingMetrics = [
        { Player: 'Janna', OBS: 2.776, BCR: 0.305, BDF: 3.669, CPI: 0.909, SE: 1.619, SRE: 0.553, PPI: 0, DOI: 1.527 },
        { Player: 'Oscar', OBS: 4.184, BCR: 0.901, BDF: 6.361, CPI: 0, SE: 1.267, SRE: 0.457, PPI: 0, DOI: 1.551 },
        { Player: 'Weera', OBS: 3.330, BCR: 0.805, BDF: 3.285, CPI: 3.578, SE: 1.128, SRE: 0.304, PPI: 0, DOI: 2.581 },
        { Player: 'Tikka', OBS: 3.656, BCR: 0.711, BDF: 5.503, CPI: 0.583, SE: 0.829, SRE: 0.488, PPI: 0, DOI: 0.851 },
        { Player: 'Ranul', OBS: 12.855, BCR: 1.461, BDF: 25.510, CPI: 1.107, SE: 1.8, SRE: 0.660, PPI: 0, DOI: 1.836 },
        { Player: 'Navin', OBS: 1.365, BCR: 0.121, BDF: 1.088, CPI: 0, SE: 1.254, SRE: 0.514, PPI: 0, DOI: 1.699 },
        { Player: 'Amila', OBS: 1.106, BCR: 0.065, BDF: 1.165, CPI: 0, SE: 0.752, SRE: 0.5, PPI: 0, DOI: 0 },
        { Player: 'Vidura', OBS: 1.202, BCR: 0.588, BDF: 0.681, CPI: 0, SE: 1.318, SRE: 0.2, PPI: 0, DOI: 0.094 },
        { Player: 'Ishan', OBS: 0.095, BCR: 0, BDF: 0, CPI: 0, SE: 0.95, SRE: 0, PPI: 0, DOI: 0 },
        { Player: 'Fonny', OBS: 4.213, BCR: 0.167, BDF: 7.314, CPI: 0, SE: 1.314, SRE: 0.769, PPI: 0, DOI: 2.188 },
        { Player: 'Pamodh', OBS: 2.600, BCR: 0.451, BDF: 3.507, CPI: 0, SE: 1.714, SRE: 0.452, PPI: 0, DOI: 1.227 },
        { Player: 'Hasintha', OBS: 0.24, BCR: 0, BDF: 0, CPI: 0, SE: 0.31, SRE: 0.21, PPI: 0, DOI: 0 }
    ];

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
    populateTable('basic-stats-table', basicStats);
    populateTable('advanced-stats-table', advancedStats);
    populateTable('ranking-metrics-table', rankingMetrics);

    // Make headers sortable
    makeHeadersSortable('basic-stats-table');
    makeHeadersSortable('advanced-stats-table');
    makeHeadersSortable('ranking-metrics-table');
});

