const {Schema, model} = require('mongoose');

// structure
const hotelSchema = new Schema ({
    nombre: String,
    precio: String,
    ubicacion: String,
    imagen: String,
    fechas: [String],
    habitaciones:String,
    personas: String 
}, {
    timestamps: true,
    versionKey: false
});
// methods


// export model
module.exports = model('hotel', hotelSchema);