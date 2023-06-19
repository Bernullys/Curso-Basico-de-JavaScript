var houseNames = ["Bernardo", "Patricia", "Joicito"];

function sayHi (persons){
    console.log(`Hi! ${persons}`);
}

// for(i=0; i<houseNames.length; i++) {
//     sayHi(houseNames[i]);
// }

for(houseName of houseNames){
    sayHi(houseName);
}