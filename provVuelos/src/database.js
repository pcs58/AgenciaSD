const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hoteles' ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(db => console.log('Database connected'));

