// let answer=0;

// for(let i=0; i<=1000; i++){
//     answer=answer+i;
// }
// console.log(answer);

//OBJECTS
// const users1={
//     fname: "lanthoiba",
//     gender: "male"
// }

// console.log(users1["fname"]);


//Array
// const users=[1,2,3];
// const name=["tom","bob","jerry"];

//ARRAY OF OBJECTS

// const aluser=[
//     {
//         firstname: "lanthoiba",
//         gender:"male"
//     },
//     {
//         firstname:"bob",
//         gender:"male"
//     },
//     {
//         firstname:"alice",
//         gender:"female"
//     }
// ]

//console.log(aluser);

// for(let i=0;i<aluser.length;i++){
//     if(aluser[i].gender=="male"){
//         console.log(aluser[i].firstname);
//     }
// }

// let sum=0;
// for(let i=0; i<1000000000000;i++){
//      sum=sum+i;
// }

// console.log(sum);

function sum(num1,num2,fTcall){
    let result= num1+num2;
    fTcall(result);
}

function dispalyresult(data){
    console.log("result of the sum is : "+data);
}

function dispalyresultPassive(data){
    console.log("sum's result is : "+ data);
}

// dispalyresult(sum(3,7));

//callbacks function
const ans=sum(1,2,dispalyresult);