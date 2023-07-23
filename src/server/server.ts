import express from 'express';

const server = express();

server.use(express.static("dist")); //adding middle wares 

server.set("view engine","ejs"); //creating an view engine

server.use("/", (req,res) => {
    res.render("index", {
        content: "EJS is pretty <em>cool</em>!"
    });
});

server.listen("8080", "localhost", () => {
    console.info("Express server listening on http://localhost:8080");
});
