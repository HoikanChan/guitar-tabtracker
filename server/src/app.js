const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());
app.post("/register", (req, res) => {
    console.log("email", req.body.email);
    res.send({
        message: 'hello ' + req.body.email
    })
})
app.listen(process.env.PORT || 8081)