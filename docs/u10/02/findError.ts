const add = (x : number, y : number) => x + y;
const equals = (x : any, y : any) => x === y;

console.log( add(1,2) );
console.log( add(true, true ) );
console.log( add(true, false ) );
let y : number;
let x : number = y = 1; //y wurde nicht definiert
console.log( /*add(equals(x,y),*/ equals(y,x));