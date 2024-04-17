const express = require("express")

const app=express()
app.use(express.json())
var users =[{
    name: "Jhon",
    kidneys:[{
        healthy:false
    }]
}]

app.get("/",function(req,res){
    const johnkidneys=users[0].kidneys;
    const numberofKidneys=johnkidneys.length;
    let numberOfhealthyKidneys=0;
    for(let i=0;i<johnkidneys.length;i++){
        if(johnkidneys[i].healthy){
            numberOfhealthyKidneys=numberOfhealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys = numberofKidneys - numberOfhealthyKidneys;
    res.json({
        numberofKidneys,
        numberOfhealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/",function(req,res){
    const isHealthy= req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/",function(req,res){
   for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy=true;
   } 
   res.json({});
})


app.delete("/",function(req,res){
    if(isThereAtLeastOneUnhealthyKidney()){
        const newKidneys=[];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys=newKidneys;
        res.json({msg:"done"})
    }else {
        res.status(411).json({
            msg:"You have no bad kidneys"
        });
    }
    
})

function isThereAtLeastOneUnhealthyKidney(){
    let AtLeastOneUnhealthyKidney = false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            AtLeastOneUnhealthyKidney=true;
        }
    }
    return AtLeastOneUnhealthyKidney;
}

app.listen(3000);
