const Vehiculo = require('../models/vehiculos.models');

const vehiculoMethods = {

    get: async (req, res) => {
        const {location} = req.params;
        const vehiculos = await Vehiculo.find();
        console.log(vehiculos);
        res.status(201).json(vehiculos);
    },
    getByLocation: async (req, res) => {
        const {location} = req.params;
        const vehiculos = await Vehiculo.find({"ubicacion": location});
        console.log(vehiculos);
        res.status(201).json(vehiculos);
    },
    post: async (req, res) => {
        const { nombre, precio, ubicacion, plazas,fechaOcupado } = req.body;

        const nuevoVehiculo = new Vehiculo({
            nombre,
            precio, 
            ubicacion,
            plazas,
            fechaOcupado
        });

        const vehiculoGuardado = await nuevoVehiculo.save();
        res.status(201).json(vehiculoGuardado);
    },
    updateById: async (req, res) => {
        const {id} = req.params;
        const vehiculoActualizado = await Vehiculo.findByIdAndUpdate(id, req.body, { new: true});
        console.log(vehiculoActualizado.fechaOcupado);
        res.status(201).json(vehiculoActualizado);
    },
    deleteById: async (req, res) => {
        const {id} = req.params;
        const vehiculoBorrado = await Vehiculo.findByIdAndRemove(id);
        res.status(201).json(vehiculoBorrado);
    },
}

module.exports = vehiculoMethods;