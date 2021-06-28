const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');


// database
require('./database');

// settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})) // para tratar datos de formularios, 
                                               // con extended: false datos sencillos
app.use(express.json());
app.use(cors());

// routes
app.use('/api', require('./routes/index'));
app.use('/api', require('./routes/user'));
app.use("/api/articles", require('./routes/article'));
app.use('/api/comments/', require('./routes/comment'));

//starting the server

async function init()  {//esto es una prueba del editor nvim
    await app.listen(app.get('port'), () => {
        console.log(`Server on port ${app.get('port')} http://localhost:3000`);
    })
};
init();
