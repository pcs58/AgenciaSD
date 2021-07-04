const Vehiculo = require('../models/vehiculos.models');

const vehiculoMethods = {

    get: async (req, res) => {
        const vehiculos = await Vehiculo.find();
        // console.log(vehiculos);
        res.status(200).json(vehiculos);
    },
    getByLocation: async (req, res) => {
        const {location} = req.params;
        const vehiculos = await Vehiculo.find({"ubicacion": location});
        // console.log(vehiculos);
        res.status(200).json(vehiculos);
    },
    getByVehiculo: async (req, res) => {
        const {location, fechaEntrada, fechaSalida, plazas} = req.params;
        const vehiculos = await Vehiculo.find({"ubicacion": location, "fechaEntrada": fechaEntrada, "fechaSalida": fechaSalida, "plazas": plazas});
        // console.log(vehiculos);
        res.status(200).json(vehiculos);
    },
    post: async (req, res) => {
        const { nombre, precio, ubicacion, plazas,fechaEntrada, fechaSalida } = req.body;

        const nuevoVehiculo = new Vehiculo({
            nombre,
            precio, 
            ubicacion,
            plazas,
            fechaEntrada,
            fechaSalida,
        });

        const vehiculoGuardado = await nuevoVehiculo.save();
        res.status(201).json(vehiculoGuardado);
    },
    updateById: async (req, res) => {
        const {id} = req.params;
        const vehiculoActualizado = await Vehiculo.findByIdAndUpdate(id, req.body, { new: true});
        // console.log(vehiculoActualizado.fechaOcupado);
        res.status(201).json(vehiculoActualizado);
    },
    deleteById: async (req, res) => {
        const {id} = req.params;
        const vehiculoBorrado = await Vehiculo.findByIdAndRemove(id);
        res.status(201).json(vehiculoBorrado);
    },
}

module.exports = vehiculoMethods;