const arr = [12,23,45,23,567,234,76,20];
//result should be 1000

const total = (arr) =>{
    return arr.reduce((x,y) => {
        return x + y;
    })
}
console.log(total(arr));