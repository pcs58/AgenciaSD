const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');


// database
require('./database');

// Settings
app.set('port', process.env.PORT || 3200);
const settingCert = {
    key: fs.readFileSync('../../cert/key.pem'),
    cert: fs.readFileSync('../../cert/cert.pem')
}



// Middleware
app.use(morgan('dev'));                        // Logger en modo develop
app.use(express.urlencoded({extended: false})) // para tratar datos de formularios, 
                                               // con extended: false datos sencillos
app.use(express.json());                       // para que express entienda a json
app.use(cors());                               // se utiliza para conectar sistemas con otros dominios

// Routes
// app.use('/api', require('./routes/index'));
app.use('/api/vehiculos/', require('./routes/vehiculos.routes'));


//starting the server

async function init()  {//esto es una prueba del editor nvim
    await https.createServer(settingCert, app).listen(app.get('port'), () => {
        console.log(`Server on port ${app.get('port')} https://localhost:${app.get('port')}`);
    })
};
init();