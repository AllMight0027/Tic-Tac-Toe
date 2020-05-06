let active=true;
let player = 'X';
let played =['','','','','','','','','']
const won = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];

function clicked(cell){
    var cn = parseInt(cell[1])-1;
    if(player==='X' && played[cn]=="" && active){
        document.getElementById(cell).innerHTML='X'
        played[cn]=player;
        check();
        player='O'
    }
    else if(player==='O' && played[cn]=="" && active){
        document.getElementById(cell).innerHTML='O'
        played[cn]=player;
        check();
        player='X'
    }
}

function check(){
    for (let i =0;i<8;i++){
        if(played[won[i][0]]==played[won[i][1]] && played[won[i][1]]==played[won[i][2]] && played[won[i][0]]!=''){
            document.getElementById("result").innerHTML=`${player} has won!`
            active=false;
        }
    }
    let draw = !played.includes('');
    if(draw){
        document.getElementById("result").innerHTML="Draw!"
        active=false;
    }
}

function reset(){
    played =['','','','','','','','','']
    player = 'X';
    active=true;
    document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
    document.getElementById("result").innerHTML="Game On!"
}