// const Vehiculo = require('../models/agencia.models');
const fetch = require('node-fetch');
const url = 'http://localhost:3000/api';


const agenciaMethods = {

    getCollection: async (req, res) => {
        // const {location} = req.params;
        // const agencia = await Vehiculo.find();
        // console.log(agencia);
        // res.status(201).json(agencia);
        const {coleccion} = req.params;
        fetch(url+'/'+coleccion)
        .then(resp => resp.json())
        .then(json => res.json(json));
    },
    getCollectionByLocation: async (req, res, next) => {
        const {ubicacion, coleccion} = req.params;
        fetch(url+'/'+coleccion+'/'+ubicacion)
        .then(resp => {
            if (resp.status == 200) return resp.json();
            else Error(resp.status);
        })
        .then(json => res.json(json))
        .catch(error => next(error.status));
    },
    postCollection: async (req, res) => {
        const { coleccion } = req.params;
        const nuevoElemento = req.body;
        const token = req.headers.authorization;
        const nuevaURL = url+'/'+coleccion;
        fetch(nuevaURL, {
                        method: 'POST',
                        body: JSON.stringify(nuevoElemento),
                        headers: {
                            'Content-Type': 'application/json',
                            'Autorization': 'Bearer '+token
                        }
        })
        .then(resp => resp.json())
        .then(json => res.json(json))
        // const vehiculoGuardado = await nuevoVehiculo.save();
        // res.status(201).json(vehiculoGuardado);
    },
    updateCollectionById: async (req, res) => {
        const {id} = req.params;
        const vehiculoActualizado = await Vehiculo.findByIdAndUpdate(id, req.body, { new: true});
        console.log(vehiculoActualizado.fechaOcupado);
        res.status(201).json(vehiculoActualizado);
    },
    deleteCollectionById: async (req, res) => {
        const {id} = req.params;
        const vehiculoBorrado = await Vehiculo.findByIdAndRemove(id);
        res.status(201).json(vehiculoBorrado);
    },
}

module.exports = agenciaMethods;