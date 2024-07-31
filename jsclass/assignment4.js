//build a function that can perform division, multiplication, addition and subtraction

function calculator(first, sec){
    return{
        div:function divide(){
            if(sec === 0){
                return "You cannot divide by zero";
            }
            return first/sec ;
        },
        mul:function multiply(){
            return first*sec ;
        },
        add:function addition(){
            return first+sec ;
        },
        sub:function subtraction(){
            return first-sec ;
        }
    }
}

console.log(calculator(20,5).div());
console.log(calculator(20,5).mul());
console.log(calculator(20,5).add());
console.log(calculator(20,5).sub());