const set = [12,3,1,2,10,30,0];
//using the array.reduce method


//function to return highest value
const maxNumber = (set) => {
    return set.reduce((first,next) => {
        if (first > next) {
            return first;
        }
        return next;
    })
}
//function to return lowest value
const minNumber = (set) => {
    return set.reduce((first,next) => {
        if (first < next) {
            return first;
        }
        return next;
    })
}

highest = maxNumber(set)
lowest = minNumber(set)

console.log(`{High: ${highest} Low: ${lowest}}`)