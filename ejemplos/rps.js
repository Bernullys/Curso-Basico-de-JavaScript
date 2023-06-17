var yourChoice;
var computersChoice;

function rps(yourChoice, computersChoice) {

    var1 = "Tie";
    var2 = "You win";
    var3 = "Computer win";

    if (yourChoice === computersChoice){
        return var1;
    } else if (yourChoice == "rock" && computersChoice == "paper"){
        return var3;
    } else if (yourChoice == "rock" && computersChoice == "scissors"){
        return var2;
    } else if (yourChoice == "paper" && computersChoice == "scissors"){
        return var3;
    } else if (yourChoice == "paper" && computersChoice == "rock"){
        return var2;
    } else if (yourChoice == "scissors" && computersChoice == "rock"){
        return var3;
    } else if (yourChoice == "scissors" && computersChoice == "paper"){
        return var2;
    }
}

console.log(rps("scissors","paper"));