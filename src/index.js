const express = require("express");
const app = express();
const path = require("path");
const port = 8000;



const stpath = path.join(__dirname, "../views");
console.log(stpath)
app.set("views", stpath);
// app.use(express.static(stpath)); //to serve html files and css files
// app.get("/",(req,res)=>{
//     res.send("hello from the server side")

// })
// app.get("/",(req,res)=>{
//     res.send("hello from the server side")

// })
// app.get("/about",(req,res)=>{
//     res.send("hello about from the server side")

// })
// app.get("/contact",(req,res)=>{
//     res.send("hello contact from the server side")

// })
app.set("view engine","hbs");
app.get("",(req,res)=>{
    res.render("index")
});
app.get("/contact",(req,res)=>{
    res.render("contact")
});
app.listen(port, () => {
    console.log(`listening to the port ${port} `)
})