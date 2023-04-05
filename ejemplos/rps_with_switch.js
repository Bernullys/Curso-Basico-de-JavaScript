var r = "rock";
var p = "paper";
var s = "scissors";

function rps(you,pc){
    var a = "You Win";
    var b = "Computer Win";
    var c = "Tie"
    switch(true){
        case you == pc:{
            return c;
            break;
        }
        case (you == r && pc == s) || (you == p && pc == r) || (you == s && pc == p):{
            return a;
            break;
        }
        default:
            return b; 
    }
}
console.log(rps(s,r))