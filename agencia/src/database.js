const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/usuarios' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(db => console.log('Base de datos de usuarios conectada'));

