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


//generic
function abc <T>(a:T):T{
    return a;
}
console.log(abc<number>(1234));
console.log(abc<string>("msjhjfhf"));
console.log(abc<object>([10,20,30,40]));
console.log(abc([10,"kjjkd",64646,true]));

interface admin <A,B>{
    name8:string,
    age8:number,
    aadhar:A,
    salary:B,
}
const a1:admin<string,number>={
    name8:"hjsdgd",
    age8:12,
    aadhar:"kjmkdhch",
    salary:6262768
};

const a2:admin<number,boolean>={
    name8:"lxjckchwc",
    age8:35,
    aadhar:97171971,
    salary:false
}
console.log(a1,a2);

//classes


