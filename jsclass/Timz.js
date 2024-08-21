//A function that will take in a string group and set the initials of each string word to uppercase

const stringSet = "hello my name is timothy felix akpan";

const initialTop = (wordSet) => {
    //first covert the string set to an array in order to target each word
    const string = stringSet.split(" ");
    //using a for loop to loop over each item of the created array
    for(i=0; i<string.length; i++){
        string[i] = string[i][0].toUpperCase() + string[i].substring(1).toLowerCase(
        );
    }
    return string.join(" ");

}

console.log(initialTop(stringSet));