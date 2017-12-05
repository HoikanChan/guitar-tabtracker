const express =require("express");
const cors =require("cors");
const morgan =require("morgan");
const morgan =require("morgan");
const bodyParser =require("body-parser");

const app=express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 8081)