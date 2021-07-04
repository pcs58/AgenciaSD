const {Schema, model} = require('mongoose');

// structure
const vehiculoSchema = new Schema ({
    nombre: String,
    precio: String,
    ubicacion: String,
    plazas: Number,
    fechaEntrada: String,
    fechaSalida: String,
}, {
    timestamps: true,
    versionKey: false
});
// methods


// export model
module.exports = model('vehiculo',vehiculoSchema);