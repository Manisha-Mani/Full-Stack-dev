//Variable
let name='Manisha';
//Constant
const pi=3.14;

console.log(name);
console.log(pi);

//PRIMITIVE DATATYPES
//Strings
let str="HarryPotter"
//Numbers
let n=23;
//Boolean
let option=true;
//Undefined
let und;
//Null-when u want to clear the value of a variable explicitly, we use null
let nullvar=null;

console.log(str);
console.log(n);
console.log(option);
console.log(und);
console.log(nullvar);

//REFERENCE DATATYPES
//Arrays-datastructure used to represent category of items
let food=['icecream','choclate','paneer tikka'];
console.log(food);

let numbers=[0,1,4,5,7,3];
//adding two numbers of an array
console.log(numbers[0]+numbers[1]);
//sorting array elements
console.log(numbers.sort());
//adding an element to an array
numbers.push(6);
console.log(numbers);

//mixed datatype values in an array
let mix=[];
mix=['one',1,'two',2];
console.log(mix);

//Objects-Standalone entity with properties and it's values

let girl={
    name:'Manisha',
    age:23,
    female:true
};
//Accessing objects via dot notation(Alt=bracket notation=object[pname])
console.log(girl.age);
console.log(girl.female);

//Array within object
let manisha={
    college:'RVCE',
    dept:'EIE',
    age:23,
    subjects:['MPMC','DLD','ANN','ACS']
};
console.log(manisha.subjects);
console.log(manisha.subjects[1]);
console.log(manisha.subjects.sort());

//Functions are code which could be reused, fundamental building block, set of statements

function product(a,b)//Parameters in function definition
{
return a*b;
}
let x=product(2,4);//arguments are passed while calling the function
console.log(x);

//CONDITIONAL STATEMENTS

//if-then
let a=[1,2,4,1,2,3,2];
if(a[0]==a[3]){
    console.log('Correct');
}

//if-else
if(a[0]==a[1]){
    console.log('True');
}
else{
    console.log('False');
}

if(a[0]==a[3] && a[1]==a[4]){
    console.log('Condition met');
}
else{
    console.log('Condition is not met');
}

//LOOPS

//while loop
let i=0;
while(i<5){
    console.log('The number is '+i);
    i++;
}

//do while loop

do{
    console.log('The number is '+i);
    i++;
}
while(i>10); //prints just 5 and since condition is false, exits

//for loop

for(let j=0;j<5;j++)
{
    console.log('the number is '+j);
}

//SWITCH CASE

let foods='iccream';
switch(foods){
    case "icecream":
        console.log("I love icecream");
        break;
    case "choclate":
        console.log("I love choclate");
        break;
    default:
        console.log("I hate bitter gourd");
        //break;
}
