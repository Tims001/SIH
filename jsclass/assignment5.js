const bankData = [
    {name: "Ajibola Godwin", acc_num: "0873226839", bal: 5000},
    {name: "Micheal Phelps", acc_num: "7293947383", bal: 200000}
];

function transfer({accnum1, transamt, accnum2}){
    if(!accnum1 || accnum2 || transamt){
        return "Incomplete details";
    }
    if(
        typeof accnum1 !== "string" ||
        typeof accnum2 !== "string" ||
        typeof transamt !== "number"
    ){
        return "Invalid detail";
    }
}