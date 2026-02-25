const express = require("express");
const app = express();

let port = 3000;

app.listen(port, ()=>{
    console.log(`App is listen on ${port} port`);
});

app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
    const instadata = require("./data.json");
    const data = instadata[username];
    if(data){
        res.render("insta.ejs", {data});
    }else{
        res.render("error.ejs")
    }
})