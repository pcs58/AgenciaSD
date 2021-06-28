// const Vehiculo = require('../models/agencia.models');
const fetch = require('node-fetch');
const url = 'http://localhost:3000/api';


const agenciaMethods = {

    get: async (req, res) => {
        // const {location} = req.params;
        // const agencia = await Vehiculo.find();
        // console.log(agencia);
        // res.status(201).json(agencia);
        const {coleccion} = req.params;
        console.log(coleccion);
        fetch(url+'/'+coleccion)
        .then(resp => resp.json())
        .then(json => res.json(json));
    },
    getByLocation: async (req, res, next) => {
        const {ubicacion, coleccion} = req.params;
        console.log(coleccion);
        fetch(url+'/'+coleccion+'/'+ubicacion)
        .then(resp => {
            console.log(resp);
            if (resp.status == 200) return resp.json();
            else Error(resp.status);
        })
        .then(json => res.json(json))
        .catch(error => next(error.status));
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

module.exports = agenciaMethods;