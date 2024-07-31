const timeStamp= 18

const resturantStatus= timeStamp >= 18 ? 'STORE CLOSED' : timeStamp >= 9 ? 'SERVING CUSTOMERS' : timeStamp >= 8 ? 'FOOD IS READY' : timeStamp >= 7 ? 'PREPARING FOOD' : timeStamp >= 6 ? 'STORE OPENS' : 'STAY HOME MATE' ;

console.log(resturantStatus)