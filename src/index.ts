//string, boolean, number
let firstName: string = "Marco";
let age: number = 20;
const isAdmin: boolean = true;

console.log(typeof firstName);

firstName = "Marco";

console.log(firstName); 

const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);

console.log(firstName.toUpperCase());

myNumbers.push(5)

//tuplas -> tuple

let myTuple: [number, string, string[]];

//myTuple = [5, "teste", ["a", "b"]]

//myTuple = [true, false, true]

const user: {name: string, age: number} = {
    name: "Marco",
    age: 21 
};

console.log(user);

console.log(user.name);

let a:any = 0;

a = "teste";
a = true;
a = []


//union type

let id: string | number = "10"//apenas para dois tipos

id = 200

id = "true"


//type alias

type MyIdType = number | string 


const userId: MyIdType = 10
const productId: MyIdType = '00001'
const shirId: MyIdType = 123

//enum 
// tamanho de roupas (size: Medio, size: Pequeno)

enum Size {
    P = "Pequeno",
    M = "Medio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.P
}

console.log(camisa)