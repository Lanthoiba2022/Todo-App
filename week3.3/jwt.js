const jwt=require("jsonwebtoken");
const jwtPassword="secret";

function signjwt(username,password){
    const signature =jwt.sign({
        username
    })
}