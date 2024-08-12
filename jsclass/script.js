const studentData ={
    name: "micheal",
    age:5,
    male: true,
    guardian: {
        name:"pauline",
        age: 50,
        phoneNumber: 76825535463,
        spouse: {
            gender: "male",
            age: 60,
        },
    },
};

//console.log(studentData.guardian.spouse.gender)

//Arrays
const arr = ["Benzema", "Candid","Becky","Ambrose","Obitecno"]
//console.log(arr[2])
// console.log(arr.length)
arr.pop()
// console.log(arr)
arr.push("Timothy")
// console.log(arr)
//Class work
const carlist = ["Toyota","Benz","Jaguar","Tecno", "Lambo"]

//Using the splice method
carlist.splice(3,1)
// console.log(carlist)

//task

function div(x,y){
    return{
    mul:function mul() {
        return x*y;
    },
    set:function pro() {
        return x/y;
    }
}
}

// console.log(div(100,2).set())


//loop
const name = ["Mike","Hensh","Idy","Barack","Okon"];

for (let i = 0; i < name.length; i++){
    // console.log(name[i]);
}

//Classwork
const testNumbers = [23,12,83,43,20,16,5];
for (let i=0; i < testNumbers.length; i++){
    if (testNumbers[i] % 2 === 0){
        console.log(testNumbers[i]);
    }
}

//Recursive function
function find20(x){
    if(testNumbers[x] === 20){
        return "20 has been found"
    }
        return find20(x + 1)
}
console.log(find20(0));