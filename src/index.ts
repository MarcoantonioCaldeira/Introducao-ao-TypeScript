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

//literal teste

let teste: "autenticado" | null;

teste = "autenticado";
teste = null;

// funcoes 

function soma(a: number , b: number){
    return a + b
}

console.log("Soma: " + (soma(1,2)));

function logger(msg: string): void{
    console.log(msg);
}

logger("Teste!!!");

function greeting(name: string, greet?: string){
    if(greet){
        console.log(`Ola ${greet} ${name}`);
    } else{
        console.log(`Ola ${name}`);
    }
}

greeting("Marco");



//interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumer(nums: MathFunctionParams){
    return nums.n1 + nums.n2
}

console.log(sumNumer({n1:1, n2:2}))


function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}

//generics 

function showArraysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1,2,3]
const a2 = ["a","b","c"]


showArraysItems(a1);
showArraysItems(a2);


// classes

class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName(){
        console.log(`O nome do usuario é ${this.name}`);
    }

    showUserRole(canShow: boolean){
        if(canShow) {
            console.log(`Idade do usuario é: ${this.role}`);
            return; 
        }
        console.log("Informação restrital");
    }
}

const zeca = new User("Zeca","Admin", true);

console.log(zeca);


//interfaces em classes 

interface IVehicle {
    brand: string 
    showBrand(): void
}

class Car implements IVehicle {

    brand 
    wheels 

    constructor(brand: string, wheels: number){
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car("VW", 4);

fusca.showBrand();

//heranca

class SuperCar extends Car{
    engine 

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels)
        this.engine = engine 
    }
}

const a4 = new SuperCar("Audi", 4, 2.0);

console.log(a4);

a4.showBrand();

//decorators 

function BasePerson(){
    return function <T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}


@BasePerson()
class Person {
    name;

    constructor(name: string){
        this.name = name; 
    }
}

const sam = new Person("Sam");

console.log(sam);
