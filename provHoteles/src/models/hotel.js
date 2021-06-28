const {Schema, model} = require('mongoose');

// structure
const hotelSchema = new Schema ({
    id: string,
    nombre: string,
    ubicacion: string,
    imagen: string,
    fechas: [string]
});
// methods


// export model
module.exports = model('hotel', hotelSchema);