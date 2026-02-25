const express = require("express");
const app = express();
// const path = require("path");

const port = 8080;

//seving static file
app.use(express.static("public"));
// app.use(express.static(Path.join(__dirname, "public")));

app.set("view engine", "ejs");
// app.set("views", Path.join(__dirname, "/views"));

app.get("/", (req, res)=>{
    res.render("home");
});

app.get("/rolldice",(req, res)=>{
    let diceVal = Math.floor(Math.random()*6)+1
    res.render("rollDice.ejs",{diceVal});
});
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});

//instagram EJS
// app.get("/ig/:username",(req, res)=>{
//     const follower = ["Sami", "Pooja", "Sahil", "Nitish"];
//     let {username} = req.params;
//     res.render("insta.ejs",{username, follower});
// });

app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("inst.ejs",{data});
    }else{
        res.render("error.ejs");
    }
});