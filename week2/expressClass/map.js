//map,filter, arrow funcs
//given an array, give back a new array in which every value is multiplied by 2
//[1,2,3,4,5]
//[2,4,6,8,10]

const input = [1,2,3,4,5];

///solution

// const newArray=[];
// for(let i=0;i<input.length;i++)
// {
//     newArray.push(input[i] * 2);
// }
// console.log(newArray);

//OTHER SOLUTION USING MAP

// function transform(i){
//     return i*2;
// }

// const ans=input.map(transform);
// console.log(ans);

//filtering
function filterLogic(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}

const ans=input.filter(filterLogic);
console.log(ans);
