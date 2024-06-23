// Sample data for Setting score (S) vs Chasing score (C)
const settingChasingData = [
    { player: 'Janna', inningsS: 3, inningsC: 4, runsS: 20, runsC: 23, avgS: 10, avgC: 7.67, srS: 74.1, srC: 153.3, dotS: 44.4, dotC: 33.3 },
    { player: 'Oscar', inningsS: 6, inningsC: 5, runsS: 60, runsC: 23, avgS: 20, avgC: 5.75, srS: 206.9, srC: 82.1, dotS: 31.0, dotC: 64.3 },
    { player: 'Weera', inningsS: 4, inningsC: 6, runsS: 22, runsC: 57, avgS: 5.5, avgC: 14.25, srS: 115.8, srC: 118.8, dotS: 63.2, dotC: 58.3 },
    { player: 'Tikka', inningsS: 6, inningsC: 3, runsS: 46, runsC: 20, avgS: 9.2, avgC: 20, srS: 135.3, srC: 133.3, dotS: 50, dotC: 40 },
    { player: 'Ranul', inningsS: 6, inningsC: 2, runsS: 83, runsC: 60, avgS: 16.6, avgC: 60, srS: 193, srC: 250, dotS: 32.6, dotC: 20.8 },
    { player: 'Navin', inningsS: 3, inningsC: 4, runsS: 6, runsC: 22, avgS: 2, avgC: 7.33, srS: 50, srC: 88, dotS: 58.3, dotC: 44 },
    { player: 'Amila', inningsS: 3, inningsC: 3, runsS: 11, runsC: 9, avgS: 5.5, avgC: 4.5, srS: 91.7, srC: 52.9, dotS: 58.3, dotC: 47 },
    { player: 'Vidura', inningsS: 4, inningsC: 1, runsS: 15, runsC: 0, avgS: 5, avgC: 0, srS: 93.8, srC: 0, dotS: 68.8, dotC: 100 },
    { player: 'Ishan', inningsS: 2, inningsC: 0, runsS: 0, runsC: 0, avgS: 0, avgC: 0, srS: 0, srC: 0, dotS: 100, dotC: 0 },
    { player: 'Pamodh', inningsS: 4, inningsC: 3, runsS: 17, runsC: 20, avgS: 5.7, avgC: 21, srS: 113.3, srC: 105, dotS: 53.3, dotC: 50 },
    { player: 'Hasintha', inningsS: 1, inningsC: 0, runsS: 3, runsC: 0, avgS: 3, avgC: 0, srS: 21.4, srC: 0, dotS: 78.6, dotC: 0 },
    { player: 'Fonny', inningsS: 1, inningsC: 1, runsS: 1, runsC: 15, avgS: 1, avgC: 15, srS: 100, srC: 115.4, dotS: 0, dotC: 46.2 }
];

// Sample data for Shots played
const shotsPlayedData = [
    { player: 'Janna', attacking: 61.9, placement: 28.6, defensive: 2.3, unorthodox: 0, noShot: 7.1, safeShot: 57.2, unsafeShot: 23.8 },
    { player: 'Oscar', attacking: 91.2, placement: 8.8, defensive: 0, unorthodox: 0, noShot: 0, safeShot: 63.2, unsafeShot: 14 },
    { player: 'Weera', attacking: 64.2, placement: 19.4, defensive: 11.9, unorthodox: 3, noShot: 1.5, safeShot: 64.2, unsafeShot: 14 },
    { player: 'Tikka', attacking: 44.9, placement: 48.9, defensive: 6.1, unorthodox: 0, noShot: 0, safeShot: 67.3, unsafeShot: 8.16 },
    { player: 'Ranul', attacking: 71.6, placement: 25.4, defensive: 3, unorthodox: 0, noShot: 0, safeShot: 74.6, unsafeShot: 22.4 },
    { player: 'Navin', attacking: 59.5, placement: 29.7, defensive: 2.7, unorthodox: 5.4, noShot: 2.7, safeShot: 64.9, unsafeShot: 10.8 },
    { player: 'Amila', attacking: 62, placement: 13.8, defensive: 24.1, unorthodox: 0, noShot: 0, safeShot: 65.5, unsafeShot: 13.8 },
    { player: 'Vidura', attacking: 64.7, placement: 29.4, defensive: 5.9, unorthodox: 0, noShot: 0, safeShot: 64.7, unsafeShot: 17.6 },
    { player: 'Ishan', attacking: 50, placement: 50, defensive: 0, unorthodox: 0, noShot: 0, safeShot: 25, unsafeShot: 50 },
    { player: 'Pamodh', attacking: 57.1, placement: 17.1, defensive: 25.7, unorthodox: 0, noShot: 0, safeShot: 80, unsafeShot: 2},
    { player: 'Hasintha', attacking: 0, placement: 42.8, defensive: 57.1, unorthodox: 0, noShot: 0, safeShot: 28.6, unsafeShot: 0 },
    { player: 'Fonny', attacking: 50, placement: 42.9, defensive: 0, unorthodox: 0, noShot: 7.1, safeShot: 50, unsafeShot: 2 }
];

// Sample data for Bowling preferences and struggles
const bowlingPreferencesData = [
    { player: 'Janna', runsSpin: 21, runsPace: 22, avgSpin: 10.5, avgPace: 22, srSpin: 116.67, srPace: 91.67, highestSuccess: 'Fonny', lowestSuccess: 'Oscar' },
    { player: 'Oscar', runsSpin: 0, runsPace: 83, avgSpin: 0, avgPace: 27.67, srSpin: 0, srPace: 156.6, highestSuccess: 'Amila', lowestSuccess: 'Ranul' },
    { player: 'Weera', runsSpin: 24, runsPace: 55, avgSpin: 12, avgPace: 13.75, srSpin: 100, srPace: 200, highestSuccess: 'Pamodh', lowestSuccess: 'Janna' },
    { player: 'Tikka', runsSpin: 17, runsPace: 49, avgSpin: 17, avgPace: 12.25, srSpin: 188.9, srPace: 122.5, highestSuccess: 'Navin', lowestSuccess: 'Ranul' },
    { player: 'Ranul', runsSpin: 47, runsPace: 96, avgSpin: 47, avgPace: 24, srSpin: 276.5, srPace: 192, highestSuccess: 'Navin', lowestSuccess: 'Amila' },
    { player: 'Amila', runsSpin: 12, runsPace: 8, avgSpin: 12, avgPace: 8, srSpin: 100, srPace: 47.1, highestSuccess: 'Navin', lowestSuccess: 'Oscar' },
    { player: 'Vidura', runsSpin: 0, runsPace: 15, avgSpin: 0, avgPace: 7.5, srSpin: 0, srPace: 93.75, highestSuccess: 'Weera', lowestSuccess: 'Pamodh' },
    { player: 'Navin', runsSpin: 8, runsPace: 20, avgSpin: 8, avgPace: 6.67, srSpin: 72.73, srPace: 76.92, highestSuccess: 'Weera', lowestSuccess: 'Vidura' },
    { player: 'Pamodh', runsSpin: 2, runsPace: 36, avgSpin: 2, avgPace: 9, srSpin: 40, srPace: 120, highestSuccess: 'Vidura', lowestSuccess: 'Janna' },
    { player: 'Fonny', runsSpin: 8, runsPace: 8, avgSpin: 8, avgPace: 8, srSpin: 160, srPace: 88.9, highestSuccess: 'Ranul', lowestSuccess: 'Amila' }
];

// Function to populate tables with data
function populateTable(tableId, data) {
    const tableBody = document.getElementById(tableId).querySelector('tbody');
    tableBody.innerHTML = ''; // Clear existing rows
    data.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach((text, index) => {
            const cell = document.createElement('td');
            cell.textContent = text;
            if (index === 0) cell.classList.add('fixed-column');
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}

// Function to sort tables
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

// Function to make table headers sortable
function makeHeadersSortable(tableId) {
    const table = document.getElementById(tableId);
    const headers = table.querySelectorAll('th');

    headers.forEach((header, index) => {
        const isNumeric = !isNaN(headers[1].textContent);
        header.style.cursor = 'pointer';
        header.addEventListener('click', () => sortTable(tableId, index, isNumeric));
    });
}

// Populate tables with sample data and make headers sortable
document.addEventListener('DOMContentLoaded', () => {
    populateTable('setting-chasing-table', settingChasingData);
    populateTable('shots-played-table', shotsPlayedData);
    populateTable('bowling-preferences-table', bowlingPreferencesData);

    makeHeadersSortable('setting-chasing-table');
    makeHeadersSortable('shots-played-table');
    makeHeadersSortable('bowling-preferences-table');
});
