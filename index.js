const express = require("express");
const app = express();
// console.dir(app);

let port = 3000;
app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
});

// app.use((req, res)=>{
//     console.log(req);
//     console.log("massage recieved");
//     // res.send("this is a basic response");
//     // res.send({
//     //     name : "apple",
//     //     color : "red",
//     // });
//     res.send("<h1>Fruits</h1>");
// });

app.get("/", (req, res)=>{
    res.send("Hello i am root");
});
// app.get("/apple", (req, res)=>{
//     res.send("you contacted apple path");
// });
// app.get("/orange",(req, res)=>{
//     res.send("you contected orange path");
// });

// app.get("*", (req, res) => {
//     res.send("this pat does not exit");
// });

app.get("/:username/:id",(req, res)=>{
    console.log(req.params);
    res.send("Hello i am root");
});
app.get("/search", (req, res)=>{
    console.log(req.query);
    res.send("No results");
});