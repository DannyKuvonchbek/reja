console.log("web serverni boshlash");
const express = require ("express");
const app = express();
const http = require ("http");
const fs = require ("fs");

const userData = fs.readFileSync("database/user.json", "utf-8");
const user = JSON.parse(userData);

// 1: Kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: session code
// 3: views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create", (req , res) => {
    console.log(req.body);
    res.json({test: "success"});
});

app.get("/", function (req , res) {
    res.render("about");
});

app.get("/author", (req , res) => {
    res.render("author", { user });
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});



