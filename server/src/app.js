const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const {
    sequelize
} = require("./models")
const config = require("./config/config")
const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());
require("./routes")(app)
sequelize.sync({force:false})
    .then(() => {

        app.listen(process.env.PORT || 8081)
        console.log('Server started on port' + config.port);
    })