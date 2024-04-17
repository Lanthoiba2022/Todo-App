const express = require("express");
const mongoose=require("mongoose");

const app=express();

app.use(express.json());

mongoose.connect("mongodb+srv://khumanthemlanthoiba:12345@cluster0.dr4e8gw.mongodb.net/user_app");
const User=mongoose.model('Users',{name: String, email: String, password: String});

app.post("/signup",async function(req,res){
    const username = req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    const existingUsers= await User.findOne({email: username});

    if(existingUsers){
        return res.status(400).send("Username already exists");
    }

    await User.create({name,email: username,password});

    res.json({
        "msg": "Users created sucesfully"
    })
})