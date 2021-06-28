const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/periodico' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(db => console.log('Database connected'));

