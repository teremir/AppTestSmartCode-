const express = require('express');
const bodyParser = require("body-parser");

const config = require("../config.js");
const user = require("./components/user/network");
const auth = require("./components/auth/network");
const ticket = require("./components/ticket/network");
const role = require("./components/role/network");

const app = express();

app.use(bodyParser.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//Se define las rutas
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/ticket", ticket);
app.use("/api/role", role);
app.listen(config.api.port, () => {
	console.log(`Api escuchando en el puerto ${config.api.port}`);
});