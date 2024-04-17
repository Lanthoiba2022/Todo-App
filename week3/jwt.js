const jwt=require("jsonwebtoken");

//decode,verify,generate

const value={
    name:"harkirat",
    accNum: 123123123
}

//jwt

const token=jwt.sign(value,"secret");
console.log(token);