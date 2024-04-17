const express = require("express");

const app = express();

app.get("/health-checkup",function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyID= req.query.kidneyID;

    if(username!="Lanthoiba" || password!="pass"){
        res.status(400).json({"msg":"something's up with your input "})
        return
    }
        if(kidneyID!=1 && kidneyID!=2){
            res.status(400).json({"msg": "Something's up with the inputs"})
            return
        }
            //do something with the kidney here
        res.json({
            msg:"Your Kidney is fine!"
        })
    
});

console.log(app.listen(3000));