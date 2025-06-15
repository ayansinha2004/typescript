let names:string="ayan";
let n:number=12154;

let iscorrect=true;

console.log(names,n,iscorrect);

let age=25;
let name2="fhhgerjg";

let money;
money=35646;
money="ehkjhfej";
money=false;
console.log(money);

let money2:unknown;
money2=3446;
money2="jkhdjf";
console.log(money2);

let arr:(string | number | boolean)[]=["jhjhg",125,"jkhjf",455];
console.log(arr);
arr.push(true);
console.log(arr);

let tuple:[string,number,boolean];
tuple=["hfkfk",6546,false];
//tuple=[12546,"jkederj",546];
console.log(tuple);

let obj1:{name:string,age:number,check:boolean};
obj1={
    name:"jfhvdj",
    age:124654,
    check:false,
}


type customer={
    name3:string,
    acc_no:number,
    id:string
}
let obj2:customer={
    name3:"jcghhj",
    acc_no:56676,
    id:"jhjg  hjweghjg"
}

let obj3:customer={
    name3:"ddwh dwhgjw",
    acc_no:62361534,
    id:"ddkldwjc"
}

interface Person {
  name: string;
  age: number;
  isStudent?: boolean; // optional
}
interface Person{
    id:number
}

const user: Person = {
  name: "Ayan",
  age: 22,
  id:1300
};

