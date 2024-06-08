document.addEventListener('DOMContentLoaded', function() {
    const basicStats = [
        { Player: 'Janna', Runs: 28, 'Balls Faced': 32, 'Not Outs': 2, Avg: 9.33, SR: 87.5, 'Dot Ball %': 37.5 },
        { Player: 'Oscar', Runs: 20, 'Balls Faced': 22, 'Not Outs': 1, Avg: 4, SR: 90.9, 'Dot Ball %': 54.54 },
        { Player: 'Weera', Runs: 34, 'Balls Faced': 42, 'Not Outs': 1, Avg: 8.5, SR: 80.95, 'Dot Ball %': 69 },
        { Player: 'Tikka', Runs: 43, 'Balls Faced': 29, 'Not Outs': 1, Avg: 10.75, SR: 148.3, 'Dot Ball %': 51.72 },
        { Player: 'Ranul', Runs: 55, 'Balls Faced': 30, 'Not Outs': 1, Avg: 18.3, SR: 183.3, 'Dot Ball %': 33.3 },
        { Player: 'Navin', Runs: 19, 'Balls Faced': 26, 'Not Outs': 1, Avg: 4.75, SR: 73.1, 'Dot Ball %': 50 },
        { Player: 'Amila', Runs: 6, 'Balls Faced': 13, 'Not Outs': 0, Avg: 3, SR: 46.2, 'Dot Ball %': 53.8 },
        { Player: 'Vidura', Runs: 7, 'Balls Faced': 5, 'Not Outs': 0, Avg: 3.5, SR: 140, 'Dot Ball %': 60 }, 
        { Player: 'Pamodh', Runs: 2, 'Balls Faced': 9, 'Not Outs': 0, Avg: 1, SR: 22.2, 'Dot Ball %': 77.8 },
        { Player: 'Ishan', Runs: 0, 'Balls Faced': 4, 'Not Outs': 0, Avg: 0, SR: 0, 'Dot Ball %': 100 },
        { Player: 'Hasintha', Runs: 3, 'Balls Faced': 14, 'Not Outs': 1, Avg: 3, SR: 21.42, 'Dot Ball %': 45 }
    ];

    const advancedStats = [
        { Player: 'Janna', '% Middled': 65.3, '% Edged': 15.6, '% Missed': 12.5, '% Runs in Boundaries': 35.7, '% Boundary Balls': 6.25, 'Death Over SR': 122.2, 'PP SR': 0, 'LMS SR': 100, 'LMS Avg': 8 },
        { Player: 'Oscar', '% Middled': 59.09, '% Edged': 22.72, '% Missed': 18.18, '% Runs in Boundaries': 60, '% Boundary Balls': 9.09, 'Death Over SR': 0, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 },
        { Player: 'Weera', '% Middled': 45.23, '% Edged': 30.95, '% Missed': 21.42, '% Runs in Boundaries': 76.47, '% Boundary Balls': 11.9, 'Death Over SR': 230, 'PP SR': 0, 'LMS SR': 166.6, 'LMS Avg': 25 },
        { Player: 'Tikka', '% Middled': 44.8, '% Edged': 27.58, '% Missed': 27.58, '% Runs in Boundaries': 79.06, '% Boundary Balls': 20.68, 'Death Over SR': 137.5, 'PP SR': 0, 'LMS SR': 157.1, 'LMS Avg': 5.5 },
        { Player: 'Ranul', '% Middled': 70, '% Edged': 30, '% Missed': 0, '% Runs in Boundaries': 76.3, '% Boundary Balls': 26.6, 'Death Over SR': 233.3, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 },
        { Player: 'Navin', '% Middled': 50, '% Edged': 23.07, '% Missed': 26.92, '% Runs in Boundaries': 31.57, '% Boundary Balls': 3.84, 'Death Over SR': 120, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 },
        { Player: 'Amila', '% Middled': 30.76, '% Edged': 53.84, '% Missed': 15.34, '% Runs in Boundaries': 0, '% Boundary Balls': 0, 'Death Over SR': 0, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 },
        { Player: 'Vidura', '% Middled': 100, '% Edged': 0, '% Missed': 0, '% Runs in Boundaries': 85.71, '% Boundary Balls': 20, 'Death Over SR': 0, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 },
        { Player: 'Ishan', '% Middled': 50, '% Edged': 25, '% Missed': 25, '% Runs in Boundaries': 0, '% Boundary Balls': 0, 'Death Over SR': 0, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 },
        { Player: 'Pamodh', '% Middled': 55.55, '% Edged': 33.33, '% Missed': 11.11, '% Runs in Boundaries': 0, '% Boundary Balls': 0, 'Death Over SR': 0, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 },
        { Player: 'Hasintha', '% Middled': 35.71, '% Edged': 7.14, '% Missed': 57.14, '% Runs in Boundaries': 0, '% Boundary Balls': 0, 'Death Over SR': 0, 'PP SR': 0, 'LMS SR': 0, 'LMS Avg': 0 }
    ];

    const rankingMetrics = [
        { Player: 'Janna', OBS: 3.35, BCR: 0.14, BDF: 3.57, CPI: 0.97, SE: 1.66, SRE: 0.6, PPI: 0, DOI: 8.78 },
        { Player: 'Oscar', OBS: 1.33, BCR: 0.34, BDF: 1.15, CPI: 0, SE: 1.32, SRE: 0.4, PPI: 0, DOI: 0 },
        { Player: 'Weera', OBS: 5.44, BCR: 0.57, BDF: 1.49, CPI: 6.05, SE: 0.79, SRE: 0.22, PPI: 0, DOI: 30.75 },
        { Player: 'Tikka', OBS: 4.10, BCR: 1.02, BDF: 5.38, CPI: 0.54, SE: 0.73, SRE: 0.39, PPI: 0, DOI: 3.79 },
        { Player: 'Ranul', OBS: 8.57, BCR: 1.27, BDF: 15.68, CPI: 0, SE: 1.8, SRE: 0.59, PPI: 0, DOI: 2.59 },
        { Player: 'Navin', OBS: 2.00, BCR: 0.076, BDF: 1.21, CPI: 0, SE: 0.94, SRE: 0.52, PPI: 0, DOI: 8.29 },
        { Player: 'Amila', OBS: 0.66, BCR: 0, BDF: 0.44, CPI: 0, SE: 0.2, SRE: 0.46, PPI: 0, DOI: 0 },
        { Player: 'Vidura', OBS: 2.17, BCR: 1.07, BDF: 1.37, CPI: 0, SE: 3, SRE: 0.25, PPI: 0, DOI: 0 },
        { Player: 'Ishan', OBS: 0.095, BCR: 0, BDF: 0, CPI: 0, SE: 0.95, SRE: 0, PPI: 0, DOI: 0 },
        { Player: 'Pamodh', OBS: 0.35, BCR: 0, BDF: 0.03, CPI: 0, SE: 1.2, SRE: 0.22, PPI: 0, DOI: 0 },
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

