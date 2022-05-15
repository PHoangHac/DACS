const express = require("express");
const db = require("./models");
const postRouter = require("./routes/Post");
const usersRouter = require("./routes/Users");
const cors = require("cors");
//import thu vien


const app = express();
//khoi tao doi tuong == thu vien express

const port = 8080;
//khoi tao port

app.use(express.json());
app.use(cors());

app.get(('/'), (req, res)=>{
    res.json("Hello node js");
});

app.use("/posts", postRouter);

app.use("/auth", usersRouter);


db.sequelize.sync().then(() =>{
    app.listen(port, ()=>{
        console.log(`Server is running ${port}`);
    });
});

