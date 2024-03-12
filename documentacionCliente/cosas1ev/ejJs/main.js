const levels = ["newbie", "beginner", "junior", "senior", "expert", "master", "GOAT!"];

const games = {
  chess: { 
            name: "chess", inc: 1
        },
  blackYack: {
            name: "black yack", inc: 2
        }
}

let points = [
    {player: "Pepe",  gameName: games.chess.name,     points: 0},
    {player: "Pepe",  gameName: games.blackYack.name, points: 9},
    {player: "Lucas", gameName: games.blackYack.name, points: 8}
]

let players = [
  {
    name: "Pepe", games: [games.chess, games.blackYack] , experience: "newbie"
  },
  {
    name: "Lucas", games: [games.blackYack] ,experience: "expert"
  }
];


function posPlayer(playerName){//CALCULO POSITION DE PLAYER SEGUN SU NAME

    for (i = 0; i < players.length; i++) {

       if(players[i]['name'] == playerName){

            return players.indexOf(players[i]);
       }
    }  
}

function levelUp(playerName) {

    let posicion = posPlayer(playerName);//indice del jugador en el array players
    let experience = players[posicion].experience;//obtengo la experiencia del jugador

    if(experience !== "GOAT!"){

        let dondeEtoy = levels.indexOf(experience);
        let dondeSubo = dondeEtoy+1;
        players[posicion].experience = levels[dondeSubo];//subo de nivel

    }else console.log("Ya estas en el maximo nivel no puedes subir mas");
}

function returnPosInPoints(playerName, gameName){
    
    let array = points.find(
        point => point.player===playerName && point.gameName===gameName
    );
    let position= points.indexOf(array);

    return position;
}
function returnPoints(playerName, gameName){
    
    let array = points.find(
        point => point.player===playerName && point.gameName===gameName
    );
    let position= points.indexOf(array);

    return points[position].points;
}// console.log(returnPoints("Pepe", "chess"));//0

function increment(gameName){
    
    for (var indice in games) {

        if(games[indice].name == gameName){
 
             return games[indice].inc;
        }
    } 
}

function gameNameInGames(playerName, gameName){//¿JUGADOR JUEGA ESE JUEGO?

    let posicion = posPlayer(playerName);//indice del jugador en el array players
    let playerGames = players[posicion].games;//obtengo juegos del jugador

    let existe=0;

    for (i = 0; i < playerGames.length; i++) {
        if(playerGames[i].name==gameName){
            existe++;
        }
    }
    if(existe != 0) return true
    else return false;
}


function addPoints(playerName, gameName) {

    let posicion = posPlayer(playerName);//indice del jugador en el array players

    if(gameNameInGames(playerName, gameName)){//¿JUGADOR JUEGA ESE JUEGO?

        let pointsOfPlayer = returnPoints(playerName, gameName);//puntos que tiene el jugador en juego
    
        
        pointsOfPlayer += increment(gameName);//añado puntos

        //actualizo puntos
        points[returnPosInPoints(playerName, gameName)].points =pointsOfPlayer;
        
        if(pointsOfPlayer>=10){

            points[returnPosInPoints(playerName, gameName)].points = pointsOfPlayer%10;

            levelUp(playerName);
        }

    }else console.log("Jugador NO juega ese juego");
    
}

addPoints("Lucas", "black yack");
console.log(points);
console.log(players);
