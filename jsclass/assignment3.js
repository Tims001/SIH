let input = "q";
let letter = input.toUpperCase();


if(letter == "A" || letter=="E" || letter=="I" || letter=="O" || letter=="U") {
    console.log("This is a vowel");
}
if(letter == "B" || letter=="C" || letter=="D" || letter=="F" || letter=="G" || letter == "H" || letter=="J" || letter=="K" || letter=="L" || letter=="M" || letter == "N" || letter=="P" || letter=="Q" || letter=="R" || letter=="S"|| letter == "T" || letter=="V" || letter=="W" || letter=="X" || letter=="Y" || letter=="Z"){
    console.log("This is a consonant");
}

else{
    console.log("Invalid input");
}

switch (letter) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("This is a vowel");
        break;
    case "B":
    case "C":
    case "D":
    case "F":
    case "G":
    case "H":
    case "J":
    case "K":
    case "L":
    case "M":
    case "N":
    case "P":
    case "Q":
    case "R":
    case "S":
    case "T":
    case "V":
    case "W":
    case "X":
    case "Y":
    case "Z":
        console.log("This is a consonant");
        break;
    default:
        console.log("Invalid input");
        break;
}