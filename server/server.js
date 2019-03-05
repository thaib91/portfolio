const express = require("express");
const app = express();
require('dotenv').config();

app.use(express.static(`${__dirname}/../build`));
app.use(express.json());

const mc = require("./controllers/mainController")

const {SERVER_PORT} = process.env;

app.get('/sms', mc.getText)
app.get('/email', mc.getEmail)

app.listen(SERVER_PORT, () => console.log(`Portfolio is over ${SERVER_PORT} `));
