// Example data
const individualStats = [
    {
        player: 'Tikka', inningsBatted: 2, runsScored: 17, ballsFaced: 14, highestScore: 14, battingAverage: 17.0, notOuts: 1, strikeRate: 121.43,
        fours: 0, sixes: 2, ducks: 0, thirties: 0, fifties: 0, oversBowled: 1.4, wicketsTaken: 2, dotBalls: 5, runsGiven: 8, economyRate: 4.8
    },
    {
        player: 'Vidura', inningsBatted: 2, runsScored: 7, ballsFaced: 5, highestScore: 6, battingAverage: 3.50, notOuts: 0, strikeRate: 140.0,
        fours: 0, sixes: 1, ducks: 0, thirties: 0, fifties: 0, oversBowled: 2.0, wicketsTaken: 1, dotBalls: 6, runsGiven: 6, economyRate: 3.0
    },
    {
        player: 'Ranul', inningsBatted: 2, runsScored: 8, ballsFaced: 11, highestScore: 4, battingAverage: 4.00, notOuts: 0, strikeRate: 72.73,
        fours: 1, sixes: 0, ducks: 0, thirties: 0, fifties: 0, oversBowled: 2.0, wicketsTaken: 1, dotBalls: 7, runsGiven: 5, economyRate: 2.5
    },
    {
        player: 'Weera', inningsBatted: 2, runsScored: 7, ballsFaced: 12, highestScore: 7, battingAverage: 3.50, notOuts: 0, strikeRate: 58.33,
        fours: 1, sixes: 0, ducks: 1, thirties: 0, fifties: 0, oversBowled: 2.0, wicketsTaken: 1, dotBalls: 6, runsGiven: 19, economyRate: 9.5
    },
    {
        player: 'Navin', inningsBatted: 2, runsScored: 5, ballsFaced: 11, highestScore: 4, battingAverage: 2.50, notOuts: 0, strikeRate: 45.45,
        fours: 0, sixes: 0, ducks: 0, thirties: 0, fifties: 0, oversBowled: 1.5, wicketsTaken: 3, dotBalls: 5, runsGiven: 16, economyRate: 8.73
    },
    {
        player: 'Janna', inningsBatted: 2, runsScored: 2, ballsFaced: 5, highestScore: 2, battingAverage: 1.00, notOuts: 0, strikeRate: 40.00,
        fours: 0, sixes: 0, ducks: 1, thirties: 0, fifties: 0, oversBowled: 1.0, wicketsTaken: 0, dotBalls: 3, runsGiven: 5, economyRate: 5.0
    },
    {
        player: 'Amila', inningsBatted: 2, runsScored: 6, ballsFaced: 15, highestScore: 3, battingAverage: 3.00, notOuts: 0, strikeRate: 40.00,
        fours: 0, sixes: 0, ducks: 1, thirties: 0, fifties: 0, oversBowled: 2.0, wicketsTaken: 2, dotBalls: 5, runsGiven: 10, economyRate: 5.0
    },
    {
        player: 'Oscar', inningsBatted: 2, runsScored: 13, ballsFaced: 10, highestScore: 10, battingAverage: 13.00, notOuts: 1, strikeRate: 130.00,
        fours: 0, sixes: 1, ducks: 0, thirties: 0, fifties: 0, oversBowled: 1.3, wicketsTaken: 3, dotBalls: 8, runsGiven: 2, economyRate: 1.33
    }
    // Add more player stats here
];

const battingRankings = [
    { player: 'Tikka', battingPoints: 25.6, mostRuns: 17, battingAverage: 17.0, strikeRate: 121.4, mostFours: 0, mostSixes: 2, mostThirties: 0, mostFifties: 0 },
    { player: 'Oscar', battingPoints: 19.4, mostRuns: 13, battingAverage: 13.0, strikeRate: 130, mostFours: 0, mostSixes: 1, mostThirties: 0, mostFifties: 0 },
    { player: 'Vidura', battingPoints: 7.4, mostRuns: 7, battingAverage: 3.5, strikeRate: 140, mostFours: 0, mostSixes: 1, mostThirties: 0, mostFifties: 0 },
    { player: 'Ranul', battingPoints: 4.4, mostRuns: 8, battingAverage: 4.0, strikeRate: 72.7, mostFours: 1, mostSixes: 0, mostThirties: 0, mostFifties: 0 },
    { player: 'Navin', battingPoints: 1.1, mostRuns: 6, battingAverage: 3.0, strikeRate: 45.5, mostFours: 0, mostSixes: 0, mostThirties: 0, mostFifties: 0 },
    { player: 'Weera', battingPoints: -1.4, mostRuns: 7, battingAverage: 3.5, strikeRate: 58.3, mostFours: 1, mostSixes: 0, mostThirties: 0, mostFifties: 0 },
    { player: 'Amila', battingPoints: -3.8, mostRuns: 6, battingAverage: 3.0, strikeRate: 40.0, mostFours: 0, mostSixes: 0, mostThirties: 0, mostFifties: 0 },
    { player: 'Janna', battingPoints: -4.6, mostRuns: 2, battingAverage: 1.0, strikeRate: 40.0, mostFours: 0, mostSixes: 0, mostThirties: 0, mostFifties: 0 }
    // Add more ranking data here
];

const bowlingRankings = [
    { player: 'Oscar', bowlingPoints: 38.4, mostWickets: 3, bestEconomy: 1.3, dotBallPercentage: 88.9 },
    { player: 'Navin', bowlingPoints: 4.2, mostWickets: 3, bestEconomy: 8.7, dotBallPercentage: 45.5 },
    { player: 'Tikka', bowlingPoints: 6.25, mostWickets: 2, bestEconomy: 4.8, dotBallPercentage: 50.0 },
    { player: 'Amila', bowlingPoints: 5, mostWickets: 2, bestEconomy: 5.0, dotBallPercentage: 41.7 },
    { player: 'Ranul', bowlingPoints: 8, mostWickets: 1, bestEconomy: 2.5, dotBallPercentage: 58.3 },
    { player: 'Vidura', bowlingPoints: 6.1, mostWickets: 1, bestEconomy: 3.0, dotBallPercentage: 50.0 },
    { player: 'Weera', bowlingPoints: 1.93, mostWickets: 1, bestEconomy: 9.5, dotBallPercentage: 50.0 },
    { player: 'Janna', bowlingPoints: 2, mostWickets: 0, bestEconomy: 5.0, dotBallPercentage: 45.5 }
    // Add more ranking data here
];

const fieldingRankings = [
    { player: 'Janna', fieldingPoints: 8, runOuts: 0, catches: 4 },
    { player: 'Oscar', fieldingPoints: 5, runOuts: 1, catches: 1},
    { player: 'Weera', fieldingPoints: 4, runOuts: 0, catches: 2 },
    { player: 'Ranul', fieldingPoints: 4, runOuts: 0, catches: 2 },
    { player: 'Tikka', fieldingPoints: 2, runOuts: 0, catches: 1 },
    { player: 'Navin', fieldingPoints: 0, runOuts: 0, catches: 0 },
    { player: 'Amila', fieldingPoints: 0, runOuts: 0, catches: 0 },
    { player: 'Vidura', fieldingPoints: 0, runOuts: 0, catches: 0 }
    // Add more ranking data here
];

const leagueMvp = [
    { player: 'Oscar', mvpPoints: 20.94, runs: 13, wickets: 3 },
    { player: 'Tikka', mvpPoints: 11.29, runs: 17, wickets: 2 },
    { player: 'Ranul', mvpPoints: 5.46, runs: 8, wickets: 1 },
    { player: 'Vidura', mvpPoints: 4.50, runs: 7, wickets: 1 },
    { player: 'Janna', mvpPoints: 1.80, runs: 2, wickets: 0 },
    { player: 'Navin', mvpPoints: 1.76, runs: 5, wickets: 3 },
    { player: 'Weera', mvpPoints: 1.49, runs: 7, wickets: 1 },
    { player: 'Amila', mvpPoints: 0.4, runs: 6, wickets: 2 }
    // Add more ranking data here
];

function populateTable(tableBodyId, data, columns) {
    const tableBody = document.getElementById(tableBodyId);
    data.forEach(stat => {
        const row = document.createElement('tr');
        columns.forEach(column => {
            const cell = document.createElement('td');
            cell.textContent = stat[column];
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}

window.onload = () => {
    populateTable('individualStatsTableBody', individualStats, [
        'player', 'inningsBatted', 'runsScored', 'ballsFaced', 'highestScore', 'battingAverage', 'notOuts', 'strikeRate', 'fours', 'sixes', 'ducks', 'thirties', 'fifties', 'oversBowled', 'wicketsTaken', 'dotBalls', 'runsGiven', 'economyRate'
    ]);

    populateTable('battingRankingsTableBody', battingRankings, [
        'player', 'battingPoints', 'mostRuns', 'battingAverage', 'strikeRate', 'mostFours', 'mostSixes', 'mostThirties', 'mostFifties'
    ]);

    populateTable('bowlingRankingsTableBody', bowlingRankings, [
        'player', 'bowlingPoints', 'mostWickets', 'bestEconomy', 'dotBallPercentage'
    ]);

    populateTable('fieldingRankingsTableBody', fieldingRankings, [
        'player', 'fieldingPoints', 'runOuts', 'catches'
    ]);

    populateTable('leagueMvpTableBody', leagueMvp, [
        'player', 'mvpPoints', 'runs', 'wickets'
    ]);
};
