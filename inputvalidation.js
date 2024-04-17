const express= require("express");
const app=express();

app.use(express.json());

app.post("/health-checkup",function(req,res){
    const kidneys = req.body.kidneys;
    const KidneyLength = kidneys.length;

    res.send("you have "+KidneyLength+" Kidneys");
});

app.use(function(err,req,res,next){
    res.json({
        msg: "Sorry something is up with our server"
    })
})

console.log("app listening on port 3000");
app.listen(3000);
 