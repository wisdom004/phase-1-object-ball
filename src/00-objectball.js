function gameObject (){
    return{
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Blacks", "white"],
            players: {
                "Alan Anderson":{
                    number: 0,
                    shoe: 16,
                    points: 22,
                    Rebounds: 12, 
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans":{
                    numbers: 30,
                    shoes: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamdunks: 7,
                },
                "Brook Lopez":{
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamdunks: 15,
                },
                "Mason Plumlee":{
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamdunks: 5,
                },
                "Jason Terry":{
                    number: 31,
                    shoes: 15,
                    points:19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamdunks: 1,
                }
            }
        },
        
    
            away: {
                teamName: "Charlotte Hornets",
                colors: ["Turquoise", "Purple"],
                Players: {
                 "Jeff Adrien":{
                    number: 4,
                    shoes: 18,
                    points:10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamdunks: 2,
                    },
                 "Bismack Biyombo":{
                    number: 0,
                    shoes: 16,
                    points:12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamdunks: 10,

                    },
                 "DeSagna Diop":{
                    number: 2,
                    shoes: 14,
                    points:24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamdunks: 5,       
                    },
                 "Ben Gordon":{
                    number:8,
                    shoes:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamdunks:0,
                 },
                 "Brendan Haywood":{
                    name: 33,
                    shoes: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamdunks: 12,
                 }             
        }
            }
    }
}


function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].points;
        }
    }
}
function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].shoe;
        }
    }
}
function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
}
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}
function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return Object.values(game[team].players).map(player => player.number);
        }
    }
}
function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
}

function bigShoeRebounds() {
    const gameData = gameObject();
    const allPlayers={
        ...gameData.home.players, ...gameData.away.Players };
    let largestShoePlayer = Object.keys(allPlayers)[0];
    for (let player in allPlayers) {
        if (allPlayers[player].shoe > allPlayers[largestShoePlayer].shoe) {
            largestShoePlayer = player;
        }
    }
    return allPlayers[largestShoePlayer].rebounds;
}