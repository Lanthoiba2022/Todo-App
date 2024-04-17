const express = require('express');

const app = express();

//functon that returns a boolean if the age of the person is more than 14 or not

function isOldEnoughMiddleware(req,res,next){
    if(req.query.age>=14){
        next();
    }else{
        res.status(411).json({
            msg:"You are underage"
        })
    }
}

//if every route is going to use the same middleware, then we can use app.use(isOldEnoughMiddleware) and its position is very important as it will be applied to every route 
//below it and not on the ones above it

app.get("/ride2",isOldEnoughMiddleware,function(req,res){
        res.json({
            msg:"You have successfully riden the ride 2"
        }) 
})

app.get("/ride1",isOldEnoughMiddleware,function(req,res){
        res.json({
            msg:"You have successfully riden the ride 1"
        })
})

app.listen(3000);